const holes = document.querySelectorAll('.hole')
const scoreBoard = document.querySelector('.score')
const moles = document.querySelectorAll('.mole')

const randomTime = (min, max) => Math.round(Math.random() * (max-min) + min)

let lastHole
let timeUp = false
let score = 0

const randomHole = holes => {
  const idx = Math.floor(Math.random() * holes.length)
  const hole = holes[idx]

  if (hole === lastHole) {
    // console.log("Ah, nah... that's the same bud!")
    randomHole(holes)
  }

  lastHole = hole

  return hole
}

const peep = () => {
  const time = randomTime(400, 1000)
  const hole = randomHole(holes)

  hole.classList.add('up')

  setTimeout(() => {
    hole.classList.remove('up')
    if (!timeUp) {
      peep()
    }
  }, time)
}

function bonk(e) {
  if (!e.isTrusted) {
    console.log('cheater!')
    return // Cheater!
  }

  score++
  this.parentNode.classList.remove('up')
  scoreBoard.textContent = score
}

const startGame = () => {
  scoreBoard.textContent = 0
  timeUp = false
  score = 0
  peep()
  setTimeout(() => { timeUp = true }, 10000)
}

moles.forEach(mole => mole.addEventListener('click', bonk))