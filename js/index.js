let container = document.getElementById("container");
let mobile_header = document.getElementById("mobile_header");
let complete = document.getElementById("complete");
let btt = document.getElementById("btt");
let showless = document.getElementById("showless");
let bttt = document.getElementById("bttt");
let showwless = document.getElementById("showwless");
// let cancell = document.getElementById("cancell");


function cancell(){
    container.style.display = "inline-block";
    mobile_header.style.display="none";
}
function doo(){
    container.style.display = "none";
    mobile_header.style.display="flex";

}
function showw(){
    complete.style.display="inline-block";
    btt.style.display="none";
    showless.style.display="inline-block";

}
function showless_hide(){
    complete.style.display="none";
    btt.style.display="inline-block";
    showless.style.display="none";  
}

function showww(){
    complete.style.display="inline-block";
    bttt.style.display="none";
    showwless.style.display="inline-block";

}
function showwless_hide(){
    complete.style.display="none";
    bttt.style.display="inline-block";
    showwless.style.display="none";  
}