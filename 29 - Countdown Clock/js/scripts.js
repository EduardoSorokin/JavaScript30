const buttons = document.querySelectorAll('[data-time]')
const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')

let countdown

const timer = seconds => {
  // clear any existing timers
  clearInterval(countdown)

  const now = Date.now()
  const then = now + seconds * 1000
  
  displayTimeLeft(seconds)
  displayEndTime(then)

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000)
    
    // Check if we should stop it
    if (secondsLeft < 0) {
      clearInterval(countdown)
      return
    }
    
    // Display it
    displayTimeLeft(secondsLeft)
  }, 1000)
}

const displayTimeLeft = seconds => {
  const remainerMinutes = Math.floor(seconds / 60)
  const remainerSeconds = seconds % 60

  const display = `${remainerMinutes}:${remainerSeconds < 10 ? '0' : ''}${remainerSeconds}`
  
  document.title = `Time Left: ${display}`
  timerDisplay.textContent = display
}

const displayEndTime = timestamp => {
  const end = new Date(timestamp)
  const hour = end.getHours()
  const minutes = end.getMinutes()

  const adjustedHour = hour > 12 ? hour - 12 : hour

  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`
}

function startTimer() {
  const seconds = +this.dataset.time
  timer(seconds)
}

buttons.forEach(button => button.addEventListener('click', startTimer))

document.customForm.addEventListener('submit', function (e) {
  e.preventDefault()

  const mins = this.minutes.value
  timer(mins * 60)

  this.reset()
})