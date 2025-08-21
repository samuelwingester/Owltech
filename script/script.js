
function ShowMenu(){document.getElementById("menu").style.left = "0";}
function HideMenu(){document.getElementById("menu").style.left = "-500px";}
function Logo() {
    if (window.innerWidth <= 550) {document.getElementById("logo-header").src = "style/logo/logo_box_blue.png";} 
    else {document.getElementById("logo-header").src = "style/logo/logo-blue.png";}
}






function Init(){
    window.addEventListener("resize", Logo);
    Logo();
}


window.addEventListener("DOMContentLoaded", Init);