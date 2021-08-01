// Select Elements
let countSpan = document.querySelector(".count span");
let bullets = document.querySelector(".bullets");
let bulletsSpanContainer = document.querySelector(".bullets .spans");
let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area");
let submitButton = document.querySelector(".submit-button");
let resultsContainer = document.querySelector(".results");
let countdownElement = document.querySelector(".countdown");

// Set Options
let currentIndex = 0;
let rightAnswers = 0;
let countdownInterval;

(function getQuestions() {
    let myRequest = new XMLHttpRequest();

    myRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let questionsObject = JSON.parse(this.responseText);
            let qCount = questionsObject.length;

            // Create Bullets + Set Questions Count
            createBullets(qCount);

            // Add Question Data
            addQuestionData(questionsObject[currentIndex], qCount);

            //  count down interval
            countDown(70, qCount);

            //  Click on submit
            submitButton.onclick = (_) => {
                //  Get The Right Answer
                let theRightAnswer = questionsObject[currentIndex].right_answer;

                //  Increase Index
                currentIndex++;

                //  Check The Answer
                checkAnswer(theRightAnswer, qCount);

                quizArea.innerHTML = "";
                answersArea.innerHTML = "";
                // Add Question Data
                addQuestionData(questionsObject[currentIndex], qCount);

                clearInterval(countDownInterval);
                //  Handle Bullets Class
                handleBullets();

                //  count down interval
                countDown(70, qCount);

                //  Show Results
                showResults(qCount);
            };
        }
    };

    myRequest.open("GET", "html.json", true);
    myRequest.send();
})();

function createBullets(num) {
    countSpan.innerHTML = num;

    for (let i = 0; i < num; i++) {
        //  create spans
        let span = document.createElement("span");
        if (i == 0) {
            span.className = "on";
        }
        bulletsSpanContainer.appendChild(span);
    }
}

function addQuestionData(obj, count) {
    if (currentIndex < count) {
        // Create H2 Question Title
        let questionTitle = document.createElement("h2");
        let questionText = document.createTextNode(obj.title);
        questionTitle.appendChild(questionText);
        quizArea.appendChild(questionTitle);

        // Create The Answers
        let allKeys = Object.keys(obj),
            lenOfAnswer = allKeys.length - 2;
        for (let i = 1; i <= lenOfAnswer; i++) {
            // Create Main Answer Div
            let mainDiv = document.createElement("div");
            mainDiv.className = "answer";

            // Create Radio Input
            let radioInput = document.createElement("input");
            radioInput.name = "question";
            radioInput.type = "radio";
            radioInput.id = `answer_${i}`;
            radioInput.dataset.answer = obj[`answer_${i}`]; //  the first answer to the last answer

            // Make First Option Selected
            if (i === 1) {
                radioInput.checked = true;
            }

            // Create Label
            let theLabel = document.createElement("label");
            theLabel.htmlFor = `answer_${i}`; // Add For Attribute

            let theLabelText = document.createTextNode(obj[`answer_${i}`]);
            theLabel.appendChild(theLabelText);

            // Add Input + Label To Main Div
            mainDiv.appendChild(radioInput);
            mainDiv.appendChild(theLabel);

            // Append All Divs To Answers Area
            answersArea.appendChild(mainDiv);
        }
    }
}

//  Check the Right Answer
function checkAnswer(rAnswer, Count) {
    let answers = document.getElementsByName("question");
    let theChoosenAnswer;

    for (let i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            theChoosenAnswer = answers[i].dataset.answer;
        }
    }

    if (rAnswer === theChoosenAnswer) {
        rightAnswers++;
    }
}

function handleBullets() {
    let bulletsSpans = document.querySelectorAll(".bullets .spans span");
    let arrayOfSpans = Array.from(bulletsSpans);
    arrayOfSpans.forEach((span, index) => {
        if (currentIndex === index) {
            span.className = "on";
        }
    });
}

function showResults(count) {
    let theResults;
    if (count === currentIndex) {
        quizArea.remove();
        answersArea.remove();
        submitButton.remove();
        bullets.remove();
        let emo = "&#128151";

        if (rightAnswers > count / 2 && rightAnswers < count) {
            theResults = `<span class='good'>Good</span>, ${rightAnswers} From ${count}`;
        } else if (rightAnswers === count) {
            theResults = `<span class='perfect'>Perfect</span>, All Answers Is Good ${emo}`;
        } else {
            theResults = `<span class='bad'>Bad</span>, ${rightAnswers} From ${count}`;
        }

        resultsContainer.innerHTML = theResults;
        resultsContainer.style.backgroundColor = "white";
        resultsContainer.style.marginTop = "10px";
        resultsContainer.style.padding = "10px 20px";
    }
}

function countDown(duration, count) {
    if (currentIndex < count) {
        let minutes, seconds;
        countDownInterval = setInterval((_) => {
            minutes = parseInt(duration / 60);
            seconds = parseInt(duration % 60);

            minutes = minutes < 10 ? `0${minutes}` : minutes;
            seconds = seconds < 10 ? `0${seconds}` : seconds;

            countdownElement.innerHTML = `${minutes}:${seconds}`;

            if (minutes === "00" && seconds < 10) {
                countdownElement.style.color = "red";
            } else {
                countdownElement.style.color = "black";
            }

            if (--duration < 0) {
                clearInterval(countDownInterval);
                submitButton.click();
            }
        }, 800);
    }
}
