export const task6 = () => {
  const task6 = document.querySelector('#task6')
  const myArray = ['Create', 'a', 'frame']
  const mySymbol = '*'
  if (task6 == null) {
    return null
  }
  const getFrame = (array, symbol) => {
    if (!array.length) {
      alert('array is empty')
      return null
    }
    let longestWord = ''

    array.forEach(el => {
      if (el.length > longestWord.length) {
        longestWord = el
      }
    })

    console.log(symbol.repeat(longestWord.length + 4))
    array.forEach(el => {
      const diff = longestWord.length - el.length

      console.log(`${symbol} ${el}${(' ').repeat(diff + 1)}${symbol}`)
    })
    console.log(symbol.repeat(longestWord.length + 4))
  }
  getFrame(myArray, mySymbol)
  window.getFrame = getFrame
}
