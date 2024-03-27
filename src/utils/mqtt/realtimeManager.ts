// import MQTT from 'sp-react-native-mqtt'; // Assuming type definitions exist

// interface ConnectionProps {
//   clientId?: string;
//   channelToUse?: string;
//   auth?: boolean;
//   clean?: boolean;
//   // Add any other connection properties as needed
// }

// class MqttClientManager {
//   private static instance: MqttClientManager;
//   private client?: MQTT.Client;
//   private conProps: ConnectionProps;
//   private QOS: number = 1; // Only 0 and 1 supported by Rabbit


//   private constructor() {}

//   public static getInstance(userID: string, connectionProps: ConnectionProps = {}): MqttClientManager {
//     if (!MqttClientManager.instance) {
//       MqttClientManager.instance = new MqttClientManager();
//     }

//     if (userID && connectionProps) {
//       // http://www.hivemq.com/demos/websocket-client/
//       this.conProps = {
//         clientId: `realtime.${userID}.${this.randIdCreator().replace(/[^a-zA-Z0-9]+/g, '')}`,
//         channelToUse: `mqtt-subscription-realtime.${userID}`,
//         auth: false,
//         clean: true,
//         ...connectionProps, // Apply user-provided connection props
//       };

//       MQTT.createClient(this.conProps)
//         .then((client) => {
//           this.client = client;
//           client.on('closed', this.onConnectionClosed);
//           client.on('error', this.onError);
//           client.on('message', this.onMessageArrived);
//           client.on('connect', this.onConnectionOpened);
//           client.connect();
//         })
//         .catch((err) => {
//           console.error(`MQTT.createtClient error: ${err}`);
//         });
//     }

//     return MqttClientManager.instance;
//   }

//   private randIdCreator(): string {
//     // eslint-disable-next-line
//     const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
//     return `random${S4()}${S4()}${S4()}${S4()}${S4()}${S4()}${S4()}${S4()}${S4()}${S4()}${S4()}${S4()}${S4()}${S4()}${S4()}${S4()}${S4()}`;
//   }

//   public disconnect(): void {
//     if (this.client) {
//       console.log('Now killing open realtime connection.');
//       this.client.disconnect();
//     }
//   }

//   private onError(error: Error): void {
//     console.error(`MQTT onError: ${error}`);
//   }

//   private onConnectionOpened(): void {
//     // subscribe to the client channel
//     if (this.client) {
//       this.client.subscribe(this.conProps.channelToUse!, this.QOS); // Use non-null assertion after type check
//     }
//     console.log('MQTT onConnectionOpened');
//   }

//   private onConnectionClosed(err?: Error): void {
//     console.log(`MQTT onConnectionClosed ${err?.message || ''}`); // Handle potential undefined error
//   }

//   private onMessageArrived(message: MQTT.Message): void {
//     if (message) {
//       console.log(`MQTT New message: ${JSON.stringify(message)}`);
//     }
//   }
// }

// // Usage example:
// const mqttClientManager = MqttClientManager.getInstance('your_user_id', { /* optional connection props */ });
// mqttClientManager.disconnect(); // Call disconnect when needed
