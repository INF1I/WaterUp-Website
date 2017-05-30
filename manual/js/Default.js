/**
 * Created by Alwin on 29-5-2017.
 */

// Initial variables
var body, sections, menu, menuSpacing;
var menuOffsetTop;
var i;

// Call function when page is loaded.
window.onload = function(){
    body = document.body || document.documentElement;
    sections = document.querySelectorAll("body section");
    menu = document.getElementsByClassName("main-menu")[0];
    menuSpacing = document.getElementsByClassName("menu-spacing")[0];
    menuOffsetTop = menu.offsetTop;
    scrolling();
};


window.onscroll = scrolling;

function scrolling(){
    // Get scroll position
    var pageY = document.body.scrollTop || document.documentElement.scrollTop;

    if(typeof menu !== "undefined"){
        // Set menu fixed at the top or not
        if(pageY > menuOffsetTop){
            menu.style.position = "fixed";
            menu.style.top = "0px";
            menuSpacing.style.display = "block";
        }else {
            menu.style.position = "relative";
            menu.style.top = "-50px";
            menuSpacing.style.display = "none";
        }
    }
    // Overwrite onclick all elements with class 'hash-url'.
    // Need for animating scroll
    var hashLinks = document.getElementsByClassName("hash-url");
    for( i = 0; i < hashLinks.length; i++){
        hashLinks[i].onclick = function(e){
            locationHashChanged(this.getAttribute("href"));
            e.preventDefault();
            return false;
        };
    }
}


// Scroll to the right page
function locationHashChanged(h) {
    var p = h.substr(1, h.length-1);
    var el = document.getElementById(p);
    if( typeof el !== "undefined" && el !== null){
        // Cross-browser fix
        if(document.body.scrollTop){
            scrollTo(document.body, el.offsetTop, 500);
            return false;
        }else if(document.documentElement.scrollTop){
            scrollTo(document.documentElement, el.offsetTop, 500);
            return false;
        }
    }
}

// Scroll to specific place
function scrollTo(element, to, duration) {
    var elapsed = 0;
    animateScroll(elapsed, element.scrollTop, to, duration, element);
}
// Animate the scrolling effect
function animateScroll(elapsed, from, to, duration, el){
    if(el.scrollTop == to)  return;
    el.scrollTop = easeInOutCubic(null, elapsed, from, to-from, duration);
    setTimeout(function(){
        animateScroll(elapsed+10, from, to, duration, el)
    },10);
}
// EaseInOutCubic function (from jQuery)
function easeInOutCubic(x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
};