const secretCode = 'arrowuparrowuparrowdownarrowdownarrowleftarrowrightarrowleftarrowrightbaenter' // KONAMI CODE
let pressed = []

const validatePressedKeys = e => {
  pressed.push(e.key.toLowerCase())
  pressed.splice(-secretCode.length -1, pressed.length - secretCode.length)
  if (pressed.join('').includes(secretCode)) {
    pressed = []
    cornify_add()
  }
}

window.addEventListener('keyup', validatePressedKeys)