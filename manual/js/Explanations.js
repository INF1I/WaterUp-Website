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

        c.addEventListener('mousemove', function(e) {

            var mousePos = getMousePos(c, e);
            var x = mousePos.x;
            var y = mousePos.y;
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.drawImage(img,360,0);

            if(isInBlock(x,y, 564, 78, 648, 162)){
                getCode(ctx).addWaterUpPlantPot();
            }
            if(isInBlock(x,y, 360, 150, 600, 450)){
                getCode(ctx).waterPercentage();
            }
            if(isInBlock(x, y, 600, 460, 840, 800)){
                getCode(ctx).waterUpPlantPot();
            }
        }, false);

    };
}

// Get new position for menu by resizing
window.onresize = function(){
    menuOffsetTop = window.innerHeight-menu.offsetHeight;
};


function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function isInBlock(currX, currY, startX, startY, endX, endY){
    return currX >= startX &&
        currX <= endX &&
        currY >= startY &&
        currY <= endY;
}

function getCode(ctx){
    return {
        waterPercentage: function(){

            // Line to text
            ctx.beginPath();
            ctx.moveTo(480,155);
            ctx.lineTo(100,155);
            ctx.lineWidth = 2;
            ctx.strokeStyle = "#FFF";
            ctx.stroke();

            // Text
            ctx.font = "16pt Century Gothic";
            ctx.fillStyle = "#FFF";
            ctx.fillText("Water percentage",100,145);
        },
        addWaterUpPlantPot: function(){

            // Circle
            ctx.beginPath();
            ctx.arc(606, 120, 40, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(0,0,0,0.6)';
            ctx.strokeStyle = "#FFF";
            ctx.fill();
            ctx.lineWidth = 2;
            ctx.stroke();

            // Line to text
            ctx.beginPath();
            ctx.moveTo(646,120);//280
            ctx.lineTo(1170,120);
            ctx.stroke();

            // Text
            ctx.font = "16pt Century Gothic";
            ctx.fillStyle = "#FFF";
            ctx.fillText("Add a new WaterUp plant pot",854,110);
        },
        waterUpPlantPot: function () {

            // Oval
            ctx.beginPath();
            ctx.arc(720, 590, 120, Math.PI * 1, 2 * Math.PI, false);
            ctx.arc(720, 670, 120, Math.PI * 2, 1 * Math.PI, false);
            ctx.lineTo(600,590);
            ctx.fillStyle = 'rgba(0,0,0,0.6)';
            ctx.strokeStyle = "#FFF";
            ctx.fill();
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.lineWidth = 2;

            // Line to text
            ctx.beginPath();
            ctx.moveTo(720,630);//280
            ctx.lineTo(1100,630);
            ctx.stroke();

            // Text
            ctx.font = "16pt Century Gothic";
            ctx.fillStyle = "#FFF";
            ctx.fillText("WaterUp plant pot",905,620);
        }
    };
}