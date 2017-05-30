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

    // Overwrite onclick event of a tags with a hash
    // Need for animating scroll
    var aTags = document.getElementsByTagName("a");
    for( i = 0; i < aTags.length; i++){
        var href = aTags[i].getAttribute("href");
        if(aTags[i].getAttribute("href").substr(0,1) === "#"){
            aTags[i].onclick = function(e){
                hash = this.getAttribute("href");
                history.pushState(null, "User Manual "+hash.substr(1,hash.length-1), hash);
                locationHashChanged(hash);
                e.preventDefault();
                return false;
            };
        }
    }
    Explanations();
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