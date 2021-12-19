//  user presses start button and question is presented
var startQuizBtn = document.getElementById("start-btn");
var questionOne = document.getElementById("question-1");
var questionTwo = document.getElementById("question-2");
var questionThree = document.getElementById("question-3");
var answer = document.getElementById("btn");

startQuizBtn.onclick = function (){
    document.getElementById("quiz-intro").style.display = "none";
    questionOne.style.display = "block";
};
//  Question 1 is displayed and user selects an option
    answer.onclick = function (){
        questionOne.style.display = "none";
        questionTwo.style.display = "block";
    };

// Question 2 is displayed and user selects an option
    answer.onclick = function (){
        questionTwo.style.display = "none";
        questionThree.style.display = "block";
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




// startQuizBtn.addEventListener('click', function(startquiz));

// startQuizBtn.addEventListener("click", () =>{
//     if(questionOne.style.display === 'none'){
//         questionOne.style.display = 'show';
//     } else {
//         questionOne.style.display = 'hide';
//     }
// })

// window.getComputedStyle(questionOne)