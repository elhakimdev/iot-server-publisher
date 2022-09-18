import { faker, mqtt_config } from "..";
import * as momentTZ from 'moment-timezone';
import * as mqtt from "mqtt"
import { MqttConnection } from "../services/mqtt";

// @ts-ignore
const publisher = (...args) => {

    const topic = args[0];

    // # publish dummy data fro CC201
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-201', 1.0, 2.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-201 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC205
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-202', 3.0, 5.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-202 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC203
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-203', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-203 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC204
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-204', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-204 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC205
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-205', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-205 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC206
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-206', 1.0, 2.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-206 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC207
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-207', 3.0, 5.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-207 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC208
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-208', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-208 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC209
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-209', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-209 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2010
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2010', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2010 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })

    // # publish dummy data fro CC2011
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2011', 1.0, 2.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2011 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2012
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2012', 3.0, 5.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2012 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2013
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2013', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2013 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2014
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2014', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2014 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2015
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2015', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2015 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2016
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2016', 1.0, 2.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2016 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2017
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2017', 3.0, 5.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2017 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2018
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2018', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2018 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2019
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2019', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2019 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })

    // # publish dummy data fro CC2020
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2020', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2020 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })        
    // # publish dummy data fro CC2021
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2021', 1.0, 2.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2021 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2022
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2022', 3.0, 5.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2022 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2023
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2023', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2023 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2024
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2024', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2024 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2025
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2025', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2025 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2026
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2026', 1.0, 2.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2026 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2027
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2027', 3.0, 5.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2027 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2028
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2028', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2028 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2029
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2029', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2029 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2030
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2030', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2030 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })

    // # publish dummy data fro CC2031
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2031', 1.0, 2.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2031 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2032
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2032', 3.0, 5.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2032 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2033
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2033', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2033 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2034
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2034', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2034 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2035
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2035', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2035 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2036
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2036', 1.0, 2.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2036 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2037
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2037', 3.0, 5.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2037 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2038
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2038', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2038 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2039
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2039', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2039 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2040
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2040', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2040 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })

    // # publish dummy data fro CC2041
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2041', 1.0, 2.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2041 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2042    
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2042', 3.0, 5.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2042 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2043
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2043', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2043 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2044
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2044', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2044 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2045
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2045', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2045 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2046
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2046', 1.0, 2.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2046 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2047
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2047', 3.0, 5.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2047 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2048
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2048', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2048 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2049
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2049', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2049 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
    // # publish dummy data fro CC2050
    MqttConnection.publish(topic, JSON.stringify(dataSourceGenerator('CC-2050', 6.0, 8.9, 0.001)), {qos: 0, retain: false}, (err: any) => {
        if(err) { console.log(err) }
        console.info("CC-2050 sensor dummy message Succesfully Published at : " + momentTZ.tz('Asia/jakarta').toLocaleString())
    })
}
export const generateRandomInteger = (max: number) => {
    return Math.floor(Math.random() * max) + 1;
}


export const dataSourceGenerator = function(
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
