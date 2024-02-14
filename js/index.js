let container = document.getElementById("container");
let mobile_header = document.getElementById("mobile_header");
// let cancell = document.getElementById("cancell");

function cancell(){
    container.style.display = "inline-block";
    mobile_header.style.display="none";
}
function doo(){
    container.style.display = "none";
    mobile_header.style.display="flex";

}
