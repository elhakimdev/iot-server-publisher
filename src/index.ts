import { generator } from './handler/generator';
import { Argument, Option, Command } from 'commander';
import { publisher } from './handler/publisher';
import * as fakerJs from '@faker-js/faker';

export const base_path = __dirname;
export const config_folder_name = 'config';
export const faker = fakerJs;

const program = new Command()

program
  .name('mqtt')
  .description('CLI to implement MQTT Publisher Service Mockup For Iot project')
  .version('0.0.0');

  program
    .command('generate-config')
    .addOption(new Option('-s, --server-broker <server>', 'The server connection to be used for messaging').choices(['tcp/ip', 'http', 'https', 'ws', 'wss', 'mqtt', 'mqtts']).default('mqtt'))
    .addOption(new Option('-h, --host <host>', 'The public IP address host for given protocol').default('127.0.0.1'))
    .addOption(new Option('-p, --port <port>', 'The port of connection address').default('1883'))
    .addOption(new Option('-u, --username <username>', 'The username for authentication thorugh the broker service').default(null))
    .addOption(new Option('-pwd, --password <password>', 'The password for authentication thorugh the broker service').default(null))
    .addArgument(new Argument('<path>', 'The path for generated config file'))
    .addArgument(new Argument('<topic>', 'The topic of message'))
    .addArgument(new Argument('<loco>', 'The type of locomotive that sending this message'))
    .action(function(...args){
      generator(...args)
    })

  program
    .command('publish')
    .addArgument(new Argument('<path>', 'The file config path for publishing message setup'))
    .addArgument(new Argument('<topic>', 'The topic of message'))
    .addArgument(new Argument('<interval>', 'The interval of message tht being published'))
    .action((...args) => {
      setInterval(() => {
        publisher(...args)
      }, args[2])
    })

program.parse(process.argv)
