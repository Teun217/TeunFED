// JavaScript Document
console.log("hi");

// agenda



const nextButtonAgenda = document.querySelector("section:nth-of-type(2) button:nth-of-type(2)");
const prevButtonAgenda = document.querySelector("section:nth-of-type(2) button:nth-of-type(1)");
const theListAgenda = document.querySelector("section:nth-of-type(2) ul");
const anElAgenda = document.querySelector("section:nth-of-type(2) li");
const elWidthAgenda = anElAgenda.offsetWidth;

console.log(elWidthAgenda);

function nextElAgenda() {
    theListAgenda.scrollLeft = theListAgenda.scrollLeft + elWidthAgenda;
}

function prevElAgenda() {
    theListAgenda.scrollLeft = theListAgenda.scrollLeft - elWidthAgenda;
}

nextButtonAgenda.onclick = nextElAgenda;
prevButtonAgenda.onclick = prevElAgenda;


// events

const nextButtonEvents = document.querySelector("section:nth-of-type(3) button:nth-of-type(2)");
const prevButtonEvents = document.querySelector("section:nth-of-type(3) button:nth-of-type(1)");
const theListEvents = document.querySelector("section:nth-of-type(3) ul");
const anElEvents = document.querySelector("section:nth-of-type(3) li");
const elWidthEvents = anElEvents.offsetWidth;

console.log(elWidthEvents);

function nextElEvents() {
    theListEvents.scrollLeft = theListEvents.scrollLeft + elWidthEvents;
}

function prevElEvents() {
    theListEvents.scrollLeft = theListEvents.scrollLeft - elWidthEvents;
}

nextButtonEvents.onclick = nextElEvents;
prevButtonEvents.onclick = prevElEvents;

// Strangelove

const nextButtonStrangeLove = document.querySelector("section:nth-of-type(4) button:nth-of-type(2)");
const prevButtonStrangeLove = document.querySelector("section:nth-of-type(4) button:nth-of-type(1)");
const theListStrangeLove = document.querySelector("section:nth-of-type(4) ul");
const anElStrangeLove = document.querySelector("section:nth-of-type(4) li");
const elWidthStrangeLove = anElStrangeLove.offsetWidth;

console.log(elWidthStrangeLove);

function nextElStrangeLove() {
    theListStrangeLove.scrollLeft = theListStrangeLove.scrollLeft + elWidthStrangeLove;
}

function prevElStrangeLove() {
    theListStrangeLove.scrollLeft = theListStrangeLove.scrollLeft - elWidthStrangeLove;
}

nextButtonStrangeLove.onclick = nextElStrangeLove;
prevButtonStrangeLove.onclick = prevElStrangeLove;