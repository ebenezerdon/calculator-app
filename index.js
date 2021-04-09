const display = document.querySelector('.display')
const controlsDiv = document.querySelector('.controls')
const controlButtons = controlsDiv.children

const textContainsArrayElement = (text, array) => {
  return array.some(element => text.includes(element))
}

const firstCharacterIsMinus = (text) => {
  return text[0] === '-'
}

const lastCharacterIsNaN = (text) => {
  const indexOfLastCharacter = text.length - 1
  return isNaN(text[indexOfLastCharacter])
}

const replaceLastCharacter = (text, newCharacter) => {
  const textArray = text.split('')
  const indexOfLastCharacter = textArray.length - 1
  textArray[indexOfLastCharacter] = newCharacter
  newText = textArray.join('')
  return newText
}

const reverseText = (text) => {
  if (text === "") return ""
  return reverseText(text.substr(1)) + text.charAt(0);
}

const clearNodeInnertext = (node) => {
  node.innerText = ''
}

const addSymbolToDisplayNode = (value, displayNode, allSymbols) => {
  if(firstCharacterIsMinus(displayNode.innerText)) {
    displayNode.innerText = ''
  }
  else if (lastCharacterIsNaN(displayNode.innerText)) {
    displayNode.innerText = replaceLastCharacter(displayNode.innerText, value)
  }
  else if (textContainsArrayElement(displayNode.innerText, allSymbols)) {
    calculate(displayNode)
    displayNode.innerText += value
  }
  else {
    displayNode.innerText += value
  }
}

const addNumberToDisplayNode = (value, displayNode) => {
  if(firstCharacterIsMinus(displayNode.innerText)) {
    displayNode.innerText = value
  }
  else displayNode.innerText += value
}

const calculate = (displayNode) => {
  const values = displayNode.innerText
  separatedValues = values.split(/(\+|\-|X|\÷|\%)/)
  const firstValue = parseFloat(separatedValues[0])
  const symbol = separatedValues[1]
  const secondValue = parseFloat(separatedValues[2])
  if (!secondValue) return null

  switch(symbol) {
    case '+':
      displayNode.innerText = firstValue + secondValue
    break
    case '-':
      displayNode.innerText = firstValue - secondValue
    break
    case 'X':
      displayNode.innerText = firstValue * secondValue
    break
    case '÷':
      displayNode.innerText = firstValue / secondValue
    break
    case '%':
      displayNode.innerText = firstValue % secondValue
  }
}

for(let button of controlButtons) {
  const allSymbols = ['+', '-', 'X', '÷', '%', '.']
  button.addEventListener('click', () => {
    if (button.innerText === 'C') {
      clearNodeInnertext(display)
    }
    else if (button.innerText === '⮌') {
      display.innerText = reverseText(display.innerText)
    }
    else if (button.innerText === '=') {
      calculate(display)
    }
    else if (allSymbols.includes(button.innerText)) {
      addSymbolToDisplayNode(button.innerText, display, allSymbols)
    }
    else {
      addNumberToDisplayNode(button.innerText, display)
    }
  })
}
