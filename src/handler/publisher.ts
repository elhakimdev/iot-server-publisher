import { faker, mqtt_config } from "..";
import moment from 'moment';
import * as momentTZ from 'moment-timezone';

// @ts-ignore
const publisher = (...args) => {
    const mqtt  = require('mqtt');
    const host  = mqtt_config.host;
    const port  = mqtt_config.port;
    const clientId      = `mqtt_${Math.random().toString(16).slice(3)}`;
    const connectUrl    = `mqtt://${host}:${port}`;
    // const payload = {
    //     locoid: "CC202-11-11",
    //     gpsdatetime: momentTZ.tz('Asia/jakarta').format('YYYY-MM-DD HH:mm:ss'),
    //     longitude: faker.faker.address.longitude(112, 100, 5),
    //     latitude:${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},
    //     speed: ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},
    //     heading: ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},
    //     tekmp: ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},
    //     tekap: ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},
    //     tekt: ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},
    //     tekcc: ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},
    //     tekbp: ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},
    //     tekbc: ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},
    //     tekmr: ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},
    //     tpse: ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},
    //     tpsete: ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},
    //     tpdsr: ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},
    //     tpdser: ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},
    //     tengroom: ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},
    //     fuel: ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},
    //     voltmg: ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},
    //     currtm1: ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},
    //     currtm2: ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},
    //     currtm3: ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},
    //     currtm4: ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},
    //     currtm5: ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},
    //     currtm6: ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},
    //     rpm: ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},
    //     throttle: faker.faker.datatype.number({ min:1, max: 8, precision: 1 }),
    //     reverser: "FOR",
    //     network: "TSEL 2G/3G/4G",
    //     sigquality: faker.faker.datatype.number({min: 1, max: 5, precision: 1})
    // }  

    // momentTZ.tz('Asia/jakarta').format('YYYY-MM-DD HH:mm:ss

    const context = `{"locoid": "CC202-11-11","gpsdatetime": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"longitude": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"latitude":${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"speed": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"heading": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"tekmp": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"tekap": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"tekt": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"tekcc": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"tekbp": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"tekbc": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"tekmr": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"tpse": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"tpsete": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"tpdsr": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"tpdser": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"tengroom": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"fuel": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"voltmg": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"currtm1": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"currtm2": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"currtm3": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"currtm4": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"currtm5": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"currtm6": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"rpm": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"throttle": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))},"reverser": "FOR","network": "TSEL4G","sigquality": ${parseFloat((Math.random() * (3.5 - 1.5) + 1.5).toFixed(4))}}`

    const client = mqtt.connect(connectUrl, {
        clientId,
        clean: true,
        connectTimeout: mqtt_config.connectTimeout,
        username: mqtt_config.username,
        password: mqtt_config.password,
        reconnectPeriod: mqtt_config.reconnectPeriod,
    })
    const topic = args[1]
    client.on('connect', () => {
        console.info(`Successfully connected to broker : [ ${(connectUrl as string)} on : ${momentTZ.tz('Asia/jakarta').format('YYYY-MM-DD HH:mm:ss')}, zone : ${moment().zoneAbbr()}]`)
        client.publish(topic, context, { qos: mqtt_config.qos, retain: mqtt_config.retain }, (error: any) => {
            if (error) {
                console.error(error)
            }
            console.info(`Client : [${clientId}] was publishing message with topic: [ ${(topic as string)} ] to : [ ${(connectUrl as string)} ]`)
        })

    })
}

export { publisher }
