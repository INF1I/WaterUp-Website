# How it works


Parent is the element where the canvas is inserted
```javascript
var parent = document.getElementById("content");
```

 new Plant(parent, percentage, image);
    Parent is the parent element
    percentage is percentage of water in the pot
    Image is the image of the plant in the pot


Simplest way:
```javascript
new Plant(parent, 100, 'images/plant1.png').show();
```
Witch custom easings (Needs easing file included)
```javascript
new Plant(parent, 50, 'images/plant2.png').show( "easeOutQuint" );
```
```javascript
new Plant(parent, 50, 'images/plant3.png').show( Easing.easeOutSine );
```

With callback function
```javascript
new Plant(parent, 50, 'images/plant4.png').show( null, function (val) {
    console.log( "animation of plant 4 is done (" + val + "%)!" );
} );
```

With duration (in milliseconds)
```javascript
new Plant(parent, 50, 'images/plant5.png').show( null, null, 2000 );
```

All together (Needs easing file included)
```javascript
new Plant(parent, 10, 'images/plant6.png').show( "easeInOutExpo", function (val) {
    console.log( "animation of plant 6 is done (" + val + "%)!" );
}, 500 );
```
