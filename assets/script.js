//  user presses start button and question is presented
var startQuizBtn = document.getElementById("start-btn");
var questionOne = document.getElementById("question-1");

    startQuizBtn.onclick = function (){
        if (questionOne.style.visibility === "hidden"){
            questionOne.style.visibilty = "visible";
        }
    }
    
    //  timer begins to tick down (time interval) 
    var timeRemaining = 75;
    var timerEl = document.getElementById('#timer');    
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

//  (*options are displayed for user to choose from
//  user selects an option
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