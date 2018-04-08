const reveal = function (id) {
  document.getElementById(id).style.display = 'block'
  document.getElementById(id + 'button').innerHTML = 'hide'
  document.getElementById(id + 'button').onclick = function () {
    hide(id)
  }
}

const hide = function (id) {
  document.getElementById(id).style.display = 'none'
  document.getElementById(id + 'button').innerHTML = 'reveal'
  document.getElementById(id + 'button').onclick = function () {
    reveal(id)
  }
}

class Answers {
  constructor () {
    this.correct = {}
  }

  register (id, correctAnswer) {
    this.correct.id = correctAnswer
  }

  check (id, answer) {
    return answer === this.correct.id
  }

  getCorrectAnswer (id) {
    return correct.id
  }
}

const pageAnswers = new Answers()

const makeUnselectable = function (optionElement) {
  optionElement.classList.remove('selectable')
  optionElement.onclick = null
}

const resolveChoice = function (id, answer, optionsList) {
  if (pageAnswers.check(id, answer)) {
    optionsList.forEach(function (currentOption, currentIndex) {
      makeUnselectable(currentOption)

      currentOption.classList.add(
        currentIndex === answer ? 'correct' : 'greyedout'
      )
    })
  } else {
    optionsList.forEach(function (currentOption, currentIndex) {
      makeUnselectable(currentOption)

      let status
      if (currentIndex === answer) {
        status = 'wrong'
      } else if (pageAnswers.check(id, currentIndex)) {
        status = 'correction'
      } else {
        status = 'greyedout'
      }
      currentOption.classList.add(status)
    })
  }
}

const setUpChoices = function (id, correctAnswer) {
  pageAnswers.register(id, correctAnswer)
  const optionsList = document.querySelectorAll('#' + id + ' ul li')

  optionsList.forEach(function (currentOption, currentIndex) {
    currentOption.classList.add('selectable')
    currentOption.onclick = function () {
      resolveChoice(id, currentIndex, optionsList)
    }
  })
}
