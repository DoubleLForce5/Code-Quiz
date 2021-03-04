// variables 
var cardElement = document.querySelector(".card-body");
var questionsElement = document.querySelector(".quiz-questions");
var choicesElement = document.querySelector(".quiz-choices");
var inputElement = document.querySelector(".score-input");
var scoreContainerElement = document.querySelector(".score-input-container");
var scoreInput = document.querySelector(".score-input");

// quiz questions array 
var questions = [
  {
    title: "What does HTML stand for?",
    choices: ["Hyper Text Markup Language","Home Tool Makeup Language","Hyperlinks and Text Markup Language","Home Tacos Mayo Lasagna"],
    answer: "Hyper Text Markup Language"
  },
  {
    title: "Which is the correct HTML tag for the largest heading?",
    choices: ["Head","h1","h6", "Pants"],
    answer: "h1"
  },
  {
    title: "Which HTML tag allows you to make a bulleted list?",
    choices: ["ol","d1","ul","bulleted list"],
    answer: "ul"
  },
  {
    title: "What does CSS stand for?",
    choices: ["Computer Style Sheets","Creative Style Sheets", "Cascading Style Sheets", "Crayon Simple sheets"],
    answer: "cascading Style Sheets"
  },
  // questions.choices[2] How to write answer 
  {
    title: "Where in an HTML document is the correct place to refer to an external style sheet?",
    choices: ["At the top of the bowl","In the head","In the body","At the bottom of the document"],
    answer: "In the head"
  },
];


// WHEN I click the start button a timer starts 
var startBtnEl = document.getElementById("start-btn");
var timeEl = document.getElementById("time-left");

var timeLeft = 31;
var timerInterval;

function timer() {
  if (!timerInterval){
    timerInterval = setInterval(function() {
      timeLeft--;
      timeEl.textContent = "Time: " + timeLeft;
      console.log(timer);
      // stop timer 
      if(timeLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
 }
};
// ---- EVENT LISTENER
startBtnEl.addEventListener("click", timer);
startBtnEl.addEventListener("click", renderQuiz);

// THEN I am presented with a question
// AND 4 possible answers to that question
var quizQuestion = quizQuestion.concat(questions.title);  
console.log(quizQuestion)
var quizChoices;




function renderQuiz() {
  if (!quizQuestion && !quizChoices){
    }

};






// WHEN I answer a question incorrectly
// time is subtracted from the clock


// WHEN all questions are answered or the timer reaches 0
// the game is over

// WHEN the game is over
// I can save my initials and my score

