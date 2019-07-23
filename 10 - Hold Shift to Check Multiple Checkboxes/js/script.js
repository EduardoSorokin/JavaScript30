let clicked = null

const checkboxClick = (e, index, array) => {
  if (array[index].checked === false) {
    clicked = null
    return
  }

  if (clicked === null || !e.shiftKey) {
    clicked = index
    return
  }
  
  const [min, max] = minAndMax(clicked, index)
  check(array.slice(min, max))
  clicked = null
}

const minAndMax = (a, b) => [Math.min(a,b), Math.max(a,b)]

const check = array => array.forEach(item => item.checked = true)

const checkboxes = Array.from(document.querySelectorAll('.inbox input[type="checkbox"]'))
checkboxes.forEach((checkbox, index, array) =>
  checkbox.addEventListener('click', e => checkboxClick(e, index, array))
)
