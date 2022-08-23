import { existsSync } from 'node:fs';
import { base_path, config_folder_name } from '..';
import * as fileSystem from 'fs';
// @ts-ignore
const generator = (...args) => {
    const params = {
        path: args[0], 
        topic: args[1],
        loco: args[2]
    }

    // const { path, topic, loco } = params;
    const { path, topic, loco } = params;

    const dirPath = {
        current: __dirname,
        config: base_path + `/${config_folder_name}`,
        destination: base_path +`/${config_folder_name}/` + `${path}/${topic}/${loco}`
    }

    if(!existsSync(dirPath.destination)){
        fileSystem.mkdirSync(dirPath.destination, { 
            recursive: true
        })
    }

    const buildContext = {
        context: {
            topic: topic ?? null,
            locomotive: loco ?? null,
            interval: 1000 ?? null,
            message: null
        }
    }

    const filename = dirPath.destination + `/${loco}`;

    fileSystem.writeFileSync(filename + '.json', JSON.stringify(buildContext), { 
        encoding: 'utf-8'
    });
}
export { generator }