// const questions = [
//   {
//     question: "which is largest animal in the world",
//     answers: [
//       { text: "Shark", correct: false },
//       { text: "blue whale", correct: true },
//       { text: "Elephant", correct: false },
//       { text: "Giraffe", correct: false },
//     ],
//   },
//   {
//     question: "Who gave the Theory of Relativity?",
//     answers: [
//       { text: "Isaac Newton", correct: false },
//       { text: "Archimedes", correct: false },
//       { text: "Albert Einstein", correct: true },
//       { text: "Galileo Galilei", correct: false },
//     ],
//   },
//   {
//     question:
//       "Which of the following is the poorest conductor of heat in comparison to other options?",
//     answers: [
//       { text: "Sh Silver", correct: false },
//       { text: "Copper", correct: false },
//       { text: "Lead", correct: true },
//       { text: "Mercury", correct: false },
//     ],
//   },
//   {
//     question: "Which of the following represents Kinematic viscosity?",
//     answers: [
//       { text: "Viscosity/temperature", correct: false },
//       { text: "Viscosity/area", correct: false },
//       { text: "Viscosity/density", correct: true },
//       { text: "Viscosity/mass", correct: false },
//     ],
//   },
//   {
//     question:
//       "Which of the following electromagnetic waves in the EM spectrum has the shortest frequency?",
//     answers: [
//       { text: "Radio", correct: true },
//       { text: "Gamma", correct: false },
//       { text: "X-rays", correct: false },
//       { text: " Infrared", correct: false },
//     ],
//   },
// ];

// const questionElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz() {
//   currentQuestionIndex = 0;
//   score = 0;
//   nextButton.innerHTML = "Next";
//   showQuestion();
// }

// function showQuestion() {
//   resetState();
//   let currentQuestion = questions[currentQuestionIndex];
//   let questionNo = currentQuestionIndex + 1;
//   questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//   currentQuestion.answers.forEach((answer) => {
//     const button = document.createElement("button");
//     button.innerHTML = answer.text;
//     button.classList.add("btn");
//     answerButtons.appendChild(button);
//     if (answer.correct) {
//       button.dataset.correct = answer.correct;
//     }
//     button.addEventListener("click", SelectAnswer);
//   });
// }

// function resetState() {
//   nextButton.style.display = "none";
//   while (answerButtons.firstChild) {
//     answerButtons.removeChild(answerButtons.firstChild);
//   }
// }

// function SelectAnswer(e) {
//   const selectedBtn = e.target;
//   const isCorrect = selectedBtn.dataset.correct === "true";
//   if (isCorrect) {
//     selectedBtn.classList.add("correct");
//   } else {
//     selectedBtn.classList.add("incorrect");
//   }
//   Array.from(answerButtons.children).forEach((button) => {
//     if (button.dataset.correct === "true") {
//       button.classList.add("correct");
//     }
//     button.disabled = "true";
//   });
//   nextButton.style.display = "block";

//   function showNextQuestion() {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//       showQuestion();
//     } else {
//       showScore();
//     }
//   }

//   function showScore() {
//     resetState();
//     questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
//     nextButton.classList.add("hide");
//   }
// }

// nextButton.addEventListener("click", showNextQuestion);

// startQuiz();
