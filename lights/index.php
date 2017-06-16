<?php
/**
 * Created by PhpStorm.
 * User: Alwin
 * Date: 15-6-2017
 * Time: 21:18
 */

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lights</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        html,body{
            background: #000;
            width: 100%;
            height: 100%;
        }
        #loop{
            width: 99%;
            height: 400px;
        }
        #testBtn{
            border: solid 1px #333;
            background: #FFF;
            padding: 10px 40px;
            cursor: pointer;
        }
        table{
            position: relative;
            left: 50%;
            margin-left: -500px;
            width: 1000px;
        }
        .led{
            position: relative;
            width: 20px;
            height: 20px;
            margin: 10px;
            display: inline-block;
            background: rgb(20, 20, 20);
        }
    </style>
</head>
<body>
    <textarea id="loop">

var pos = 0;
var r = 200;
var g = 0;
var b = 0;
var loopNr = 0;
return function(){
    strip.clear();
    if((loopNr) % 60 == 0){
        r=200; g=0; b=0;
    }
    if((loopNr+20) % 60 == 0){
        r=0; g=200; b=0;
    }
    if((loopNr+40) % 60 == 0){
        r=0; g=0; b=200;
    }
    for(var i=pos;i<strip.numPixels();i+=2){
        strip.setPixel(i,r,g,b);
    }
    strip.show();
    pos = pos == 0 ? 1 : 0;
    loopNr++;
    if(loopNr == 60){
        loopNr = 0;
    }
    delay(200);
};
</textarea>
    <input type="button" id="testBtn" value="Test" />
    <br />
    <br />
    <br />
    <br />
    <div class="led"></div>
    <div class="led"></div>
    <div class="led"></div>
    <div class="led"></div>
    <div class="led"></div>
    <div class="led"></div>
    <div class="led"></div>
    <div class="led"></div>
    <div class="led"></div>
    <div class="led"></div>
    <div class="led"></div>
    <div class="led"></div>
    <div class="led"></div>
    <div class="led"></div>
    <div class="led"></div>
    <div class="led"></div>
    <div class="led"></div>
    <div class="led"></div>
    <div class="led"></div>
    <div class="led"></div>
    <div class="led"></div>
    <div class="led"></div>
    <div class="led"></div>
    <div class="led"></div>
    <div class="led"></div>
<script>
    var leds,
        loopTextarea,
        testBtn,
        pixels_to_light_up = [],
        strip,
        loopFunc = null,
        delayNum = 0;
    var speed = 20;
    window.onload = function(){
        leds = document.getElementsByClassName("led");
        loopTextarea = document.getElementById("loop");
        testBtn = document.getElementById("testBtn");
        strip = new ledStrip();
        testBtn.onclick = function () {
            var a = new Function(loopTextarea.value);
            loopFunc = a.call();
            delayNum = 0;
        };
        setInterval("loop();",speed);
    };
    var ledStrip = function(){
        this.show = function(){
            for(i in pixels_to_light_up){
                var data = pixels_to_light_up[i];

                leds[i].style.background = "rgb(" + data.r + "," + data.g + "," + data.b + ")";
                leds[i].style.boxShadow = "0 0 50px 10px rgb(" + data.r + "," + data.g + "," + data.b + ")";
                leds[i].style.zIndex = "99";
            }
            pixels_to_light_up = [];
        };
        this.setPixel = function(led, r, g, b){
            pixels_to_light_up[led] = {r: r, g:g, b: b};
        };
        this.clear = function(){
//            var leds = document.getElementsByClassName("led");
//            for(i in leds){
//                if(!leds.hasOwnProperty(i)) continue;
//                leds[i].setAttribute("style","");
//            }
            var i = 0;
            while(i < leds.length){
                leds[i].style.background = "rgb(20, 20, 20)";
                leds[i].style.boxShadow = "none";
                leds[i].style.zIndex = "98";
                i++;
            }

//            console.log(leds[1].style.background);
//            console.log(leds.l);
        };
        this.numPixels = function(){
            return leds.length;
        }
    };
    function loop(){
        if(delayNum > 0){
            delayNum--;
            return;
        }
        if(loopFunc !== null){
            loopFunc.call();

        }

    }
    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds){
                break;
            }
        }
    }
    function delay(d){
        if(d > 40) d -= 40;
        delayNum = Math.floor(d/speed);
    }
</script>
</body>
</html>
