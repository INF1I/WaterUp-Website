/**
 * Created by Alwin on 29-5-2017.
 */


var body, sections;
var i;
window.onload = function(){
    body = document.body || document.documentElement;
    sections = document.querySelectorAll("body section");

    for( i=0; i < sections.length; i++ ){
        var toppos = sections[i].offsetTop;
        sections[i].style.top = toppos + "px";
        sections[i].style.height = sections[i].offsetHeight + "px";
        // sections[i].style.position = "absolute";
        // sections[i].style.height = window.innerHeight + "px";
        console.log(i + ": " + toppos)
    }
    for( i=0; i < sections.length; i++ ){
        sections[i].style.position = "absolute";
    }

    // console.log(body.offsetHeight*sections.length);
    // body.style.height = body.scrollHeight + "px";
    // console.log(body.scrollHeight);
    //
    // body.on = function(e){
    //     console.log(e);
    // };
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
