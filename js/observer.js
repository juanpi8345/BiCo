"use strict";

const banner = document.getElementById("banner");
const software = document.getElementById("software");
const offers = document.getElementById("offers");
const creative = document.getElementById("creative");
const sector = document.getElementById("sector");
const clientes = document.getElementById("clientes");
const precios = document.getElementById("precios");
const eficiencia = document.getElementById("eficiencia");

let arr = [banner, software, offers, creative, sector,clientes,precios,eficiencia];

const genericObserver = entry => {
    const section = document.getElementById(`${entry.target.id}`);
    if (entry.isIntersecting) section.style.animation = "aparecer 3s forwards";
    else section.style.animation = "desaparecer 1s forwards";
}

const softwareObserver = entry => {
    const container = document.querySelector(".container-seccion")
    if (entry.isIntersecting) container.style.animation = "aparecer 3s forwards";
    else container.style.animation = "desaparecer 1s forwards";
}

const offersObserver = entry => {
    const container = document.querySelector(".offer-container");
    const columnas = document.querySelectorAll(".offer");
    const images = document.querySelectorAll(".img-offers");
    if (entry.isIntersecting) {
        container.style.animation = "aparecer 3s forwards";
        for (let columna of columnas) {
            columna.style.animation = "aparecer 3s forwards";
        }
        for (let img of images) {
            img.style.animation = "moverArriba 2s forwards";
        }
    }
    else {
        for (let columna of columnas) {
            columna.style.animation = "desaparecer 3s forwards";
        }
        for (let img of images) {
            img.style.animation = "moverAbajo 2s forwards";
        }
    }
}

const creativeObserver = entry => {
    const elements = document.querySelectorAll(".creative-element");
    if (entry.isIntersecting) {
        for (let element of elements) {
            element.style.animation = "trasladarArriba 2s forwards";
        }
    } else {
        for (let element of elements) {
            element.style.animation = "trasladarAbajo 3s forwards";
        }
    }
}

const sectorObserver = entry => {
    const columna = document.querySelector(".obsSector");
    const navs = document.querySelectorAll(".obsSectorNav");
    if (entry.isIntersecting) {
        columna.style.animation = "aparecer 3s forwards";
        for(const nav of navs){
            nav.style.animation = "trasladarArriba 2s forwards";
        }
    } else {
        columna.style.animation = "desaparecer 3s forwards";
        for(const nav of navs){
            nav.style.animation = "trasladarAbajo 1s forwards";
        }
    }
}

const clientesObserver = entry =>{
    const elemento = document.querySelector(".client-element");
    const testElements = document.querySelectorAll(".testimonio-element");
    if(entry.isIntersecting){
        elemento.style.animation = "aparecer 3s forwards";
        for(const element of testElements){
           setTimeout(()=>{
               element.style.animation = "aparecer 1.5s forwards";
           },500)
        }
    }else{
        elemento.style.animation = "desaparecer 3s forwards";
        for(const element of testElements){
            element.style.animation = "desaparecer 1s forwards";
         }
    }
}

const preciosObserver = entry=>{
    const element = document.querySelector(".prize-element");
    if(entry.isIntersecting) element.style.animation = "aparecer 3s forwards";
    else element.style.animation = "desaparecer 1s forwards";
}

const eficienciaObserver = entry=>{
    const elements = document.querySelectorAll(".eficiencia-element");
    if(entry.isIntersecting){
        for(const element of elements){
            element.style.animation = "aparecer 2s forwards";
       } 
    }else{
        for(const element of elements){
            element.style.animation = "desaparecer 2s forwards";
       } 
    }
}

const verifyVisibility = (entries) => {

    for (const entry of entries) {
        if (`${entry.target.id}` === "banner") genericObserver(entry);
        if (`${entry.target.id}` === "software") softwareObserver(entry);
        if (`${entry.target.id}` === "offers") offersObserver(entry);
        if (`${entry.target.id}` === "creative") creativeObserver(entry);
        if (`${entry.target.id}` === "sector") sectorObserver(entry);
        if (`${entry.target.id}` === "clientes") clientesObserver(entry);
        if (`${entry.target.id}` === "precios") preciosObserver(entry);
        if (`${entry.target.id}` === "eficiencia") eficienciaObserver(entry);
    }
}

const options = {
    rootMargin: "-120px"
}

const observer = new IntersectionObserver(verifyVisibility, options);

for (const section of arr) {
    observer.observe(section);

}


