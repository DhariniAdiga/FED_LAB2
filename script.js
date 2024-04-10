const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Saturn", "Mars", "Earth"],
        answer: "Jupiter"
    },
    {
        question: "Which is the capital of India?",
        options: ["Delhi", "Punjab", "Raipur", "Bangalore"],
        answer: "Delhi"
    },{
        question: "Which is the smallest UT of India?",
        options: ["Pondicherry", "Delhi", "Lakshadweep", "Ladakh"],
        answer: "Lakshadweep"
    },
];

const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
let currentQuestionIndex = 0;
let score = 0;

function displayQuestion(index) {
    const question = questions[index];
    let questionHTML = `
        <div class="question">
            <h3>${index + 1}. ${question.question}</h3>
            <div class="options">
    `;
    question.options.forEach(option => {
        questionHTML += `
            <label>
                <input type="radio" name="question${index}" value="${option}">
                ${option}
            </label>
        `;
    });
    questionHTML += `</div></div>`;
    questionHTML += `<button onclick="nextQuestion()">Next</button>`;
    quizContainer.innerHTML = questionHTML;
}

function nextQuestion() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selectedOption) {
        if (selectedOption.value === questions[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion(currentQuestionIndex);
        } else {
            displayResult();
        }
    } else {
        alert("Please select an option.");
    }
}

function displayResult() {
    const totalQuestions = questions.length;
    const percentage = (score / totalQuestions) * 100;
    resultContainer.innerHTML = `
        <h2>Result</h2>
        <p>Your Score: ${score}/${totalQuestions}</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
    `;
}

displayQuestion(currentQuestionIndex);
