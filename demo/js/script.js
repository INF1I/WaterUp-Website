/**
 * Created by Alwin on 6-6-2017.
 */


//Using the HiveMQ public Broker, with a random client Id

var mqtt;
var reconnectTimeout = 500;
var itemsEl;
var counter, macAddress;

function MQTTconnect() {
    if (typeof path == "undefined") {
        path = '#';
    }
    var name = "web_" + Math.floor( ( Math.random() * 900 ) + 100 );
    mqtt = new Messaging.Client(
        host,
        Number(port),
        path,
        name
    );
    console.log(name);
    var options = {
        timeout: 3,
        useSSL: useTLS,
        cleanSession: cleansession,
        onSuccess: onConnect,
        onFailure: function (message) {
            console.log("Connection failed: " + message.errorMessage + " Retrying");
            setTimeout(MQTTconnect, reconnectTimeout);
        }
    };
    mqtt.onConnectionLost = onConnectionLost;
    mqtt.onMessageArrived = onMessageArrived;
    if (username != null) {
        options.userName = username;
        options.password = password;
    }
    console.log("Host="+ host + ", port=" + port + ", path=" + path + " TLS = " + useTLS + " username=" + username + " password=" + password);
    mqtt.connect(options);
}
function onConnect() {
    console.log('Connected to ' + host + ':' + port + path);
    console.log('Subscribing to ' + topic );
    // Connection succeeded; subscribe to our topic
    // mqtt.subscribe("#");
    // mqtt.subscribe(topic);
}
function onConnectionLost(response) {
    console.log("connection lost: " + response.errorMessage + ". Reconnecting");
    // console.log( mqtt.getTraceLog() );
    // setTimeout(MQTTconnect, reconnectTimeout);
};
function onMessageArrived(message) {
    //{mac:test-mac,type:potstats-mesg,counter:0,moisture:123,waterLevel:123}

    var m = JSON.parse( message.payloadString );

    if(counter !== m['counter'] || macAddress !== m['mac']){
        var tr = $("<tr class='item'></tr>");
            tr.append("<td>" + m['counter'] + "</td>"); // Num
            tr.append("<td>" + m['mac'] + "</td>"); // Mac
            tr.append("<td>" + m['moisture'] + "</td>"); // Moisture
            tr.append("<td>" + m['waterLevel'] + "</td>"); // Water content
        counter = m['counter'];
        macAddress = m['mac'];
        itemsEl.prepend(tr);
    }

    console.log("________________________________________");
    console.log("TOPIC: " + message.destinationName);
    console.log( m );
};
$(document).ready(function() {
    itemsEl = $(".items");
    // setTimeout(MQTTconnect,5000);
    MQTTconnect();
});