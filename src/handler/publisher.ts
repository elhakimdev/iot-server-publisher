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
    const payload = {
        locoid: "CC202-11-11",
        gpsdatetime: momentTZ.tz('Asia/jakarta').format('YYYY-MM-DD HH:mm:ss'),
        longitude: faker.faker.address.longitude(112, 100, 5),
        latitude: faker.faker.address.longitude(1, -0.1, 5),
        speed: faker.faker.datatype.float({min: 0, max:100, precision: 0.001 }),
        heading: faker.faker.datatype.float({min: 0, max:100, precision: 0.001 }),
        tekmp: faker.faker.datatype.float({min: 0, max:100, precision: 0.001 }),
        tekap: faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        tekt: faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        tekcc: faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        tekbp: faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        tekbc: faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        tekmr: faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        tpse: faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        tpsete: faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        tpdsr: faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        tpdser: faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        tengroom: faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        fuel: faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        voltmg: faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        currtm1: faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        currtm2: faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        currtm3: faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        currtm4: faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        currtm5: faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        currtm6: faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        rpm: faker.faker.datatype.number({min: 1000, max: 100000, precision: 100 }),
        throttle: faker.faker.datatype.number({ min:1, max: 8, precision: 1 }),
        reverser: "FOR",
        network: "TSEL 2G/3G/4G",
        sigquality: faker.faker.datatype.number({min: 1, max: 5, precision: 1})
    }

    // const stringify = (obj: Object) => {
    //     // Iterate over keys, reducing to a string
    //     let str = Object.keys(obj).reduce((acc, cur) => {
    //         // @ts-ignore
    //         let next = `${cur}: "${obj[cur]}"`;
    //         return acc
    //             ? `${acc}, ${next}`
    //             : `{${next}`;
    //     }, '');
        
    //     // Return, appending final '}'
    //     return `${str}}`;
    // }
    
    const context = JSON.stringify({
        "locoid": "CC202-11-11",
        "gpsdatetime": momentTZ.tz('Asia/jakarta').format('YYYY-MM-DD HH:mm:ss'),
        "longitude": faker.faker.address.longitude(112, 100, 5),
        "latitude": faker.faker.address.longitude(1, -0.1, 5),
        "speed": faker.faker.datatype.float({min: 0, max:100, precision: 0.001 }),
        "heading": faker.faker.datatype.float({min: 0, max:100, precision: 0.001 }),
        "tekmp": faker.faker.datatype.float({min: 0, max:100, precision: 0.001 }),
        "tekap": faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        "tekt": faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        "tekcc": faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        "tekbp": faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        "tekbc": faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        "tekmr": faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        "tpse": faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        "tpsete": faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        "tpdsr": faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        "tpdser": faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        "tengroom": faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        "fuel": faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        "voltmg": faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        "currtm1": faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        "currtm2": faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        "currtm3": faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        "currtm4": faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        "currtm5": faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        "currtm6": faker.faker.datatype.float({ min:0 , max:100, precision: 0.001 }),
        "rpm": faker.faker.datatype.number({min: 1000, max: 100000, precision: 100 }),
        "throttle": faker.faker.datatype.number({ min:1, max: 8, precision: 1 }),
        "reverser": "FOR",
        "network": "TSEL4G",
        "sigquality": faker.faker.datatype.number({min: 1, max: 5, precision: 1})
    })

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
