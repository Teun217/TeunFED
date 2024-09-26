// JavaScript Document
console.log("hi");

// agenda
const nextButtonAgenda = document.querySelector("section:nth-of-type(2) button:nth-of-type(2)");
const prevButtonAgenda = document.querySelector("section:nth-of-type(2) button:nth-of-type(1)");
const theListAgenda = document.querySelector("section:nth-of-type(2) ul");
const anElAgenda = document.querySelector("section:nth-of-type(2) li");
const elWidthAgenda = anElAgenda.offsetWidth;

console.log(elWidthAgenda);

function nextEl() {
    theListAgenda.scrollLeft = theListAgenda.scrollLeft + elWidthAgenda;
}

function prevEl() {
    theListAgenda.scrollLeft = theListAgenda.scrollLeft - elWidthAgenda;
}

nextButtonAgenda.onclick = nextEl;
prevButtonAgenda.onclick = prevEl;

