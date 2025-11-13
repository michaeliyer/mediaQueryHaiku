import { dailyWordsSmall, wordleWords } from "./theWholeEnchilada.js";

const anyThing = "Nothing";
console.log(anyThing);
const otherThing = "Everything";
console.log(otherThing);
const moreThing = "Litte";
console.log(moreThing);
const anotherThing = "Man";
console.log(anotherThing);
const yetAnotherThing = "Good job";
console.log(
  yetAnotherThing,
  "You, well, um, ahem, ah, er, ah, err, laah, errr, umm, ehhh, ahh, duhh, errr, duhh, agg, err, suck, gaa, grr, ah, errr, mmm, ahhh, grrr, errr, uhhhh, er, ahhh, ahhhh, hmm, er, errr,  grrr, ahhh, gerrr, kkkk, jaaa, grrrr, errr, ahh, well, lot, um, Man. Um, er, got, er, of penis, grrr, and er, ah, ah, um, that, errr, ah, anal, er, boy?!?"
);

const blueLink = document.querySelector(".line-1a");
blueLink.addEventListener("click", changeOpacity);

function changeOpacity() {
  document.body.innerText =
    "NICE WORK, um, Old, um, CALVINO, er, ahhh, Asshole, err, arr, well, ahh, grrrr, ahhh, errrrr, um..., ahem, jahhh, errr, well, uhhhh, kkvvsdkkkiiihh, gaaaq, um, er, ah, er, that, er, gaa, ah, you, ah, are, well...see!";
  console.log("Bite me wire, I declare!");
}

const redLink = document.querySelector(".line-21a");
redLink.addEventListener("click", changeMyOpacity);

function changeMyOpacity() {
  document.body.innerText = "Bad Job Philbo!";
}

console.log(dailyWordsSmall);

function logOverallAverageScore() {
  const playedWords = wordleWords.filter(
    (word) => word.myScore > 0 && word.myScore <= 7
  );

  if (playedWords.length === 0) {
    console.log("No played words found with scores between 1 and 7.");
    return;
  }

  const totalScore = playedWords.reduce((sum, word) => sum + word.myScore, 0);
  const averageScore = totalScore / playedWords.length;

  console.log(
    `Overall average score (excluding unplayed words): ${averageScore.toFixed(
      5
    )}`
  );
}

logOverallAverageScore();

// Black and White Toggle Functionality
const bwToggle = document.getElementById("bwToggle");
let isGrayscale = false;

bwToggle.addEventListener("click", function () {
  isGrayscale = !isGrayscale;

  if (isGrayscale) {
    document.body.classList.add("grayscale-mode");
    bwToggle.textContent = "🎨 Back to Color";
  } else {
    document.body.classList.remove("grayscale-mode");
    bwToggle.textContent = "🎨 Color / B&W";
  }

  console.log("Grayscale mode:", isGrayscale ? "ON" : "OFF");
});



document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-style");
  const styleLink = document.getElementById("themeStylesheet");

  if (!toggleBtn || !styleLink) {
    console.warn(
      "Style toggle not initialized: missing button or stylesheet link."
    );
    return;
  }

  const DEFAULT_STYLESHEET = "style.css";
  const VARIATION_STYLESHEET = "haikuVariation.css";

  const updateToggleLabel = (isDefaultActive) => {
    toggleBtn.textContent = isDefaultActive
      ? "Switch to Alternate Style"
      : "Switch to Default Style";
  };

  updateToggleLabel(styleLink.getAttribute("href") === DEFAULT_STYLESHEET);

  toggleBtn.addEventListener("click", () => {
    const isCurrentlyDefault =
      styleLink.getAttribute("href") === DEFAULT_STYLESHEET;

    styleLink.setAttribute(
      "href",
      isCurrentlyDefault ? VARIATION_STYLESHEET : DEFAULT_STYLESHEET
    );

    updateToggleLabel(!isCurrentlyDefault);
  });
});



  const censorshipMap = {
    "cleaner": "Sterilizer",
    "people": "aliens",
    "cum": "Rum",
    "shit": "crud!",
    "repu": "Nazi",
    "fuck": "drill",
    "ass": "back-side"
  };

  function cleanText(text) {
    let cleaned = text;
    for (const [badWord, replacement] of Object.entries(censorshipMap)) {
      const regex = new RegExp(`${badWord}`, 'gi');
      cleaned = cleaned.replace(regex, (match) => {
        return match[0] === match[0].toUpperCase()
          ? replacement[0].toUpperCase() + replacement.slice(1)
          : replacement;
      });
    }
    return cleaned;
  }

  function cleanNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent = cleanText(node.textContent);
    } else {
      node.childNodes.forEach(child => cleanNode(child));
    }
  }

  let cleanerEnabled = false;

  document.getElementById("toggleCleanerBtn").addEventListener("click", () => {
    cleanerEnabled = !cleanerEnabled;
    document.getElementById("toggleCleanerBtn").textContent = `Text Cleaner: ${cleanerEnabled ? "ON" : "OFF"}`;

    if (cleanerEnabled) {
      cleanNode(document.body);
    } else {
      location.reload(); // reload original content if turned off
    }
  });