/**
 * Created by Alwin on 29-5-2017.
 */


var body, sections;
var i;
window.onload = function(){
    body = document.body || document.documentElement;
    sections = document.querySelectorAll("body section");

};


window.onscroll = function() {
    var pageY = document.body.scrollTop || document.documentElement.scrollTop;
    for( i=0; i < sections.length; i++ ){
        var c = sections[i].getAttribute("class");
        // if(sections[i].offsetTop < pageY && (!c || c.indexOf("static") === -1)){
        //     sections[i].style.top = pageY-sections[i].offsetTop+"px";
        // }

    }
    console.log(pageY);
    // console.log(sections[1].offsetTop);

};
