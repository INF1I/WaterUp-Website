/**
 * Created by Alwin on 29-5-2017.
 */

// Initial variables
var menu, menuSpacing, scrollElement;
var menuOffsetTop;
var i, animationNum = 0;


window.onload = function(){

    // Setup variables for menu
    menu = document.getElementsByClassName("main-menu")[0];
    menuSpacing = document.getElementsByClassName("menu-spacing")[0];
    menuOffsetTop = menu.offsetTop;

    // Setup variables for scrolling
    scrollElement = document.getElementsByClassName("scroll-element")[0];
    scrollElement.onscroll = scrolling;
    scrolling();

    // Overwrite onclick event of all elements with class 'hash-url'.
    // Need for animating scroll
    var hashLinks = document.getElementsByClassName("hash-url");
    for( i = 0; i < hashLinks.length; i++){
        hashLinks[i].onclick = function(e){
            locationHashChanged(this.getAttribute("href"));
            e.preventDefault();
            return false;
        };
    }
};

// Get new position for menu by resizing
window.onresize = function(){
    menuOffsetTop = window.innerHeight-menu.offsetHeight;
};


window.onscroll = scrolling;

// Scroll effects
function scrolling(){
    // Get scroll position
    var pageY = scrollElement.scrollTop;

    if(typeof menu !== "undefined"){
        // Set menu fixed at the top or not
        if(pageY > menuOffsetTop){
            menu.style.position = "fixed";
            menu.style.top = "0px";
            menuSpacing.style.display = "block";
        }else{
            menu.style.position = "relative";
            menu.style.top = "-50px";
            menuSpacing.style.display = "none";
        }
    }
}


// Scroll to the right page
function locationHashChanged(h) {
    var p = h.substr(1, h.length-1);
    var el = document.getElementById(p);
    if( typeof el !== "undefined" && el !== null){
        scrollTo(scrollElement, el.offsetTop, 500);
        return false;
    }
}

// Scroll to specific place
function scrollTo(element, to, duration) {
    var elapsed = 0;
    var toppos = element.scrollTop;
    if(toppos <= 0) toppos = 1;
    animationNum++;
    animateScroll(elapsed, toppos, to, duration, element, animationNum);
}



// Animate the scrolling effect
function animateScroll(elapsed, from, to, duration, el, num){
    if(el.scrollTop === to) return;
    if(num !== animationNum) return;
    el.scrollTop = easeInOutCubic(null, elapsed, from, to-from, duration);
    setTimeout(function(){
        animateScroll(elapsed+10, from, to, duration, el, num)
    },10);
}

// EaseInOutCubic function (from jQuery)
function easeInOutCubic(x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
}