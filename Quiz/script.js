// Inirial Data

let currentQuestion = 0
let correctAnswrs = 0

showQuestion()

//Events

document.querySelector(".scoreArea button").addEventListener("click", resetEvent)

// Functions
function showQuestion() {
  if(questions[currentQuestion]) {
    let q = questions[currentQuestion]

    let pct = Math.floor((currentQuestion / questions.length) * 100)
    document.querySelector(".progress--bar").style.width = `${pct}%`

    document.querySelector(".scoreArea").style.display = "none"
    document.querySelector(".questionArea").style.display = "block"

    document.querySelector(".question").innerHTML = q.question

    let optionsHtml = ""
    for(i in q.options) {
      optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span>${q.options[i]}</div>`
    }

    document.querySelector(".options").innerHTML = optionsHtml

    document.querySelectorAll(".options .option").forEach(item => {
      item.addEventListener("click", optionClickEvent)
    })

  } else {
    finishQuiz()
  }
}

function optionClickEvent(e) {
  let clickedOption = parseInt(e.target.getAttribute("data-op"))

  if(questions[currentQuestion].answer === clickedOption) {
    correctAnswrs++
  }

  currentQuestion++
  showQuestion()
}

function finishQuiz() {

  let points = Math.floor((correctAnswrs / questions.length) * 100)

  if(points < 30) {
    document.querySelector(".scoreText1").innerHTML = "Tá ruim em ?!"
    document.querySelector(".scorePct").style.color = "#FF0000"
  } else if (points >= 30 && points < 70) {
    document.querySelector(".scoreText1").innerHTML = "Muito Bom"
    document.querySelector(".scorePct").style.color = "#FFFF00"
  } else if (points >= 70) {
    document.querySelector(".scoreText1").innerHTML = "Parabéns"
    document.querySelector(".scorePct").style.color = "#0D630D"
  }

  document.querySelector(".scorePct").innerHTML = `Acertou ${points}%`
  document.querySelector(".scoreText2").innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswrs}`

  document.querySelector(".scoreArea").style.display = "block"
  document.querySelector(".questionArea").style.display = "none"
  document.querySelector(".progress--bar").style.width = "100%"

}

function resetEvent() {
  correctAnswrs = 0
  currentQuestion = 0
  showQuestion()
}