
import { Argument, Option, Command } from 'commander';
import { dataSourceGenerator, publisher } from './handler/publisher';
import * as fakerJs from '@faker-js/faker';
import * as dotEnv from 'dotenv';
import { MqttService } from './services/mqtt';
import * as momentTZ from 'moment-timezone';



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

program
  .name('mqtt')
  .description('CLI to implement MQTT Publisher Service Mockup For Iot project')
  .version('0.0.0');

  program
    .command('publish')
    .addArgument(new Argument('<topic>', 'The topic of message'))
    .addArgument(new Argument('<interval>', 'The interval of message tht being published'))
    .action((...args) => {
      setInterval(() => {
        publisher(...args)
      }, args[1])
    })

  program.command('check-singleton')
    .action((...args) => {
      const checkSingleton = {
        client1: MqttService.getInstance().getConnectionOption(),
        client2: MqttService.getInstance().getConnectionOption()
      }
      console.log(checkSingleton.client1 === checkSingleton.client2) // check to cconnection instance to prevent multiple connection when publishing mmultiple message to broker
    })

program.parse(process.argv)

process.on('SIGINT', () => {
  console.info("Interrupted")
  process.exit(0)
})
