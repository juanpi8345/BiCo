"use strict";

const body = document.getElementById("body");
const barras = document.querySelector(".fa-bars");
const menuResponsive = document.querySelector(".menu-responsive");
const itemsResponsive = document.querySelectorAll(".item-responsive");

barras.addEventListener("click",e=>{
    e.preventDefault();
    menuResponsive.classList.toggle("abierto");
    barras.classList.toggle("fa-close");
    body.classList.toggle("overflow");
})

for(const item of itemsResponsive){
    item.addEventListener("click",()=>{
        menuResponsive.classList.toggle("abierto");
        body.classList.toggle("overflow");
        barras.classList.toggle("fa-close");
    })
}

