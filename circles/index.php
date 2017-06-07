<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Circle</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        html, body{
            width: 100%;
            height: 100%;
        }
        canvas{
            float: left;
        }
        .refresh{
            position: fixed;
            top: 0;
            left: 50%;
            width: 200px;
            margin-left: -100px;
            text-align: center;
        }
    </style>
</head>
<body>
<!--
    This is for emmet
        canvas#plant$[width=400 height=600]*3
        canvas#plant$[width=400 height=600 style=max-width:50%;]*3
-->
    <canvas id="plant1" width="400" height="600" style="max-width:50%;"></canvas>
    <canvas id="plant2" width="400" height="600" style="max-width:50%;"></canvas>
    <canvas id="plant3" width="400" height="600" style="max-width:50%;"></canvas>
    <canvas id="plant4" width="400" height="600" style="max-width:50%;"></canvas>
    <canvas id="plant5" width="400" height="600" style="max-width:50%;"></canvas>
    <canvas id="plant6" width="400" height="600" style="max-width:50%;"></canvas>

    <a class="refresh" href="#" onclick="window.location.href = window.location.href;">Renew</a>
    <script>

        var backgroundColor = "#FFF;";
        window.onload = function(){

            for(var i = 1; i <= 6; i++){
                writePlantTo('plant'+i,"images/plant"+i+".png", 0);
                animatePlant(i);
            }
//            animate(0, 40, 1000, 0, function(p){
//                writeCircleTo('plant2', parseInt(p));
//                writeTextTo('plant2', parseInt(p));
//            });
//            animate(90, 30, 1000, 0, function(p){
//                writeCircleTo('plant3',parseInt(p));
//                writeTextTo('plant3', parseInt(p));
//            });
        };
        function animatePlant(num){
            animate(0, Math.floor( Math.random() * 70 ), 1000, 0, function(p){
                writeCircleTo('plant'+num, parseInt(p));
                writeTextTo('plant'+num, parseInt(p));
            });
        }
        function animate(from, to, duration, elapsed, func, finished){

            // t: current time, b: begInnIng value, c: change In value, d: duration
            var newValue = easeInOutCubic(null, elapsed, from, to-from, duration);
            func( newValue );

            if( elapsed >= duration ) {
                if(typeof finished === "function"){
                    finished( newValue );
                }


                return;
            }
            setTimeout(function () {
                animate(from, to, duration, elapsed+10, func, finished);
            }, 10);
        }

        function writePlantTo(plant, image, percentage){
            var canvas = document.getElementById(plant);
            var context = canvas.getContext('2d');
            context.clearRect(0,0,canvas.width, canvas.height);


            var img = new Image();
            img.src = image;

            writeCircleTo(plant, percentage);

            writeTextTo(plant, percentage);


            var maxSize = 300;
            img.onload = function(){
//                img_elem,dx_or_sx,dy_or_sy,dw_or_sw,dh_or_sh,dx,dy,dw,dh
                var w = this.width;
                var h = this.height;
                var newW, newH;
                if(h/w*maxSize < w/h*maxSize){
                    newW = maxSize;
                    newH = h/w*maxSize;
                }else{
                    newW = w/h*maxSize;
                    newH = maxSize;
                }
//                var newW = w/w*100;
//                console.log(( 400 - newW ) / 2 + " - " + newW);
//                console.log(( 400 - newH ) / 2 + " - " + newH);

                context.drawImage(this, ( 400 - newW ) / 2, ( 400 - newH ) / 2, newW, newH);
            };


        }
        function writeTextTo(plant, percentage){
            var canvas = document.getElementById(plant);
            var context = canvas.getContext('2d');
            context.clearRect(0, 400, canvas.width, 200);
            context.font = "80pt Century Gothic";
            context.fillStyle = "#0099FF";
            context.textAlign="center";
            var centerX = canvas.width / 2;
            context.fillText(percentage+"%",centerX,500);
        }
        function getColor(percentage){
            var from, to, newColor;
            if( percentage <= 20 ){
                from = "FF9900";
                to = "FF0000";
                newColor = color().calculate(from, to, percentage / 20);
            }else if( percentage <= 40 ){
                from = "0099FF";
                to = "FF9900";
                newColor = color().calculate(from, to, (percentage-20) / 20);
            }else{
                return "#0099FF";
            }
            return '#' + newColor;

        }

//        function calculate(from, to, percentage){
//            var f = /([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(from);
//            var t = /([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(to);
//
//
//            console.log(f[1]+": "+hexToRgb(f[1]));
//            console.log(f[2]+": "+hexToRgb(f[2]));
//            console.log(f[3]+": "+hexToRgb(f[3]));
//            console.log(t);
//            console.log("---- ^ ");
//
//        }
        function color(){

            this.calculate = function(from, to, percentage){
                var f = /([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(from);
                var t = /([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(to);

                var a = this.compare( this.hexToRgb(f[1]), this.hexToRgb(t[1]), percentage );
                var b = this.compare( this.hexToRgb(f[2]), this.hexToRgb(t[2]), percentage );
                var c = this.compare( this.hexToRgb(f[3]), this.hexToRgb(t[3]), percentage );

                return this.componentToHex(a) + this.componentToHex(b) + this.componentToHex(c);
            };
            this.compare = function(b, a, p){
                if(a === b) return a;
                if(a < b){
                    return parseInt( a + ( ( b - a ) * p ) );
                }else{
                    return parseInt( a - ( ( a - b ) * p ) );
                }
            };
            this.componentToHex = function(c) {
                var hex = c.toString(16);
                return hex.length === 1 ? "0" + hex : hex;
            };

            this.hexToRgb = function(hex) {
                return parseInt(hex, 16);
            };

            return this;
        }
        function writeCircleTo(plant, percentage){

            var canvas = document.getElementById(plant);
            var context = canvas.getContext('2d');
            var centerX = canvas.width / 2;
            var centerY = (canvas.height-200) / 2;
            var radius = 190;


            context.beginPath();
//            context.globalCompositeOperation = 'destination-out';
            context.arc(centerX, centerY, radius, 0, Math.PI*2, true);
            context.lineWidth = 19;
            context.strokeStyle = "#FFF";
            context.stroke();
//            context.fill();
            context.closePath();

            var size = 1.5 - ( 0.02 * percentage );

            context.beginPath();
//            context.moveTo(centerX,centerY);
            context.arc(centerX, centerY, radius, size * Math.PI, 1.5 * Math.PI, false);
            context.lineWidth = 15;
//            console.log(percentage);
            context.strokeStyle = getColor(percentage);
            context.stroke();
            context.closePath();
        }

        // https://gist.github.com/icodeforlove/83fbeadccb8f416cd284
        // EaseInOutCubic function (from jQuery)
        // t: current time, b: begInnIng value, c: change In value, d: duration
        function easeInOutCubic(x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        }
        var cutCircle = function(context, x, y, radius){
        }
    </script>
</body>
</html>