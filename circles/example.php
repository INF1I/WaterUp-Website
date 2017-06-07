<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <script src="js/easing.min.js" type="text/javascript"></script>
    <script src="js/plant.min.js" type="text/javascript"></script>


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

    <a class="refresh" href="#" onclick="window.location.href = window.location.href;">Renew</a>

    <script>

        window.onload = function(){

            for(var i = 1; i <= 6; i++){
                var plant = new Plant(
                    document.body,
                    Math.floor(Math.random() * 100),
                    "images/plant" + i + ".png"
                );
                plant.canvas.style.maxWidth = "50%";
                plant.show(null, null, 2000);
            }
        };



    </script>
</body>
</html>