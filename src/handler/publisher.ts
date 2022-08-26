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
            hallo: "hallo",
            test: "test",
            floatingNum: faker.faker.datatype.float({min: 1.5, max:2.7, precision: 0.0001})
        }), {qos: 0, retain: false}, (err: any) => {
            if(err) { console.log(err) }

            console.info("Publishing mesage")
        })

    })
}

export { publisher }
