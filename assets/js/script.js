var question = document.getElementById("quiz-container");
var timer = document.getElementById("timer");
var timeLeft = 60
var countDown 

/// variables for DOM Maniuplation 
var startButton = document.getElementById("start");


// questions in array form to pull from later / object? 
var questionsEl = [{
    questionTitle: "Inside which HTML element do we put the JavaScript?",
    answer: "<script>",
    choices: ["<javascript>", "<scirpting>", "<js>", "<script>"]
}]


var quiz = function() {
    var questionTextEl = document.createElement("h2");
    questionTextEl.textContent = "question?";
    question.appendChild(questionTextEl);
    buildQuestions("A");
    buildQuestions("B");
    buildQuestions("C");
    buildQuestions("D");
    
    countDown = setInterval(()=>{
        timeLeft--
        timer.textContent = timeLeft
        if (timeLeft <= 0) {
            clearInterval(countDown);
        }
    }, 1000);

    // I need to be able to hide the begining of the page
    // reveal the timer near the top of the page
}

function buildQuestions(answer) {
    var choicesButton = document.createElement("button")
    choicesButton.textContent = answer
    question.appendChild(choicesButton);
    choicesButton.addEventListener("click", buttonChoices);
}

function buttonChoices(event) {
    const response = event.target.textContent;
    timeLeft -= 10;
    
    console.log(event.target.textContent);

}

function updateButtons() {
    const currentQuestion = questionsEl[0];
    console.log(currentQuestion.questionTitle);
}


// console.log(startButton);
startButton.addEventListener("click", quiz);


// Start button is clicked then begins a timer and the questions begin to be showen
// must have 3-4  questions in an array? 
// i'll need atleast 4 eventlisteners for my buttons ? 
// If the answer that was chosen is correct, show another question. 
// if the answer that was chose is wrong, decretement the timer? 
// must add onclick highlighting for correct and wrong answers
// if all questions are answered or || timer reaches 0, call for game end
// when game is over i must be able to store initials of quiz taker into localStorage

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score