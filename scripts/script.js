console.log("script.js is geladen");

var openButton = document.querySelector("header>button");
var closeButton = document.querySelector("nav>button");

function open() {
    var Nav = document.querySelector("nav");
    Nav.classList.add("open");
}

function close() {
    var Nav = document.querySelector("nav");
    Nav.classList.remove("open");
}

openButton.onclick = open;

closeButton.onclick = close;