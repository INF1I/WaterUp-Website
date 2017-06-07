<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>MQTT</title>

    <script src="js/mqtt.js"></script>
    <script src="js/jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="js/config.js" type="text/javascript"></script>
    <script src="js/script.js" type="text/javascript"></script>

    <style>
        html, body{
            background: #333;
            font-family: "Century Gothic", serif;
        }
        .content{
            width: 100%;
            font-size: 28px;

        }
        .content th{
            width: 25%;
            text-align: left;
            padding: 15px;
        }
        .titles tr th{
            font-size: 30px;
            font-weight: bold;
            background: #CCC;
        }
        .items{
            width: 100%;

        }
        .content td{
            padding: 15px;
        }
        .item{
            background: #EEE;
            height: 50px;
            overflow: hidden;

        }
    </style>
</head>
<body>

    <table class="content" cellspacing="0" >
        <thead class="titles">
            <tr>
                <th>#</th>
                <th>MAC address</th>
                <th>Moisture level</th>
                <th>Water content</th>
            </tr>
        </thead>
        <tbody class="items">
        </tbody>
    </table>
</body>
</html>