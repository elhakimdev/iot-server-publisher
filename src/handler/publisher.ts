import { readFileSync } from "fs"
import { base_path, faker } from ".."

// @ts-ignore
const publisher = (...args) => {
    // console.log(...args)
    const mqtt = require('mqtt')
    const host = '156.67.210.148'
    const port = '1883'
    const clientId = `mqtt_${Math.random().toString(16).slice(3)}`
    const connectUrl = `mqtt://${host}:${port}`
    const config = readFileSync(base_path+'/config/' + args[0], {
        encoding: 'utf-8'
    })

    const context = JSON.stringify({
        locoid: "CC202-11-11",
        gpsdatetime: Date.now().toLocaleString(),
        longitude: faker.faker.address.longitude(112, 100, 5),
        latitude: faker.faker.address.longitude(1, -0.1, 5),
        speed: faker.faker.datatype.float({
            min: 0,
            max:100,
            precision: 0.001
        }),
        heading: faker.faker.datatype.float({
            min: 0,
            max:100,
            precision: 0.001
        }),
        tekmp: faker.faker.datatype.float({
            min: 0,
            max:100,
            precision: 0.001
        }),
        tekap: faker.faker.datatype.float({
            min: 0,
            max:100,
            precision: 0.001
        }),
        tekt: faker.faker.datatype.float({
            min: 0,
            max:100,
            precision: 0.001
        }),
        tekcc: faker.faker.datatype.float({
            min: 0,
            max:100,
            precision: 0.001
        }),
        tekbp: faker.faker.datatype.float({
            min: 0,
            max:100,
            precision: 0.001
        }),
        tekbc: faker.faker.datatype.float({
            min: 0,
            max:100,
            precision: 0.001
        }),
        tekmr: faker.faker.datatype.float({
            min: 0,
            max:100,
            precision: 0.001
        }),
        tpse: faker.faker.datatype.float({
            min: 0,
            max:100,
            precision: 0.001
        }),
        tpsete: faker.faker.datatype.float({
            min: 0,
            max:100,
            precision: 0.001
        }),
        tpdsr: faker.faker.datatype.float({
            min: 0,
            max:100,
            precision: 0.001
        }),
        tpdser: faker.faker.datatype.float({
            min: 0,
            max:100,
            precision: 0.001
        }),
        tengroom: faker.faker.datatype.float({
            min: 0,
            max:100,
            precision: 0.001
        }),
        fuel: faker.faker.datatype.float({
            min: 0,
            max:100,
            precision: 0.001
        }),
        voltmg: faker.faker.datatype.float({
            min: 0,
            max:100,
            precision: 0.001
        }),
        currtm1: faker.faker.datatype.float({
            min: 0,
            max:100,
            precision: 0.001
        }),
        currtm2: faker.faker.datatype.float({
            min: 0,
            max:100,
            precision: 0.001
        }),
        currtm3: faker.faker.datatype.float({
            min: 0,
            max:100,
            precision: 0.001
        }),
        currtm4: faker.faker.datatype.float({
            min: 0,
            max:100,
            precision: 0.001
        }),
        currtm5: faker.faker.datatype.float({
            min: 0,
            max:100,
            precision: 0.001
        }),
        currtm6: faker.faker.datatype.float({
            min: 0,
            max:100,
            precision: 0.001
        }),
        rpm: faker.faker.datatype.number({
            min: 1000, max: 100000, precision: 100
        }),
        throttle: faker.faker.datatype.number({
            min:1,
            max: 8,
            precision: 1
        }),
        // reverser: "string ("FO"R","IDLE",REV")",
        network: "TSEL 2G/3G/4G",
        sigquality: faker.faker.datatype.number({
            min: 1, max: 5, precision: 1
        }),
    })
    // this must be refactoring to used env
    const client = mqtt.connect(connectUrl, {
        clientId,
        clean: true,
        connectTimeout: 4000,
        username: 'riza',
        password: 'komara',
        reconnectPeriod: 1000,
    })
    const topic = args[1]
    client.on('connect', () => {
        console.log('Connected to broker')
        client.publish(topic, context, { qos: 0, retain: false }, (error: any) => {
            if (error) {
                console.error(error)
            }
            console.log('Success Publishing Data')
        })

    })
}

export { publisher }
