<?php
/**
 * Created by PhpStorm.
 * User: Alwin
 * Date: 6-6-2017
 * Time: 17:16
 */


require("phpMQTT.php");

$host = "mqtt.inf1i.ga";
$port = 8083;
$username = "inf1i-plantpot";
$password = "password";

//wss://inf1i-plantpot:password@mqtt.inf1i.ga:8083
//topic = 'inf1i-plantpot/publish/statistics';		// topic to subscribe to
//useTLS = true;

$mqtt = new phpMQTT($host, $port, "ClientID".rand());

if(!$mqtt->connect_auto(true,NULL,$username,$password)){
    die("Can't connect");
    exit(1);
}

//currently subscribed topics
$topics['inf1i-plantpot/publish/statistics'] = array("qos"=>0, "function"=>"procmsg");
$mqtt->subscribe($topics,0);

while($mqtt->proc()){
}

$mqtt->close();
function procmsg($topic,$msg){
//    die($msg);
    echo "Msg Recieved: $msg";
}