<?php
/**
 * Created by PhpStorm.
 * User: Alwin
 * Date: 29-5-2017
 * Time: 11:34
 */

//Century Gothic
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="css/Reset.css" rel="stylesheet" />
    <link href="css/font-awesome.min.css" rel="stylesheet" />
    <link href="css/Default.css" rel="stylesheet" />
    <title>User Manual</title>
</head>
<body>
<div class="scroll-element">
    <section id="main" class="static">
        <div class="logo">
            <h1 class="name">WaterUp<span class="sub">User Manual</span></h1>
            <video autoplay width="1150" height="500" > <!-- 1200x873 -->
                <source src="logo.webm" />
            </video>
        </div>
    </section>
    <ul class="main-menu">
        <li>
            <a href="#main" class="hash-url">Main</a>
        </li>
        <li>
            <a href="#download" class="hash-url">Download the WaterUp app</a>
        </li>
        <li>
            <a href="#connect" class="hash-url">Connect with the WaterUp plant pot</a>
        </li>
        <li>
            <a href="#choose_plant" class="hash-url">Choose your plant</a>
        </li>
    </ul>
    <div class="menu-spacing"></div>
    <section id="download">
        <header>
            <h2>Download the WaterUp app</h2>
        </header>
        <article>
            <div class="left">
                <h2>Android</h2>
                <ul>
                    <li>Open the 'Play Store'.</li>
                    <li>In the search box at the top, type: 'WaterUp - app'.</li>
                    <li>Select the app 'WaterUp - app'.</li>
                    <li>Tap on 'Install' on the right side.</li>
                    <li>After install, tap on 'Open' to open the app.</li>
                </ul>
            </div>
            <div class="right">
                <h2>Apple</h2>
                <ul>
                    <li>Open the 'App Store'.</li>
                    <li>In the search box at the top, type: 'WaterUp - app'.</li>
                    <li>Select the app 'WaterUp - app' and click on 'Get'.</li>
                    <li>Tap on 'Install' that appears in the same location as the previous get button.</li>
                    <li>After install, tap on 'Open' to open the app.</li>
                </ul>
            </div>
        </article>
    </section>
    <section id="connect">
        <header>
            <h2>Connect with the WaterUp plant pot</h2>
        </header>
        <article>
            <div class="left">
                <ul>
                    <li>Open the app you've downloaded.<br />
                        If you haven't download it yet, follow the instruction: '<a href="#download">Download the app</a>'.</li>
                    <li>Tap the plus in top-right corner.</li>
                    <li>Take a photo of the QR-code. <br />
                        You can find the QR-code on the first page after the cover of the User Manual which is included when you bought the WaterUp plant pot.</li>
                    <li>When the message 'Connected' appears, the plant pot is added.</li>
                    <li>Go to step 3 of the instruction: '<a href="#choose_plant">Choose your plant</a>'.</li>
                </ul>
            </div>
            <div class="right">
                <figure>
                    <img src="images/chart.png" alt="QR-code example"/>
                    <figcaption>QR-code example</figcaption>
                </figure>
            </div>
        </article>
    </section>
    <section id="choose_plant">
        <header>
            <h2>Choose your plant</h2>
        </header>
        <article>
            <div class="left">
                <ul>
                    <li>
                        Open the app you've downloaded.<br />
                        If you haven't download it yet, follow the instruction: '<a href="#download">Download the app</a>'.
                    </li>
                    <li>
                        Select your WaterUp plant pot.<br />
                        If you haven't added one, follow the instruction: '<a href="#connect">Connect with the WaterUp plant pot</a>'.
                    </li>
                    <li>
                        Click on the photo icon <i class="fa fa-photo circle-icon"></i> to make a photo of the plant.<br />
                        Or click on the bars icon <i class="fa fa-bars circle-icon"></i> to choose from a list.
                    </li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="right">
            </div>
        </article>
    </section>
    <section id="screens">
        <header>
            <h2>Application screens explanation</h2>
        </header>
        <article>
            <canvas id="choose_plant_screen" width="1200" height="800">
            </canvas>
<!--            <img src="images/choose_plant.jpg" width="480" height="800" alt="Choose plant image" />-->
        </article>
    </section>
    <section id="general">
        <header>
            <h2>General</h2>
        </header>
        <article>
            <div class="left">
                <ul>
                    <li>

                    </li>
                </ul>
            </div>
            <div class="right">
            </div>
        </article>
    </section>
</div>
<script src="js/Default.js"></script>
<script src="js/Explanations.js"></script>
</body>
</html>
