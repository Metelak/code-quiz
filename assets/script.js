var questionIndex = 0;
var time = questions.length * 15;
var timeEl = document.getElementById("time");
var timerId;
// global variables for the DOM elements
var startQuizBtn = document.getElementById("start-btn");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var initialsEL = document.getElementById("initials");
var submitBtn = document.getElementById("submit");

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with ______.",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "curly brackets"
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console log"],
        answer: "console log"
    }
];
//  user presses start button and question is presented 
function startQuiz() {
    document.getElementById("quiz-intro").style.display = "none";
    questionsEl.removeAttribute("class");

    timerId = setInterval(countdown, 1000);
    timerEl.textContent = time;

    getQuestion();
};

function getQuestion() {
    // new object for questions array
    var currentQuestion = questions[questionIndex];
    var titleH2 = document.getElementById("question");
    titleH2.textContent = currentQuestion.question;
    // clearing out old choices
    choicesEl.innerHTML = "";
    // loop through array
    currentQuestion.choices.forEach(function (choice, i) {
        // create a button
        var btnChoice = document.createElement("button");
        btnChoice.setAttribute("class", "choice");
        btnChoice.setAttribute("value", choice);
        btnChoice.textContent = i + 1 + ". " + choice;
        // attach click event to each choice
        btnChoice.onclick = answerQuestion;
        choicesEl.appendChild(btnChoice);
    });
}

//  Question right or wrong
function answerQuestion() {
    // calling out line 60 "value"
    if (this.value !== questions[questionIndex].answer) {
        time -= 10;
        if (time < 0) {
            // avoid negative time/score    
            time = 0;
        }
        timerEl.textContent = time;
        // move to the next question 
        questionIndex++;
        // if out of question in array end the game, else show another question
        // utilize value of questionIndex which is 0
        if (questionIndex === questions.length) {
            gameEnd();
        } else {
            getQuestion();
        }
    }
}

function gameEnd() {
    // stop timer
    clearInterval(timerId);
    var finalEl = document.getElementById("final");
    finalEl.removeAttribute("class");
    var finalScore = document.getElementById("final-score");
    finalScore.textContent = time;
    // hiding div line 29 html
    questionsEl.setAttribute("class", "hide");
}

function countdown() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        gameEnd();
    }
}

function submitScore() {
    var initials = initialsEl.value.trim();
    if (initials !== "") {
        var highScores = JSON.parse(window.localStorage.getItem("high-scores")) || [];
        // taking in input/span (line 36, 37 html) value
        var newScore = {
            score: time,
            intials: initials
        };
        // save to local storage
        highScores.push(newScore);
        window.localStorage.setItem("high-scores", JSON.stringify(highScores));
        // pull scores into highscore html
        window.location.href = "highscores.html";
    }
}

function inputEntry(event) {
    // using enter key vs clicking submit button
    if (event.key === "Enter") {
        submitScore();
    }
}
// user enters initials and hits enter key
initialsEl.onkeyup = inputEntry;
// user enters initials and clicks submit button
submitBtn.onclick = submitScore;
startQuizBtn.onclick = startQuiz;