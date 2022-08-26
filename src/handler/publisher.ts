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
        // console.info(`Successfully connected to broker : [ ${(connectUrl as string)} on : ${momentTZ.tz('Asia/jakarta').format('YYYY-MM-DD HH:mm:ss')}, zone : ${moment().zoneAbbr()}]`)
        // client.publish(topic, JSON.stringify({
        //     hello: "hello",
        //     from: "browser"
        // }), {1}, (error: any) => {
        //     if (error) {
        //         console.error(error)
        //     }
        //     console.info(`Client : [${clientId}] was publishing message with topic: [ ${(topic as string)} ] to : [ ${(connectUrl as string)} ]`)
        // })

        console.log("Connected")

        client.publish(topic, JSON.stringify({
            hallo: "hallo",
            test: "test"
        }), {qos: 0, retain: false}, (err: any) => {
            if(err) { console.log(err) }

            console.info("Publishing mesage")
        })

    })
}

export { publisher }
