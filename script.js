import { dailyWordsSmall } from  './theWholeEnchilada.js';

const anyThing = "Nothing";
console.log(anyThing);
const otherThing = "Everything";
console.log(otherThing)
const moreThing = "Litte";
console.log(moreThing);
const anotherThing = "Man";
console.log(anotherThing);
const yetAnotherThing = "Good job";
console.log(yetAnotherThing);

const blueLink = document.querySelector(".line-1a");
blueLink.addEventListener("click", changeOpacity);

function changeOpacity() {
    document.body.innerText = "NICE WORK CALVINO";
}

const redLink = document.querySelector(".line-21a");
redLink.addEventListener("click", changeMyOpacity);

function changeMyOpacity() {
    document.body.innerText = "Bad Job Philbo!";
}

console.log(dailyWordsSmall);