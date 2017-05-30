/**
 * Created by Alwin on 29-5-2017.
 */


var body, sections, menu, menuSpacing;
var menuOffsetTop;
var i;
window.onload = function(){
    body = document.body || document.documentElement;
    sections = document.querySelectorAll("body section");
    menu = document.getElementsByClassName("main-menu")[0];
    menuSpacing = document.getElementsByClassName("menu-spacing")[0];
    menuOffsetTop = menu.offsetTop;
};


window.onscroll = function() {
    var pageY = document.body.scrollTop || document.documentElement.scrollTop;
    if(pageY > menuOffsetTop){
        menu.style.position = "fixed";
        menu.style.top = "0px";
        menuSpacing.style.display = "block";
    }else{
        menu.style.position = "relative";
        menu.style.top = "-50px";
        menuSpacing.style.display = "none";
    }
    for( i=0; i < sections.length; i++ ){
        var c = sections[i].getAttribute("class");
        // if(sections[i].offsetTop < pageY && (!c || c.indexOf("static") === -1)){
        //     sections[i].style.top = pageY-sections[i].offsetTop+"px";
        // }

    }
    console.log(pageY);
    console.log(menu.offsetTop);

};

// if ("onhashchange" in window) {
//     alert("The browser supports the hashchange event!");
// }
//
// function locationHashChanged() {
//     if (location.hash === "#somecoolfeature") {
//         somecoolfeature();
//     }
// }
//
// window.onhashchange = locationHashChanged;