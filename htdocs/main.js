
document.getElementById("logbtn").addEventListener("click", function(){
    window.location.href="loginpage.html";
});
document.getElementById("regbtn").addEventListener("click", function(){
    window.location.href="regpage.html";
});

function zoomIn(element){
    element.style.transform = "scale(1.2)";
}
function zoomInSlight(element){
    element.style.transform="scale(1.1)";
}
function zoomOut(element){
    element.style.transform = "scale(1)";
}

