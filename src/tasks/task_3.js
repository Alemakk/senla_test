export const task3 = () => {
  const task3 = document.querySelector('#task3')
  const input = document.querySelector('[data-js-task3]')
  const button = document.querySelector('[data-js-btn-3]')
  const box = document.querySelector('[data-js-count]')
  if (task3 == null) {
    return null
  }
  button.addEventListener('click', () => {
    const wordsArray = input.value.replace(/[^\w\s]|_/g, '').split(' ')
    let shortesWord = wordsArray[0].length
    wordsArray.forEach(element => {
      if (element.length < shortesWord) {
        shortesWord = element.length
      }
    })
    box.innerHTML = shortesWord
  })
}
