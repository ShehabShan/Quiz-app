// Array of questions for the quiz
const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Who gave the Theory of Relativity?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Archimedes", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Galileo Galilei", correct: false }
        ]
    },
    {
        question: "Which of the following is the poorest conductor of heat in comparison to other options?",
        answers: [
            { text: "Silver", correct: false },
            { text: "Copper", correct: false },
            { text: "Lead", correct: true },
            { text: "Mercury", correct: false }
        ]
    },
    {
        question: "Which of the following represents Kinematic viscosity?",
        answers: [
            { text: "Viscosity/temperature", correct: false },
            { text: "Viscosity/area", correct: false },
            { text: "Viscosity/density", correct: true },
            { text: "Viscosity/mass", correct: false }
        ]
    },
    {
        question: "Which of the following electromagnetic waves in the EM spectrum has the shortest frequency?",
        answers: [
            { text: "Radio", correct: false },
            { text: "Gamma", correct: true },
            { text: "X-rays", correct: false },
            { text: "Infrared", correct: false }
        ]
    }
];

// Get elements from the DOM
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Initialize state variables
let currentQuestionIndex = 0;
let score = 0;

// Start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none"; // Hide the next button initially
    nextButton.innerText = "Next";
    showQuestion();
}

// Show the current question and answers
function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
    });
}

// Reset the state before showing a new question
function resetState() {
    nextButton.style.display = "none"; // Hide the next button
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Handle answer selection
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true; // Disable all answer buttons
    });
    nextButton.style.display = "block"; // Show the next button
}

// Show the final score
function showScore() {
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.style.display = "none"; // Hide the next button
}

// Event listener for the "Next" button
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

// Start the quiz when the page loads
startQuiz();
