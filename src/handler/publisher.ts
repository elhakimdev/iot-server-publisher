import { faker, mqtt_config } from "..";
import * as momentTZ from 'moment-timezone';
import * as mqtt from "mqtt"

// @ts-ignore
const publisher = (...args) => {
    const host  = mqtt_config.host;
    const port  = mqtt_config.port;
    // const clientId      = mqtt_config.clientID;
    const clientId      = `mqtt_${Math.random().toString(16).slice(3)}`;
    const connectUrl    = `mqtt://${host}:${port}`;
    const client = mqtt.connect(connectUrl, {
        clientId,
        username: mqtt_config.username,
        password: mqtt_config.password,
    })
    const topic = args[0]
    client.on('error', (cb) => {
      console.log(cb.message, cb.stack, cb.name)
    })

    client.on('close', () => {
        console.log('closed')
    })

    client.on('connect', () => {
        console.log("Connected")

        // # publish dummy data fro CC201
        client.publish(topic, JSON.stringify(dataSourceGenerator('CC-201', 1.0, 2.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
            if(err) { console.log(err) }
            console.info("CC-201 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
        })

        // # publish dummy data fro CC205
        client.publish(topic, JSON.stringify(dataSourceGenerator('CC-202', 3.0, 5.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
            if(err) { console.log(err) }
            console.info("CC-202 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
        })

        // # publish dummy data fro CC203
        client.publish(topic, JSON.stringify(dataSourceGenerator('CC-203', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
            if(err) { console.log(err) }
            console.info("CC-203 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
        })
    })
}
const generateRandomInteger = (max: number) => {
    return Math.floor(Math.random() * max) + 1;
}


const dataSourceGenerator = function(
    locoId: string,
    minRange: number,
    maxRange: number,
    precision: number
){
    return  {
        "locoid": locoId,
        "gpsdatetime":momentTZ.tz('Asia/Jakarta').format("YYYY-MM-DD HH:mm:ss"),
        "longitude":faker.faker.address.longitude(),
        "latitude":faker.faker.address.latitude(),
        "speed":faker.faker.datatype.float({min: minRange, max:maxRange, precision: precision}),
        "heading":faker.faker.datatype.float({min: minRange, max:maxRange, precision: precision}),
        "tekmp":faker.faker.datatype.float({min: minRange, max:maxRange, precision: precision}),
        "tekap":faker.faker.datatype.float({min: minRange, max:maxRange, precision: precision}),
        "tekt":faker.faker.datatype.float({min: minRange, max:maxRange, precision: precision}),
        "tekcc":faker.faker.datatype.float({min: minRange, max:maxRange, precision: precision}),
        "tekbp":faker.faker.datatype.float({min: minRange, max:maxRange, precision: precision}),
        "tekbc":faker.faker.datatype.float({min: minRange, max:maxRange, precision: precision}),
        "tekmr":faker.faker.datatype.float({min: minRange, max:maxRange, precision: precision}),
        "tpse":faker.faker.datatype.float({min: minRange, max:maxRange, precision: precision}),
        "tpsete":faker.faker.datatype.float({min: minRange, max:maxRange, precision: precision}),
        "tpdsr":faker.faker.datatype.float({min: minRange, max:maxRange, precision: precision}),
        "tpdser":faker.faker.datatype.float({min: minRange, max:maxRange, precision: precision}),
        "tengroom":faker.faker.datatype.float({min: minRange, max:maxRange, precision: precision}),
        "fuel":faker.faker.datatype.float({min: minRange, max:maxRange, precision: precision}),
        "voltmg":faker.faker.datatype.float({min: minRange, max:maxRange, precision: precision}),
        "currtm1":faker.faker.datatype.float({min: minRange, max:maxRange, precision: precision}),
        "currtm2":faker.faker.datatype.float({min: minRange, max:maxRange, precision: precision}),
        "currtm3":faker.faker.datatype.float({min: minRange, max:maxRange, precision: precision}),
        "currtm4":faker.faker.datatype.float({min: minRange, max:maxRange, precision: precision}),
        "currtm5":faker.faker.datatype.float({min: minRange, max:maxRange, precision: precision}),
        "currtm6":faker.faker.datatype.float({min: minRange, max:maxRange, precision: precision}),
        "rpm": generateRandomInteger(20000),
        "throttle": generateRandomInteger(8),
        "reverser":"IDLE",
        "network":"4G",
        "sigquality": generateRandomInteger(5)
    }
}
export { publisher }
