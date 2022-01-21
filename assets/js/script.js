var questionTitle = document.getElementById("quiz-container");
var timer = document.getElementById("timer");
var timeLeft = 60
var countDown 

/// variables for DOM Maniuplation 
var startButton = document.getElementById("start");


// questions in array form to pull from later / object? 
var questionsEl = [
    {
    questionTitle: "Inside which HTML element do we put the JavaScript?",
    answer: "<script>",
    choices: ["<javascript>", "<scirpting>", "<js>", "<script>"]
    },
    {
    questionTitle: "How do you write 'Hello World' in an alert box?",
    answer: "alert('Hello World');",
    choices: ["msg('Hello World');", "alertBox('Hello World');", "msgBox('Hello World');", "alert('Hello World');"]
    },
    {
    questionTitle: "How can you add a comment in JavaScipt?",
    answer: "//This is a comment",
    choices: ["'This is a comment", "<!--This is a comment-->", "//This is a comment", "\\This is a comment"],
    }];

//once start has been clicked, creates and element h2 for our question, trying to make it our question title
var quiz = function() {
    var questionTextEl = document.createElement("h2");
    questionTextEl.textContent = questionsEl; // returns as just objects 
    questionTitle.appendChild(questionTextEl);


    quizButton("A");
    quizButton("B");
    quizButton("C");
    quizButton("D");

    // timer start 
    countDown = setInterval(()=>{
        timeLeft--
        timer.textContent = timeLeft
        if (timeLeft <= 0) {
            clearInterval(countDown);
        }
    }, 1000);

    // I need to be able to hide the begining of the page
};

// creating a button element
// button should have answer/choices or state the user to choose ABCD in the question. 
function quizButton(answer) {
    var choicesButton = document.createElement("button")
    choicesButton.textContent = answer
    questionTitle.appendChild(choicesButton);
    choicesButton.addEventListener("click", buttonChoices);
};

function buttonChoices(event) {
    const response = event.target.textContent;
    // only targetting any response, needs to be wrong response for decrement 
    timeLeft -= 10;


    console.log(response);

};

function updateButtons() {
    const currentQuestion = questionsEl[0];
    console.log(currentQuestion.questionTitle);
};


//listens for click on home page then sends it to quiz function
startButton.addEventListener("click", quiz);


// Start button is clicked then begins a timer and the questions begin to be shown
// I need to hide the start page and then reveal questions along with the choices via DOM/CSS
// must have 3-4  questions in an array? 
// i'll need atleast 4 eventlisteners for my buttons ? 
// If the answer that was chosen is correct, show another question. 
// if the answer that was chose is wrong, decretement the timer? 
// must add onclick highlighting for correct and wrong answers
// if all questions are answered or || timer reaches 0, call for game end
// when game is over i must be able to store initials of quiz taker into localStorage

