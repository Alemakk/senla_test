export const task1 = () => {
  const task1 = document.querySelector('#task1')
  const input = document.querySelector('[data-js-task1]')
  const button = document.querySelector('[data-js-btn-1]')
  if (task1 == null) {
    return null
  }
  button.addEventListener('click', () => {
    const inputValue = +input.value
    const isNumber = (item) => !isNaN(parseFloat(item))
    const COND1 = isNumber(inputValue)
    if (!COND1) {
      return null
    }
    let sheepString = ''
    for (let i = 1; i <= inputValue; i++) {
      const singleSheep = `${i} sheep...`
      sheepString += singleSheep
    }
    const paragraph = document.querySelector('#task1').appendChild(document.createElement('p'))
    paragraph.innerText = sheepString
  })
}
