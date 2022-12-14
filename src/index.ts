
import { Argument, Command } from 'commander';
import { publisher } from './handler/publisher';
import * as fakerJs from '@faker-js/faker';
import * as dotEnv from 'dotenv';
import { MqttConnection } from './services/mqtt';



export const base_path = __dirname;
export const config_folder_name = 'config';
export const faker = fakerJs;
export const envConfig = dotEnv;

envConfig.config();

export const mqtt_config = {
  host: process.env.MQTT_HOST as unknown as string,
  port: process.env.MQTT_PORT as unknown as string,
  username: process.env.MQTT_USERNAME as unknown as string,
  password: process.env.MQTT_PASSWORD as unknown as string,
  connectTimeout: process.env.MQTT_CONNECT_TIMEOUT as unknown as number,
  reconnectPeriod: process.env.MQTT_RECONNECT_PERIOD as unknown as number,
  qos: process.env.MQTT_QOS as unknown as number,
  retain: process.env.MQTT_RETAIN as unknown as boolean,
  clientID: process.env.MQTT_CLIENTID as unknown as string
}

const program = new Command()

MqttConnection.on("error", (error) => {
  console.log("Mqtt Error " + error.message) // hanldee when conneection error here
})

MqttConnection.on("disconnect", (packet) => {
  console.log("Mqtt Connection Was Disconnected") // hanldee when disconneect here
})

MqttConnection.on("close", () => {
  console.log("Mqtt Connection Was Closed") // hanldee when conneection close here
})

program
  .name('mqtt')
  .description('CLI to implement MQTT Publisher Service Mockup For Iot project')
  .version('0.0.0');

  program
    .command('publish')
    .addArgument(new Argument('<topic>', 'The topic of message'))
    .addArgument(new Argument('<interval>', 'The interval of message tht being published'))
    .action((...args) => {
      MqttConnection.on("connect", () => {
        setInterval(() => {
          publisher(...args)
        }, args[1])
      })
    })

program.parse(process.argv)

process.on('SIGINT', () => {
  console.info("Interrupted")
  process.exit(0)
})
