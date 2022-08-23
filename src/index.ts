import { generator } from './handler/generator';
import { Argument, Option, Command } from 'commander';
export const base_path = __dirname;
export const config_folder_name = 'config';

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
    .addArgument(new Argument('<path>', 'The path for generated file'))
    .addArgument(new Argument('<topic>', 'The topic of message'))
    .addArgument(new Argument('<loco>', 'The type of locomotive'))
    .action(function(...args){
      generator(...args)
    })

  program
    .command('publish')

program.parse(process.argv)
