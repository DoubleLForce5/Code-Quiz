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
var currentChoice = -1;
var score = 0; 

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

document.getElementById("start-btn").onclick = function () {
  document.getElementById("start-btn").style.display = "none";
}

function timer() {
  if (!timerInterval){
    timerInterval = setInterval(function() {
      timeLeft--;
      timeEl.textContent = "Time: " + timeLeft;
      console.log(timer);
      // stop timer 
      if(timeLeft <= 0) {
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
  } 
};

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
  choicesBtn.setAttribute("id", "choicesBtn");
  choicesBtn.setAttribute("data", newItem);
  console.log(choicesBtn);
   // set text on button 
  choicesBtn.innerText = newItem;
  // one at a time
  currentChoice ++;
  // append to page 
  questionChoices.appendChild(choicesBtn);
  // event listener for checkAnswer function
  choicesBtn.addEventListener("click", checkAnswer)
}); 
}

function checkAnswer(event) {

  console.log(this.getAttribute('data'));

  console.log("checkAnswer");
  console.log(questions[currentQuestion].answer)

  if (this.getAttribute("data") == questions[currentQuestion].answer) {
    score += 5;
    console.log ("Right");
  } else {
    timeLeft -= 5;
    console.log("Wrong");
  } 
      document.getElementById("choices-div").innerHTML = '';
      nextQuestion ();
}

// if no more questions or timer <= 0 end the quiz
function endQuiz () {
  if (timer < 0) {
    console.log("End")
  } if (nextQuestion > 4) {
    console.log("End game now")
  }
};





// WHEN the game is over i see my score an am presented with an input to place my name 
document.getElementById("score-input-container").textContent = score; 



// I can save my initials and my score 