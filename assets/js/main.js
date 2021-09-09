
const btnclose= document.querySelector(".mobile__main-icon-close");
const btnmenu = document.querySelector(".fa-bars");
btnmenu.onclick = function () {
    document.getElementById("menumobile").style.display="block";
}
let kt=true;

btnclose.onclick = function () {
    document.querySelector(".menu__sub-mobile").style.display= "none";
    kt=true;
       document.getElementById("menumobile").style.display="none";
}
const clicksubmenu= document.querySelector(".mobile__menu-item--click");
clicksubmenu.onclick = function () {
    document.querySelector(".menu__sub-mobile").style.display=(kt==true)? "block" :"none";
    kt=!kt;
}
