import { faker, mqtt_config } from "..";
import moment from 'moment';
import * as momentTZ from 'moment-timezone';
import * as mqtt from "mqtt"

// @ts-ignore
const publisher = (...args) => {
    const host  = mqtt_config.host;
    const port  = mqtt_config.port;
    const clientId      = `mqtt_${Math.random().toString(16).slice(3)}`;
    const connectUrl    = `mqtt://${host}:${port}`;
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
        console.log("Connected")
        client.publish(topic, JSON.stringify({
            // floatingNum: faker.faker.datatype.float({min: 1.5, max:2.7, precision: 0.0001})
            "locoid":"CC-201-11-11 DEV TEST DOCKER",
            "gpsdatetime":moment().tz('Asia/Jakarta').format("YYYY-MM-DD HH:mm:ss"),
            "longitude":faker.faker.address.longitude(),
            "latitude":faker.faker.address.latitude(),
            "speed":faker.faker.datatype.float({min: 1.5, max:2.7, precision: 0.0001}),
            "heading":faker.faker.datatype.float({min: 1.5, max:2.7, precision: 0.0001}),
            "tekmp":faker.faker.datatype.float({min: 1.5, max:2.7, precision: 0.0001}),
            "tekap":faker.faker.datatype.float({min: 1.5, max:2.7, precision: 0.0001}),
            "tekt":faker.faker.datatype.float({min: 1.5, max:2.7, precision: 0.0001}),
            "tekcc":faker.faker.datatype.float({min: 1.5, max:2.7, precision: 0.0001}),
            "tekbp":faker.faker.datatype.float({min: 1.5, max:2.7, precision: 0.0001}),
            "tekbc":faker.faker.datatype.float({min: 1.5, max:2.7, precision: 0.0001}),
            "tekmr":faker.faker.datatype.float({min: 1.5, max:2.7, precision: 0.0001}),
            "tpse":faker.faker.datatype.float({min: 1.5, max:2.7, precision: 0.0001}),
            "tpsete":faker.faker.datatype.float({min: 1.5, max:2.7, precision: 0.0001}),
            "tpdsr":faker.faker.datatype.float({min: 1.5, max:2.7, precision: 0.0001}),
            "tpdser":faker.faker.datatype.float({min: 1.5, max:2.7, precision: 0.0001}),
            "tengroom":faker.faker.datatype.float({min: 1.5, max:2.7, precision: 0.0001}),
            "fuel":faker.faker.datatype.float({min: 1.5, max:2.7, precision: 0.0001}),
            "voltmg":faker.faker.datatype.float({min: 1.5, max:2.7, precision: 0.0001}),
            "currtm1":faker.faker.datatype.float({min: 1.5, max:2.7, precision: 0.0001}),
            "currtm2":faker.faker.datatype.float({min: 1.5, max:2.7, precision: 0.0001}),
            "currtm3":faker.faker.datatype.float({min: 1.5, max:2.7, precision: 0.0001}),
            "currtm4":faker.faker.datatype.float({min: 1.5, max:2.7, precision: 0.0001}),
            "currtm5":faker.faker.datatype.float({min: 1.5, max:2.7, precision: 0.0001}),
            "currtm6":faker.faker.datatype.float({min: 1.5, max:2.7, precision: 0.0001}),
            "rpm":faker.faker.datatype.bigInt({min:1000, max:10000}),
            "throttle":faker.faker.datatype.bigInt({min:1, max:8}),
            "reverser":"IDLE",
            "network":"4G",
            "sigquality":faker.faker.datatype.bigInt({min:1, max:5})
        }), {qos: 0, retain: false}, (err: any) => {
            if(err) { console.log(err) }
            console.info("Publishing mesage")
        })

    })
}

export { publisher }
