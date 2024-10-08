const questions = [
    {
        question: "What is the molar mass of Sodium Chloride (NaCl)?",
        options: ["58.44 g/mol", "74.55 g/mol", "101.10 g/mol", "84.01 g/mol"],
        answer: "58.44 g/mol",
    },
    {
        question: "Which of the following is a common use for Potassium Nitrate (KNO3)?",
        options: [
            "Fertilizer",
            "Food Preservative",
            "De-icing Agent",
            "None of the Above",
        ],
        answer: "Fertilizer",
    },
    {
        question: "What is the difference between molarity and molality?",
        options: [
            "Molarity is moles of solute per liter of solution, while molality is moles of solute per kilogram of solvent.",
            "Molarity is based on volume, while molality is based on mass.",
            "Both are the same.",
            "A and B are correct.",
        ],
        answer: "A and B are correct.",
    },
    {
        question: "Which salt is commonly used in Epsom salts?",
        options: ["Sodium Chloride", "Magnesium Sulfate", "Potassium Chloride", "Calcium Chloride"],
        answer: "Magnesium Sulfate",
    },
    {
        question: "What is the primary health benefit of Sodium Bicarbonate (baking soda)?",
        options: [
            "Promotes weight loss",
            "Helps with indigestion",
            "Improves sleep quality",
            "None of the above",
        ],
        answer: "Helps with indigestion",
    },
    {
        question: "Which of the following salts is known for its use in glass-making?",
        options: [
            "Sodium Chloride",
            "Calcium Chloride",
            "Sodium Carbonate",
            "Potassium Nitrate",
        ],
        answer: "Sodium Carbonate",
    },
    {
        question: "What is the effect of Calcium Chloride on ice?",
        options: [
            "It melts ice",
            "It freezes ice",
            "It has no effect",
            "It causes ice to become slushy",
        ],
        answer: "It melts ice",
    },
];

let currentQuestionIndex = 0;
let score = 0;

// Function to shuffle the questions
function shuffleQuestions(questions) {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

// Load questions and shuffle them
shuffleQuestions(questions);

function loadQuestion() {
    const questionContainer = document.getElementById("questionContainer");
    const currentQuestion = questions[currentQuestionIndex];

    questionContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        ${currentQuestion.options
            .map(
                (option, index) => `
            <div class="option-container">
                <input type="radio" name="option" id="option${index}" value="${option}">
                <label for="option${index}">${option}</label>
            </div>`
            )
            .join("")}
        <button id="nextButton">Next</button>
    `;

    document.getElementById("nextButton").addEventListener("click", checkAnswer);
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }

    if (selectedOption.value === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    const questionContainer = document.getElementById("questionContainer");
    questionContainer.innerHTML = `
        <h2>Quiz Complete!</h2>
        <p>Your score: ${score} out of ${questions.length}</p>
        <button id="restartButton">Restart Quiz</button>
        <button id="returnButton">Return to Calculator</button>
    `;

    document.getElementById("restartButton").addEventListener("click", restartQuiz);
    document.getElementById("returnButton").addEventListener("click", returnToCalculator);
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    shuffleQuestions(questions); // Shuffle again for a new order
    loadQuestion();
}

function returnToCalculator() {
    window.location.href = 'index.html'; // Replace with your calculator page link
}

// Start the quiz when the page loads
window.onload = loadQuestion;