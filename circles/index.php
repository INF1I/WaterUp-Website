
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <script src="Easing.js" type="text/javascript"></script>
    <script src="Plant.js" type="text/javascript"></script>


    <title>test</title>
</head>
<body>
    <div id="content"></div>

    <script>



        //////////////////////////////////////////
        //                                      //
        //             How it works             //
        //                                      //
        //////////////////////////////////////////

        // Need parent, element where canvas is inserted
        var parent = document.getElementById("content");

        //
        // new Plant(parent, percentage, image);
        //     Parent is the parent element
        //     percentage is percentage of water in the pot
        //     Image is the image of the plant in the pot
        //

        // Simplest way:
            new Plant(parent, 100, 'images/plant1.png').show();

        // Witch custom easings
            new Plant(parent, 50, 'images/plant2.png').show( "easeOutQuint" );
            new Plant(parent, 50, 'images/plant3.png').show( Easing.easeOutSine );

        // With callback function
            new Plant(parent, 50, 'images/plant4.png').show( null, function (val) {
                console.log( "animation of plant 4 is done (" + val + "%)!" );
            } );

        // With duration (in milliseconds)
            new Plant(parent, 50, 'images/plant5.png').show( null, null, 2000 );


        // All together
            new Plant(parent, 10, 'images/plant6.png').show( "easeInOutExpo", function (val) {
                console.log( "animation of plant 6 is done (" + val + "%)!" );
            }, 500 );

    </script>
</body>
</html>