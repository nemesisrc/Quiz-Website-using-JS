const quizdata = [
  {
    question: "When was javascript launched?",
    a: "1995",
    b: "2004",
    c: "1998",
    d: "1967",
    correct: "a",
  },
  {
    question: "Which type of language JavaScript is?",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Assembly-language",
    d: "High-level",
    correct: "b",
  },
  {
    question: "Which of the following variables takes precedence over the others if the names are the same?",
    a: "Global variable",
    b: "The local element",
    c: "The two of the above",
    d: "None of the above",
    correct: "b",
  },
  {
    question: "In javaScript, which one of the following is not considered as an error?",
    a: "Syntax error",
    b: "Missing of semicolons",
    c: "Out of bound error",
    d: "Missing of Bracket",
    correct: "b",
  },
  {
    question: "In JavaScript the x===y statement implies that:",
    a: "Both x and y are equal in value, type and reference address as well.",
    b: "Both are x and y are equal in value only.",
    c: "Both are equal in the value and data type.",
    d: "Both are not same at all.",
    correct: "c",
  },
];

const answersel = document.querySelectorAll(".answer");
var question = document.getElementById("question");
var a_text = document.getElementById("a-text");
var b_text = document.getElementById("b-text");
var c_text = document.getElementById("c-text");
var d_text = document.getElementById("d-text");
var submitbtn = document.getElementById("submit");
const quiz=document.getElementById("quiz");

var currquestion = 0;
var score = 0

loadquiz()

function deselector() {
  answersel.forEach((i) => {
    i.chcecked = false;
  })
}

function selected() {
  let ans = false;
  answersel.forEach((i) => {
    if (i.checked) {
      ans = i.id;
    }
  });
  return ans;
}
function loadquiz() {
  deselector();
  let currquestiondata = quizdata[currquestion];
  question.innerText = currquestiondata.question;
  a_text.innerText = currquestiondata.a
  b_text.innerText = currquestiondata.b
  c_text.innerText = currquestiondata.c
  d_text.innerText = currquestiondata.d
}
submitbtn.addEventListener("click", () => {
  const ans = selected();
  console.log(ans)
  if (ans) {
    if (ans === quizdata[currquestion].correct) {
      score++;
    }
    currquestion++;
    if (currquestion < quizdata.length) {
      deselector()
      loadquiz()
    } else {
      quiz.innerHTML = `<h2>Your Score is ${score}/${quizdata.length}.</h2>
      <button onclick="location.reload()">TRY AGAIN!!</button>`
    }

  } 
})
