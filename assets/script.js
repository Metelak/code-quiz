//  user presses start button and question is presented
var startQuizBtn = document.getElementById("start-btn");
var questionOne = document.getElementById("question-1");
var questionTwo = document.getElementById("question-2");
var questionThree = document.getElementById("question-3");
var questionFour = document.getElementById("question-4");
var questionFive = document.getElementById("question-5");
var answer = document.querySelector(".btn");

startQuizBtn.onclick = function (){
    document.getElementById("quiz-intro").style.display = "none";
    questionOne.style.display = "block";
};
//  Question 1 is displayed and user selects an option
    answer.onclick = function (){
        questionOne.style.display = "none";
        // Question 2 appears
        questionTwo.style.display = "block";
    };
// Question 2 is displayed and user selects an option
    answer.onclick = function (){
        questionTwo.style.display = "none";
        // Question 3 appears
        questionThree.style.display = "block";
    };
// Question 3 is displayed and user selects an option
    answer.onclick = function (){
        questionThree.style.display = "none";
        // Question 4 appears
        questionFour.style.display = "block";
    };
// Question 4 is displayed and user selects an option
    answer.onclick = function (){
        questionFour.style.display = "none";
        // Question 5 appears
        questionFive.style.display = "block";
    };

    //  timer begins to tick down (time interval) 
    // var timeRemaining = 75;
    // var timerEl = document.getElementById("timer");    
    // var timerId = setInterval(countdown, 1000);
 
    // function countdown() {
    //     if (timeRemaining == -1) {
    //         clearTimeout(timerId);
    //         alert('Game Over!');
    //       } else {
    //         timerEl.innerHTML = timeRemaining;
    //         timeRemaining--;
    //       }
    //     }



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