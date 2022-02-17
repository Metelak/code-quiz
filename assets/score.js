function getScores() {
    // either get scores from localstorage or set to empty array
    var highscores = JSON.parse(window.localStorage.getItem("high-scores")) || [];

    // sorting highscores
    highscores.sort(function (a, b) {
        return b.score - a.score;
    });
    //loop passing through score
    highscores.forEach(function (score) {
        // create li for each high score
        var liEl = document.createElement("li");
        liEl.textContent = score.initials + " - " + score.score;
        console.log(score.initials + score.score);
        // input scores onto the page
        var olEl = document.getElementById("highscores");
        olEl.appendChild(liEl);
    });
}

function clearScores() {
    window.localStorage.removeItem("high-scores");
    window.location.reload();
}

document.getElementById("clear").onclick = clearScores;

// run this when the page loads
getScores();