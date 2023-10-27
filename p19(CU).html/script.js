var menuBtn=document.querySelector(".menu-btn");
var navList=document.querySelector(".navlist");

menuBtn.onclick=function(){
    navList.classList.toggle('active');
}