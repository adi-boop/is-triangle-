const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#qoutput");

const correctAnswers = ["90°", "right angled", "three right angles", "12, 16, 20", "240cm", "7.5cm", "1760cm"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    outputEl.innerText = "Your score is " + score;
}

submitAnswerBtn.addEventListener("click", calculateScore);