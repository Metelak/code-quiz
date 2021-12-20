//  user presses start button and question is presented
var startQuizBtn = document.getElementById("start-btn");
var questionOne = document.getElementById("question-1");
var questionTwo = document.getElementById("question-2");
var questionThree = document.getElementById("question-3");
var questionFour = document.getElementById("question-4");
var questionFive = document.getElementById("question-5");
var answerOne = document.getElementById("btn-group-1");
var answerTwo = document.getElementById("btn-group-2");
var answerThree = document.getElementById("btn-group-3");
var answerFour = document.getElementById("btn-group-4");
var answerFive = document.getElementById("btn-group-5");
var correctAnswer = document.querySelector(".correct");
var wrongAnswer = document.querySelector(".wrong");

startQuizBtn.onclick = function (){
    document.getElementById("quiz-intro").style.display = "none";
    questionOne.style.display = "block";
};
//  Question 1 is displayed and user selects an option
    answerOne.onclick = function (){
        if (correctAnswer){
            alert("Correct!");
        } else if (wrongAnswer) {
            alert("Wrong!");
        };
        questionOne.style.display = "none";
        // Question 2 appears
        questionTwo.style.display = "block";
    };
// Question 2 is displayed and user selects an option
    answerTwo.onclick = function (){
        questionTwo.style.display = "none";
        // Question 3 appears
        questionThree.style.display = "block";
    };
// Question 3 is displayed and user selects an option
    answerThree.onclick = function (){
        questionThree.style.display = "none";
        // Question 4 appears
        questionFour.style.display = "block";
    };
// Question 4 is displayed and user selects an option
    answerFour.onclick = function (){
        questionFour.style.display = "none";
        // Question 5 appears
        questionFive.style.display = "block";
    };

    //  timer begins to tick down (time interval) 
    var timeRemaining = 75;
    var timerEl = document.getElementById("timer");    
    var timerId = setInterval(countdown, 1000);
 
    function countdown() {
        if (timeRemaining == -1) {
            clearTimeout(timerId);
            alert('Game Over!');
          } else {
            timerEl.innerHTML = timeRemaining;
            timeRemaining--;
          }
        }



//  if correct
    //  congratulate and move on to next question
//  if incorrect, inform incorrect, 
    //  subtract time from timer as pentalty and then move on to next question
// process repeats*)
//  after all questions are answered OR timer runs out
    // "Game over!"" message displays
    // when (questionsAnswered == 
// user enters initials
    // score is saved
    // all scores are returned and displayed