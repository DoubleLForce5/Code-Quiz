var questions = [
  {
    title: "What does HTML stand for?",
    choices: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Home Tacos Mayo Lasagna"],
    answer: "Hyper Text Markup Language"
  },
  {
    title: "Which is the correct HTML tag for the largest heading?",
    choices: ["Head", "h1", "h6", "Pants"],
    answer: "H1"
  },
  {
    title: "Which HTML tag allows you to make a bulleted list?",
    choices: ["ol", "d1", "ul", "bulleted list"],
    answer: "ul"
  },
  {
    title: "What does CSS stand for?",
    choices: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Crayon Simple sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    title: "Where in an HTML document is the correct place to refer to an external style sheet?",
    choices: ["At the top of the bowl", "In the head", "In the body", "At the bottom of the document"],
    answer: "In the head"
  },
];

// WHEN I click the start button a timer starts 
var startBtnEl = document.getElementById("start-btn");
var timeEl = document.getElementById("time-left");

var timeLeft = 30;

function timer() {
  var timerInterval = setInterval(function() {
    timeEl.textContent = "Time: " + timeLeft;
    timeLeft--;
    console.log(timer);
    // stop timer 
    if(timeLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
};
// ---- EVENT LISTENER
startBtnEl.addEventListener("click", timer);

// THEN I am presented with a question
// AND 4 possible answers to that question







// WHEN I answer a question incorrectly
// time is subtracted from the clock


// WHEN all questions are answered or the timer reaches 0
// the game is over

// WHEN the game is over
// I can save my initials and my score

