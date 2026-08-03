const quiz = [
  {
    question: "Which is used for styling the web page?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    result: "CSS"
  },
  {
    question: "Which is used for structuring the web page?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    result: "HTML"
  },
  {
    question: "What tag is used for linking CSS file to HTML file?",
    options: ["link", "script", "src", "href"],
    result: "link"
  },
  {
    question: "What tag is used for highlighting by default?",
    options: ["mark", "span", "div", "container"],
    result: "mark"
  }
];

let index = 0;
let score = 0;
let selectedOption = null;
const questionElement = document.getElementById("questions");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");

function loadquestion() {
  selectedOption = null;
  optionsElement.innerHTML = "";
  resultElement.textContent = "";

  const current = quiz[index];
  questionElement.textContent = current.question;

  current.options.forEach((text) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.classList.add("option-btn");

    button.addEventListener("click", () => handleOption(button, text));
    optionsElement.appendChild(button);
  });
}

function handleOption(selectedBtn, chosenOption) {
  selectedOption = chosenOption;
  
  const buttons = optionsElement.querySelectorAll("button");
  buttons.forEach((btn) => btn.classList.remove("selected"));
  selectedBtn.classList.add("selected");
}

function nextQuestion() {
  if (selectedOption === null) {
    alert("Please select an option!");
    return;
  }

  const currentQuiz = quiz[index];
  if (selectedOption === currentQuiz.result) {
    score++;
  }
  
  index++;
  
  if (index < quiz.length) {
    loadquestion();
  } else {
    showfinalresult();
  }
}

function showfinalresult() {
  questionElement.textContent = "QUIZ Completed!";
  optionsElement.innerHTML = "";
  
  const nextBtn = document.querySelector("button[onclick='nextQuestion()']");
  if (nextBtn) {
    nextBtn.style.display = "none";
  }
  
  resultElement.textContent = `Your Score: ${score} / ${quiz.length}`;
}

loadquestion();