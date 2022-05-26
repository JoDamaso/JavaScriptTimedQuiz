var questionTitle = document.getElementById("quiz-container");
var timer = document.getElementById("timer");
var timeLeft = 60;
var countDown


/// variables for DOM Maniuplation 
var startButton = document.getElementById("start");
var choicesBtn = document.createElement("button");
var questionTextEl = document.createElement("h2");
var endGame = document.getElementById('endGame');
var quizBox = document.getElementById('quizStart');

// questions in array form to pull from later / object? 
var questions = [
    {
        questionTitle: "Inside which HTML element do we put the JavaScript? A.) <javascript> B.) <scripting> C.) <js> D.) <script>",
        answer: "D",
        choices: ["<javascript>", "<scirpting>", "<js>", "<script>"]
    },
    {
        questionTitle: "How do you write 'Hello World' in an alert box? A.) msg('Hello World'); B.) alert('Hello World'); C.) msgBox('Hello World'); D.) alertBox('Hello World');",
        answer: "B",
        choices: ["msg('Hello World');", "alert('Hello World');", "msgBox('Hello World');", "alertBox('Hello World');"]
    },
    {
        questionTitle: "How can you add a comment in JavaScipt? A.) 'This is a comment B.) <!--This is a comment--> C.) //This is a comment D.) \\This is a comment",
        answer: "C",
        choices: ["'This is a comment", "<!--This is a comment-->", "//This is a comment", "\\This is a comment"],
    }];

//once start has been clicked, creates and element h2 for our question, trying to make it our question title
var quiz = function () {
    questionTextEl = document.createElement("h2");
    questionTextEl.textContent = questions[0].questionTitle;
    questionTitle.appendChild(questionTextEl);

    // I need to be able to hide the begining of the page
    quizBox.classList.add("hide");


    //calling the function 4 times to populate 4 buttons
    quizButton("A");
    quizButton("B");
    quizButton("C");
    quizButton("D");

    // timer start 
    countDown = setInterval(() => {
        timeLeft--
        timer.textContent = timeLeft
        if (timeLeft <= 0) {
            clearInterval(countDown);
            // need an end game function?
        }
    }, 1000);
};


// button should have answer/choices or state the user to choose ABCD in the question. 
function quizButton(answer) {
    // creating a button element
    var choicesBtn = document.createElement("button")
    choicesBtn.setAttribute("id", answer);
    choicesBtn.textContent = answer
    questionTitle.appendChild(choicesBtn);
    choicesBtn.addEventListener("click", buttonChoices);
};


// 
function buttonChoices(event) {
    const response = event.target.textContent;

    // only targetting any response, needs to be wrong response for decrement 
    timeLeft -= 10;

    console.log(response);

    // question 1
    if (questions[0].answer === response) {
        console.log(questions[0].answer + " is correct");
        questionTextEl.setAttribute("id", "hide");
        questionTextEl = document.querySelector("h2");
        questionTextEl.textContent = questions[1].questionTitle;
        questionTextEl.removeAttribute("id");
        return;
    }
    else {
        // do something when question is wrong 
    }
    // question 2 
    if (questions[1].answer === response) {
        console.log(questions[1].answer + " is correct");
        questionTextEl.setAttribute("id", "hide");
        questionTextEl = document.querySelector("h2");
        questionTextEl.textContent = questions[2].questionTitle;
        questionTextEl.removeAttribute("id");
        return;
    }
    else {
        //do something when question is wrong
    }
    // question 3
    if (questions[2].answer === response) {
        console.log(questions[2].answer + " is correct");
        questionTextEl.setAttribute("id", "hide");
        // questionTextEl = document.querySelector("h2");
        // questionTextEl.textContent = questions[3].questionTitle;
        // questionTextEl.removeAttribute("id");
        return;
    }
    else {
        //do something when question is wrong
    }
    // document.location(highscore.html);
};


function end () {
    console.log(questionTitle);
    questionTitle.classList.add("hide");
}

//listens for click on home page then sends it to quiz function
startButton.addEventListener("click", quiz);
choicesBtn.addEventListener("click", quiz);
endGame.addEventListener("click", end);



// function updateButtons() {
//     const currentQuestion = questions[0];
//     console.log(currentQuestion.questionTitle);
// };

// Start button is clicked then begins a timer and the questions begin to be shown
// I need to hide the start page and then reveal questions along with the choices via DOM/CSS
// must have 3-4  questions in an array?
// i'll need atleast 4 eventlisteners for my buttons ?
// If the answer that was chosen is correct, show another question.
// if the answer that was chose is wrong, decretement the timer?
// must add onclick highlighting for correct and wrong answers
// if all questions are answered or || timer reaches 0, call for game end
// when game is over i must be able to store initials of quiz taker into localStorage

