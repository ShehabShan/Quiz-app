const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Who gave the Theory of Relativity?",
    answers: [
      { text: "Isaac Newton", correct: false },
      { text: "Archimedes", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "Galileo Galilei", correct: false },
    ],
  },
  {
    question:
      "Which of the following is the poorest conductor of heat in comparison to other options?",
    answers: [
      { text: "Silver", correct: false },
      { text: "Copper", correct: false },
      { text: "Lead", correct: true },
      { text: "Mercury", correct: false },
    ],
  },
  {
    question: "Which of the following represents Kinematic viscosity?",
    answers: [
      { text: "Viscosity/temperature", correct: false },
      { text: "Viscosity/area", correct: false },
      { text: "Viscosity/density", correct: true },
      { text: "Viscosity/mass", correct: false },
    ],
  },
  {
    question:
      "Which of the following electromagnetic waves in the EM spectrum has the shortest frequency?",
    answers: [
      { text: "Radio", correct: false },
      { text: "Gamma", correct: true },
      { text: "X-rays", correct: false },
      { text: "Infrared", correct: false },
    ],
  },
  {
    question: "Which planet is the closest to the Sun?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Earth", correct: false },
      { text: "Mercury", correct: true },
      { text: "Mars", correct: false },
    ],
  },

  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
      { text: "Pb", correct: false },
      { text: "Fe", correct: false },
    ],
  },

  {
    question: "Which continent is the Sahara Desert located in?",
    answers: [
      { text: "Asia", correct: false },
      { text: "South America", correct: false },
      { text: "Africa", correct: true },
      { text: "Australia", correct: false },
    ],
  },

  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Pablo Picasso", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Claude Monet", correct: false },
    ],
  },

  {
    question: "What is the boiling point of water at sea level?",
    answers: [
      { text: "50°C", correct: false },
      { text: "75°C", correct: false },
      { text: "100°C", correct: true },
      { text: "125°C", correct: false },
    ],
  },
  {
    question: "Which gas do plants primarily use for photosynthesis?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Carbon dioxide", correct: true },
      { text: "Hydrogen", correct: false },
    ],
  },

  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Rome", correct: false },
      { text: "Paris", correct: true },
    ],
  },

  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Saturn", correct: false },
      { text: "Earth", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Uranus", correct: false },
    ],
  },

  {
    question:
      "Which element is represented by the symbol 'O' on the periodic table?",
    answers: [
      { text: "Osmium", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Osmium", correct: false },
      { text: "Oganesson", correct: false },
    ],
  },

  {
    question: "What is the longest river in the world?",
    answers: [
      { text: "Amazon River", correct: false },
      { text: "Nile River", correct: true },
      { text: "Yangtze River", correct: false },
      { text: "Mississippi River", correct: false },
    ],
  },

  {
    question: "Which planet is known as the Morning Star or Evening Star?",
    answers: [
      { text: "Mercury", correct: false },
      { text: "Venus", correct: true },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: false },
    ],
  },

  {
    question: "Who wrote 'Pride and Prejudice'?",
    answers: [
      { text: "Jane Austen", correct: true },
      { text: "Charles Dickens", correct: false },
      { text: "Emily Brontë", correct: false },
      { text: "William Shakespeare", correct: false },
    ],
  },

  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: [
      { text: "China", correct: false },
      { text: "Japan", correct: true },
      { text: "South Korea", correct: false },
      { text: "Thailand", correct: false },
    ],
  },

  {
    question: "What is the hardest natural substance found on Earth?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Diamond", correct: true },
      { text: "Platinum", correct: false },
      { text: "Iron", correct: false },
    ],
  },

  {
    question: "Which ocean is the smallest?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: false },
      { text: "Arctic Ocean", correct: true },
    ],
  },

  {
    question: "What is the currency of Japan?",
    answers: [
      { text: "Yuan", correct: false },
      { text: "Won", correct: false },
      { text: "Yen", correct: true },
      { text: "Ringgit", correct: false },
    ],
  },

  {
    question: "What is the main ingredient in guacamole?",
    answers: [
      { text: "Tomato", correct: false },
      { text: "Avocado", correct: true },
      { text: "Cucumber", correct: false },
      { text: "Pepper", correct: false },
    ],
  },

  {
    question: "Who is the Greek god of the sea?",
    answers: [
      { text: "Zeus", correct: false },
      { text: "Apollo", correct: false },
      { text: "Poseidon", correct: true },
      { text: "Hades", correct: false },
    ],
  },

  {
    question: "Which animal is known for having a long neck?",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: true },
      { text: "Horses", correct: false },
      { text: "Zebra", correct: false },
    ],
  },

  {
    question: "Which of these is a prime number?",
    answers: [
      { text: "4", correct: false },
      { text: "6", correct: false },
      { text: "9", correct: false },
      { text: "11", correct: true },
    ],
  },

  {
    question: "What is the main language spoken in Brazil?",
    answers: [
      { text: "Spanish", correct: false },
      { text: "Portuguese", correct: true },
      { text: "English", correct: false },
      { text: "French", correct: false },
    ],
  },

  {
    question: "Which planet is known for its prominent rings?",
    answers: [
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: true },
      { text: "Uranus", correct: false },
      { text: "Neptune", correct: false },
    ],
  },

  {
    question: "What is the chemical formula for water?",
    answers: [
      { text: "H2O", correct: true },
      { text: "CO2", correct: false },
      { text: "O2", correct: false },
      { text: "NaCl", correct: false },
    ],
  },

  {
    question: "Who was the first person to walk on the moon?",
    answers: [
      { text: "Buzz Aldrin", correct: false },
      { text: "Neil Armstrong", correct: true },
      { text: "Yuri Gagarin", correct: false },
      { text: "Michael Collins", correct: false },
    ],
  },

  {
    question: "What is the capital city of Canada?",
    answers: [
      { text: "Toronto", correct: false },
      { text: "Vancouver", correct: false },
      { text: "Montreal", correct: false },
      { text: "Ottawa", correct: true },
    ],
  },
  {
    question: "What is the value of π (pi) to two decimal places?",
    answers: [
      { text: "2.14", correct: false },
      { text: "3.14", correct: true },
      { text: "4.14", correct: false },
      { text: "5.14", correct: false },
    ],
  },

  {
    question: "What is the square root of 144?",
    answers: [
      { text: "10", correct: false },
      { text: "12", correct: true },
      { text: "14", correct: false },
      { text: "16", correct: false },
    ],
  },

  {
    question: "What is the sum of the angles in a triangle?",
    answers: [
      { text: "90 degrees", correct: false },
      { text: "180 degrees", correct: true },
      { text: "360 degrees", correct: false },
      { text: "270 degrees", correct: false },
    ],
  },

  {
    question:
      "If a rectangle has a length of 8 and a width of 5, what is its area?",
    answers: [
      { text: "30", correct: false },
      { text: "40", correct: false },
      { text: "50", correct: false },
      { text: "40", correct: true },
    ],
  },

  {
    question: "What is 15% of 200?",
    answers: [
      { text: "20", correct: false },
      { text: "25", correct: true },
      { text: "30", correct: false },
      { text: "35", correct: false },
    ],
  },

  {
    question: "What is the result of 7 multiplied by 8?",
    answers: [
      { text: "54", correct: false },
      { text: "56", correct: true },
      { text: "58", correct: false },
      { text: "64", correct: false },
    ],
  },

  {
    question: "What is the value of 2^5 (2 raised to the power of 5)?",
    answers: [
      { text: "10", correct: false },
      { text: "16", correct: false },
      { text: "32", correct: true },
      { text: "64", correct: false },
    ],
  },

  {
    question:
      "What is the median of the following set of numbers: 3, 7, 5, 9, 2?",
    answers: [
      { text: "5", correct: true },
      { text: "7", correct: false },
      { text: "6", correct: false },
      { text: "8", correct: false },
    ],
  },

  {
    question:
      "If a triangle has sides of lengths 3, 4, and 5, what type of triangle is it?",
    answers: [
      { text: "Equilateral", correct: false },
      { text: "Isosceles", correct: false },
      { text: "Scalene", correct: true },
      { text: "Right", correct: false },
    ],
  },

  {
    question: "What is the value of 100 divided by 4?",
    answers: [
      { text: "20", correct: true },
      { text: "25", correct: false },
      { text: "30", correct: false },
      { text: "35", correct: false },
    ],
  },
  {
    question: "Why was the equal sign so humble?",
    answers: [
      {
        text: "Because it knew it wasn’t less than or greater than anyone else!",
        correct: true,
      },
      { text: "Because it was always equal to itself!", correct: false },
      { text: "Because it was always balanced!", correct: false },
      { text: "Because it couldn’t handle inequality!", correct: false },
    ],
  },

  {
    question: "Why was the math book sad?",
    answers: [
      { text: "It had too many problems.", correct: true },
      { text: "It couldn’t find its numbers.", correct: false },
      { text: "It was out of pages.", correct: false },
      { text: "It couldn’t solve its issues.", correct: false },
    ],
  },

  {
    question: "Why did the student wear glasses in math class?",
    answers: [
      { text: "To improve division.", correct: false },
      { text: "To make sure he saw the numbers clearly!", correct: true },
      { text: "Because he wanted to look smart!", correct: false },
      { text: "To count the problems!", correct: false },
    ],
  },

  {
    question: "What do you call friends who love math?",
    answers: [
      { text: "Alge-bros!", correct: true },
      { text: "Math buddies!", correct: false },
      { text: "Numerical pals!", correct: false },
      { text: "Fraction friends!", correct: false },
    ],
  },

  {
    question: "How do you make seven an even number?",
    answers: [
      { text: "Add one to it!", correct: false },
      { text: "Remove the 's'!", correct: true },
      { text: "Divide it by two!", correct: false },
      { text: "Subtract one from it!", correct: false },
    ],
  },
  {
    question: "Why was the mathematician always in trouble with their partner?",
    answers: [
      {
        text: "Because they couldn’t stop talking about their ex.",
        correct: false,
      },
      {
        text: "Because they kept finding their partner’s faults.",
        correct: false,
      },
      {
        text: "Because they were always making irrational decisions.",
        correct: true,
      },
      {
        text: "Because they couldn’t balance their relationship.",
        correct: false,
      },
    ],
  },

  {
    question: "How do mathematicians stay cool at parties?",
    answers: [
      { text: "By hanging out with their prime friends.", correct: false },
      { text: "By counting to infinity.", correct: false },
      {
        text: "By staying in the corner and making a cosine wave.",
        correct: true,
      },
      { text: "By solving complex equations.", correct: false },
    ],
  },

  {
    question: "Why did the mathematician break up with their calculator?",
    answers: [
      {
        text: "Because it couldn’t handle their complex feelings.",
        correct: true,
      },
      { text: "Because it was too simple-minded.", correct: false },
      { text: "Because it kept making errors.", correct: false },
      { text: "Because it was too calculating.", correct: false },
    ],
  },

  {
    question: "Why did the mathematician get a job in finance?",
    answers: [
      {
        text: "Because they wanted to use their calculus skills.",
        correct: false,
      },
      { text: "Because they wanted to count their money.", correct: false },
      {
        text: "Because they wanted to integrate their interests.",
        correct: true,
      },
      {
        text: "Because they needed a solution to their problems.",
        correct: false,
      },
    ],
  },

  {
    question:
      "What did the mathematician say when they were told to stop thinking about sex?",
    answers: [
      { text: "‘I can’t help it, I’m always integrating.’", correct: false },
      { text: "‘I’m just looking for the right angle.’", correct: true },
      { text: "‘I’m just trying to find the right equation.’", correct: false },
      { text: "‘I need to work on my tangent.’", correct: false },
    ],
  },
  {
    question: "How do you keep a romantic evening interesting?",
    answers: [
      { text: "By making sure to balance the conversation.", correct: false },
      { text: "By finding common interests.", correct: false },
      {
        text: "By making every moment an integral part of the evening.",
        correct: true,
      },
      {
        text: "By planning everything down to the last detail.",
        correct: false,
      },
    ],
  },

  {
    question: "What’s a great way to make your partner feel special?",
    answers: [
      { text: "Writing them a love letter.", correct: false },
      { text: "Cooking their favorite meal.", correct: false },
      { text: "Surprising them with a romantic equation.", correct: true },
      { text: "Planning an elaborate date night.", correct: false },
    ],
  },

  {
    question: "What’s a surefire way to set the mood for an intimate evening?",
    answers: [
      { text: "Turning on some relaxing music.", correct: false },
      { text: "Lighting candles for ambiance.", correct: false },
      { text: "Sharing a meaningful conversation.", correct: false },
      {
        text: "Making sure every interaction adds up perfectly.",
        correct: true,
      },
    ],
  },

  {
    question: "How do you express deep affection for your partner?",
    answers: [
      { text: "By giving thoughtful gifts.", correct: false },
      { text: "By sharing heartfelt words.", correct: false },
      { text: "By creating a memorable experience together.", correct: true },
      { text: "By doing something extraordinary for them.", correct: false },
    ],
  },

  {
    question: "What’s an intimate way to show you care?",
    answers: [
      { text: "Planning an exciting getaway.", correct: false },
      { text: "Engaging in deep conversations.", correct: false },
      { text: "Doing something special and unexpected.", correct: true },
      { text: "Writing a poem just for them.", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.style.display = "none";
  nextButton.innerText = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = `${currentQuestionIndex + 1}. ${
    currentQuestion.question
  }`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.style.display = "none";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  startQuiz();
});
