/**
 * Created by Alwin on 7-6-2017.
 */


// Background color of the web-page
var backgroundColor = "#FFF";


// To generate a unique id for each canvas.
var idNum = 0;

// Plant function to generate a plant canvas
function Plant(parent, percentage, image){


    // Save some data
    this.parent = parent;
    this.percentage = percentage;
    this.image = image;
    this.id = idNum++;

    // Create canvas
    var canvas = document.createElement('canvas');
        canvas.width = 400;
        canvas.height = 600;
        canvas.id = "plant" + this.id;
    parent.appendChild(canvas);

    // Get canvas ( getting by id, cause this fixes a bug )
    this.canvas = document.getElementById("plant" + this.id);
    this.context = this.canvas.getContext('2d');



    // Function to show pot
    this.show = function(easing, callback, duration){
        this.writePlantTo( this.image, 0);
        var t = this;

        Animate(0, this.percentage, duration, 0, easing, function(p, t){

            t.writeCircleTo( parseInt(p) );
            t.writeTextTo( parseInt(p) );
        },callback, t);
    };

    this.writePlantTo = function(image, percentage){

        // Clear image
        this.context.clearRect(0,0,this.canvas.width, this.canvas.height);

        // Write circle and text to image
        this.writeCircleTo(percentage);
        this.writeTextTo(percentage);

        // Need for image onload function.
        var context = this.context;

        // Add image to canvas
        var img = new Image();
            img.src = this.image;
            img.onload = function(){
                var maxSize = 300;
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
                context.drawImage(this, ( 400 - newW ) / 2, ( 400 - newH ) / 2, newW, newH);
            };


    };


    // Write text to image
    this.writeTextTo = function( percentage ){
        this.context.clearRect(0, 400, this.canvas.width, 200);
        this.context.font = "80pt Century Gothic";
        this.context.fillStyle = "#0099FF";
        this.context.textAlign="center";
        var centerX = canvas.width / 2;
        this.context.fillText(percentage+"%",centerX,500);
    };

    // Write circle to image
    this.writeCircleTo = function( percentage ){

        // Positions
        var centerX = this.canvas.width / 2;
        var centerY = ( this.canvas.height-200) / 2;
        var radius = 190;

        // Clear circle in image
        this.context.beginPath();
        this.context.arc(centerX, centerY, radius, 0, Math.PI*2, true);
        this.context.lineWidth = 19;
        this.context.strokeStyle = backgroundColor;
        this.context.stroke();
        this.context.closePath();

        // Percentage to pi
        var size = 1.5 - ( 0.02 * percentage );

        // Write circle to image
        this.context.beginPath();
        this.context.arc(centerX, centerY, radius, size * Math.PI, 1.5 * Math.PI, false);
        this.context.lineWidth = 15;
        this.context.strokeStyle = new Color().getColor(percentage);
        this.context.stroke();
        this.context.closePath();

    };

    return this;
}


//
// Animating function. Can be used to animate everything.
// from         Number to start from.
// to           Number to go to.
// duration     Animation duration.
// elapsed      Time elapsed.
// ease         Easing (could be a function, name or null).
// func         Function that is called every time.
// finished     Function that is called when animating is finished (could be null).
// extra        Extra data to send with the animate to function that is called every time.
//
var Animate = function(from, to, duration, elapsed, ease, func, finished, extra){

    // If duration not is set
    if( typeof duration !== "number" ) duration = 1000;
    if( duration < 10 ){
        elapsed = 10;
        duration = 10;
    }

    var newValue; // init var

    // Which easing should be used
    if(typeof ease === "function"){
        newValue = ease(null, elapsed, from, to-from, duration);
    }else if(typeof ease === "string"){
        newValue = Easing[ease](null, elapsed, from, to-from, duration);
    }else{
        newValue = Easing.easeInOutCubic(null, elapsed, from, to-from, duration);
    }



    if( typeof extra !== "undefined"){
        // Call animate-function with new value and extra data
        func( newValue, extra );
    }else{
        // Call animate-function with new value
        func( newValue );
    }

    // When animating is done.
    if( elapsed >= duration ) {
        if(typeof finished === "function"){
            // Call finished function
            finished( newValue );
        }
        return;
    }

    // Recursive call for animating
    setTimeout(function () {
        Animate(from, to, duration, elapsed+10, ease, func, finished, extra);
    }, 10);
};


//
// Function that helps with colors.
//
function Color(){

    //
    // Calculate color
    // Example:
    //      from: #FFFFFF
    //      to: #DDDDDD
    //      percentage: 50%
    //   Call: Color().calculate("FFFFFF", "DDDDDD", 0.5)
    //   Return: "EEEEEE"
    //
    this.calculate = function(from, to, percentage){
        var f = /([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(from);
        var t = /([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(to);

        var a = this.calcNewVal( this.hexToRgb(f[1]), this.hexToRgb(t[1]), percentage );
        var b = this.calcNewVal( this.hexToRgb(f[2]), this.hexToRgb(t[2]), percentage );
        var c = this.calcNewVal( this.hexToRgb(f[3]), this.hexToRgb(t[3]), percentage );

        return this.componentToHex(a) + this.componentToHex(b) + this.componentToHex(c);
    };

    // Calculate new value by percent
    this.calcNewVal = function(b, a, p){
        if(a === b) return a;
        if(a < b){
            return parseInt( a + ( ( b - a ) * p ) );
        }else{
            return parseInt( a - ( ( a - b ) * p ) );
        }
    };
    // Transforms RGB(component) to HEX
    this.componentToHex = function(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };

    // Transforms HEX to RGB
    this.hexToRgb = function(hex) {
        return parseInt(hex, 16);
    };

    // Get color for circle
    this.getColor = function(percentage){
        var from, to, newColor;
        if( percentage <= 20 ){
            from = "FF9900";
            to = "FF0000";
            newColor = this.calculate(from, to, percentage / 20);
        }else if( percentage <= 40 ){
            from = "0099FF";
            to = "FF9900";
            newColor = this.calculate(from, to, (percentage-20) / 20);
        }else{
            return "#0099FF";
        }
        return '#' + newColor;

    };

    return this;
}
