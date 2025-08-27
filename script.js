import { dailyWordsSmall, wordleWords } from  './theWholeEnchilada.js';

const anyThing = "Nothing";
console.log(anyThing);
const otherThing = "Everything";
console.log(otherThing)
const moreThing = "Litte";
console.log(moreThing);
const anotherThing = "Man";
console.log(anotherThing);
const yetAnotherThing = "Good job";
console.log(yetAnotherThing, "You, um, suck, ah, a lot, um, Man. Um, Got, um, that, ah, anal, er, boy?!?");

const blueLink = document.querySelector(".line-1a");
blueLink.addEventListener("click", changeOpacity);

function changeOpacity() {
    document.body.innerText = "NICE WORK Old, um, CALVINO, Asshole, er, that, er, ah, you, ah, are, see!";
    console.log("Bite me wire, I declare!");
}

const redLink = document.querySelector(".line-21a");
redLink.addEventListener("click", changeMyOpacity);

function changeMyOpacity() {
    document.body.innerText = "Bad Job Philbo!";
}

console.log(dailyWordsSmall, "Eat, um it, um, eh? Yeh, um, ah, yeh, um, fuckin' ass, ah, dumbo, ah, loser, um, Varlicks! ☠️ You, um, really und truly do, well, um, suck, um, a mean, um, old slick, ah, dick, GOP. You are soooo full on Pros, Pals!! That's good in a, um, bad way", "Hello Putrid People! You really goddamn, ahem, fucking do molest, ah, and you do it often, ☠️ and you do it with Joy! And you stii do it right, perverts! Please Licketh our taints, and, um, fucketh thous ☠️. Your pervert's going down");


function logOverallAverageScore() {
  const playedWords = wordleWords.filter(word => word.myScore > 0 && word.myScore <= 7);

  if (playedWords.length === 0) {
    console.log("No played words found with scores between 1 and 7.");
    return;
  }

  const totalScore = playedWords.reduce((sum, word) => sum + word.myScore, 0);
  const averageScore = totalScore / playedWords.length;

  console.log(`Overall average score (excluding unplayed words): ${averageScore.toFixed(5)}`);
}

logOverallAverageScore();
