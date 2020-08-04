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

const feathered = document.querySelector('#feathers');

const togSwitch = document.querySelector('#toggle');

const dinoRow = document.querySelector('#row');

const bigDino = document.querySelector('#biggify');


//EVENT LISTENERS/////////////////////////////////////////////////////////////
// const makeOrange = function() {
//     em3.style.color = 'orange';
// }
// em3.addEventListener('click', makeOrange);
em3.addEventListener('click', () => em3.style.color = 'orange');

tricera.addEventListener('click', () => tricera.style.border = 'thick solid red');

feathered.addEventListener('click', () => feathered.style.opacity = '50%');

togSwitch.addEventListener('click', () => dinoRow.style.backgroundColor = 'purple');

bigDino.addEventListener('mouseover', () => bigDino.style.width = '200px');







