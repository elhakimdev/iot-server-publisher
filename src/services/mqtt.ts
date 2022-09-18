import * as dotEnv from 'dotenv';
import * as mqtt from 'mqtt';
import { MqttClient, IClientOptions } from 'mqtt';
dotEnv.config();
export const mqttConfigOptions = {
    host: process.env.MQTT_HOST as unknown as string,
    port: process.env.MQTT_PORT as unknown as string,
    username: process.env.MQTT_USERNAME as unknown as string,
    password: process.env.MQTT_PASSWORD as unknown as string,
    connectTimeout: process.env.MQTT_CONNECT_TIMEOUT as unknown as number,
    reconnectPeriod: process.env.MQTT_RECONNECT_PERIOD as unknown as number,
    qos: process.env.MQTT_QOS as unknown as number,
    retain: process.env.MQTT_RETAIN as unknown as boolean,
    clientID: process.env.MQTT_CLIENTID as unknown as string
}
class MqttService {
    private static instance: MqttService;
    private MqttConnection: MqttClient;
    private MqttConnectionConfigOption : IClientOptions;
    /**
     * The MqttService's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() {

        this.MqttConnectionConfigOption = {
            clientId: 'mqttjs_' + Math.random().toString(16).slice(3),
            username: mqttConfigOptions.username,
            password: mqttConfigOptions.password,
            clean: true,
            keepalive: 60
        }

        const connectUrl    = `mqtt://${mqttConfigOptions.host}:${mqttConfigOptions.port}`;

        this.MqttConnection = mqtt.connect(connectUrl, this.MqttConnectionConfigOption)
    }
    /**
     * The static method that controls the access to the MqttService instance.
     *
     * This implementation let you subclass the MqttService class while keeping
     * just one instance of each subclass around.
     * To prevent memory leaked
     */
    public static getInstance(): MqttService {
        if (!MqttService.instance) {
            MqttService.instance = new MqttService();
        }

        return MqttService.instance;
    }

    /**
     * The public method that usefull to get the current connection instance.
     * 
     * use this method to get the current connectioninstancee instead creating  new connection to broker
     */
    public getConnection() : MqttClient {
        return this.MqttConnection;
    }

    /**
     * The public method that returning Mqtt Config Options.
     * 
     * use to see config option
     */
    public getConnectionOption() : IClientOptions {
        return this.MqttConnectionConfigOption;
    }
}

const Mqtt = MqttService.getInstance();
const MqttConnection = Mqtt.getConnection();

export { Mqtt, MqttConnection }     