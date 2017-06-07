# First..

First of all, you need to include the javascript.

###Javascript **without** easing:
```
<script src="js/plant.min.js" type="text/javascript"></script>
```
### Javascript **with** easing:
```
<script src="js/easing.min.js" type="text/javascript"></script>
<script src="js/plant.min.js" type="text/javascript"></script>
```
&nbsp;
&nbsp;
# How it works
&nbsp;
###Parent is the element where the canvas gets inserted
```javascript
var parent = document.getElementById("content");
```
Or
```javascript
var parent = document.body;
```
&nbsp;
###Simplest way:
```javascript
new Plant(
    parent, // Element where the canvas gets inserted
    100, // Percentage of the plant
    'images/plant1.png' // Image of the plant
).show();
```
&nbsp;
###With custom easings (Needs easing file included)
```javascript
new Plant(
    parent, 
    50, 
    'images/plant2.png'
).show( "easeOutQuint" );
```

```javascript
new Plant(
    parent, 
    50, 
    'images/plant3.png'
).show( Easing.easeOutSine );
```
&nbsp;
###With callback function
```javascript
new Plant(
    parent, 
    50, 
    'images/plant4.png'
).show( 
    null, 
    function (val) {
        console.log( "animation of plant 4 is done (" + val + "%)!" );
    }
);
```
&nbsp;
###With duration (in milliseconds)
```javascript
new Plant(
    parent, 
    50, 
    'images/plant5.png'
).show( 
    null, 
    null, 
    2000 
);
```
&nbsp;
###All together (Needs easing file included)
```javascript
new Plant(
    parent, 
    10, 
    'images/plant6.png'
).show( 
    "easeInOutExpo", 
    function (val) {
        console.log( "animation of plant 6 is done (" + val + "%)!" );
    }, 
    500 
);
```
