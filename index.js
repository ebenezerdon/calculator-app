const display = document.querySelector('.display')
const controlButtons = document.querySelector('.controls').children
const allSymbols = ['+', '-', 'X', '÷', '%', 'C', '=']

let firstValue = ''
let secondValue = ''
let symbol  = ''
let result = ''

const calculate = () => {
  firstValue = parseFloat(firstValue)
  secondValue = parseFloat(secondValue)

  if (symbol === '+') result = firstValue + secondValue
  if (symbol === '-') result = firstValue - secondValue
  if (symbol === 'X') result = firstValue * secondValue
  if (symbol === '÷') result = firstValue / secondValue
  if (symbol === '%') result = firstValue % secondValue

  display.innerText = result
  firstValue = result
  secondValue = ''
}

for (let button of controlButtons) {
  button.addEventListener('click', () => {
    const { innerText: btnValue } = button
    const btnValueIsSymbol = allSymbols.includes(btnValue)

    if (!secondValue && btnValue === '=') return null

    if (btnValue === 'C') {
      firstValue = secondValue = symbol = ''
      return display.innerText = ''
    }

    if (firstValue && btnValueIsSymbol) {
      secondValue && calculate()
      symbol = btnValue
    }

    // if there's no symbol, that means the user is still inputting first value
    else if (!symbol) firstValue += btnValue
    // if there's a symbol, that means the user is done with the first value, so add to second
    else if (symbol) secondValue += btnValue
    // don't add the equal-sign to the display
    if (btnValue !== '=') display.innerText += btnValue
  })
}

/*
  todo: add backspace functionality
*/

/*
  todo: if the value on the screen is a result, and the user clicks on a number,
   replace the value on the screen with the new number
*/

/*
  todo: if last character in the display is a symbol and the user clicks on another symbol,
   replace last character with the new symbol
*/

/*
  todo: fix => if result is 0, calculator stops calculating
*/
