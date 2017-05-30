/**
 * Created by Alwin on 29-5-2017.
 */

// Initial variables
var canvas, ctx;
function Explanations(){
    // http://www.html5canvastutorials.com/
    var c=document.getElementById("choose_plant_screen");
    var ctx=c.getContext("2d");
    var img = new Image();
    img.src = "images/choose_plant.jpg";
    img.onload = function(){
        ctx.drawImage(this,360,0);
        ctx.beginPath();
        ctx.moveTo(480,155);
        ctx.lineTo(100,155);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#FFF";
        // ctx.fontSize = "40px";
        //
        // ctx.strokeWidth("5")
        ctx.stroke();
        ctx.font = "16pt Century Gothic";
        ctx.fillStyle = "#FFF";
        ctx.fillText("Water percentage",100,145);
        ctx.beginPath();
        ctx.moveTo(720,130);
        ctx.lineTo(840,130);
        ctx.stroke();

    };
}

// Get new position for menu by resizing
window.onresize = function(){
    menuOffsetTop = window.innerHeight-menu.offsetHeight;
};

