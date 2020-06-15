require('dotenv').config();

const mqtt = require('mqtt');

let topic = process.argv[2];
let id = process.argv[3];

const client = mqtt.connect(process.env.MQTT_SERVER, {
    clientId: 'SimpleListener' + id,
    username: 'BKvm2',
    password: 'Hcmut_CSE_2020'
});



console.log("ID: " + client.options.clientId);
console.log("Topic: " + topic);


client.subscribe(topic, {qos: 2}, function(err){
    if(err){
        console.log(err);
    }
});

client.on('message', function(topic, message){
    console.log([new Date().toLocaleString(), topic, message.toString()]);
});