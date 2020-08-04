//All of my work will go here
const heading = document.querySelector('h1');
const makeBold = function() {
    heading.fontWeight = 600;
}
heading.addEventListener('click', makeBold);

const em3 = document.querySelector('span.mess-with-me');
em3.style.fontSize = '3em';

const bckGndClrGreen = document.querySelector("p.mess-with-me");
bckGndClrGreen.style.backgroundColor = "green";

const hiddenDino = document.querySelector('#hide-me');
hiddenDino.parentNode.removeChild(hiddenDino);

const tricera = document.querySelector('#triceratops');
tricera.style.width = '324px';

const makeBold = function() {
    heading.fontWeight = 600;
}

