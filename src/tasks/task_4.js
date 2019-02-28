export const task4 = () => {
  const task4 = document.querySelector('#task4')
  const myArray = [1, 2, 3, 4, 5, 6]
  const myDivider = 3
  if (task4 == null) {
    return null
  }
  const getDimensionalArray = (array, divider) => {
    const result = []
    array.forEach((element, index) => {
      const resInd = Math.floor(index / divider)
      if (result[resInd]) {
        result[resInd].push(element)
      } else {
        result[resInd] = [element]
      }
    })
    console.log(result)
  }
  getDimensionalArray(myArray, myDivider)
  window.getDimensionalArray = getDimensionalArray
}
