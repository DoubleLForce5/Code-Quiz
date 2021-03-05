// variables 
var cardElement = document.querySelector(".card-body");
var questionsElement = document.querySelector(".quiz-questions");
var choicesElement = document.querySelector(".quiz-choices");
var inputElement = document.querySelector(".score-input");
var scoreContainerElement = document.querySelector(".score-input-container");
var scoreInput = document.querySelector(".score-input");
var questionCounter = 0;
var currentQuestion = -1; 
var questionChoices = document.body.children[0].children[3].children[1];

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

console.log(questions);

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

function renderQuiz() {
  nextQuestion ();
  // if there are questions unanswered and/or the timer is not at zero
  if (questions.length > 4 || timer > 0){
    console.log(questions.length); 
    // loop through array of questions/choices 
  // } for (i = 0; i < questions.length; i++) {
  //     // document.getElementById("questions-div").innerHTML += questionsElement.value
  //     // console.log();
  //     // document.getElementById("questions-div").innerHTML = "test"
  //     document.getElementById("questions-div").innerHTML += questions[i].title
  //     // console.log("questions[i].title: ", questions[0].title);
  //     console.log("questions[i].title: ", questions[i].title);
  // } for ( j = 0; j < questions.length; j++) {
  //     document.getElementById("choices-div").innerHTML += questions[j].choices
  //     console.log("choices[j].choices: ", questions[j].choices);
  } 

};
// var options = question.choices.split(" ");
function nextQuestion() { 
  //increases currentQuestion by one.
  currentQuestion ++;
  //sets the document.getElementById("questions-div").innerHTML using questions[currentQuestion]
  document.getElementById("questions-div").innerHTML = questions[currentQuestion].title
  console.log(questions[currentQuestion].title);
  //adds / sets the buttons and choices using questions[currentQuestion]
  // create button

  var quizChoices = questions[currentQuestion].choices
  quizChoices.forEach( function (newItem) {
  var choicesBtn = document.createElement("button");
   // set text on button 
  choicesBtn.innerText = newItem;
  // append to page 
  questionChoices.appendChild(choicesBtn);
})
}

  // for each question make some HTML 
  // button input 
  // if quiz is not complete or if time has not run out serve up another question until there are no more 



  




// WHEN I answer a question incorrectly
// time is subtracted from the clock


// WHEN all questions are answered or the timer reaches 0
// the game is over

// WHEN the game is over
// I can save my initials and my score 