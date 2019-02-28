export const task2 = () => {
  const task2 = document.querySelector('#task2')
  const input = document.querySelector('[data-js-task2]')
  const button = document.querySelector('[data-js-btn-2]')
  if (task2 == null) {
    return null
  }
  button.addEventListener('click', () => {
    const inputValue = +input.value
    const COND1 = (typeof inputValue === 'number')
    const COND2 = (inputValue <= 30)
    const COND3 = (inputValue > 0)
    if (COND1 && COND2 && COND3) {
      for (let i = 0; i < inputValue; i++) {
        const block = document.querySelector('[data-js-box]').appendChild(document.createElement('div'))
        block.style.cssText = `width: ${inputValue}px; height: ${inputValue}px; background: rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`
      }
    } else {
      alert('Data error')
    }
  })
}
