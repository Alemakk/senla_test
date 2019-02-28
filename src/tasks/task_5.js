export const task5 = () => {
  const task5 = document.querySelector('#task5')
  const myArray = [3, 1, 4, 2]
  const myNumber = 1.3
  if (task5 == null) {
    return null
  }
  const getLowerestIndex = (array, number) => {
    const point = number
    const sortArray = array.sort()
    let result = sortArray.length
    for (let index = 0; index < sortArray.length; index++) {
      const element = sortArray[index]
      if (element > point) {
        result = index
        break
      }
    }
    console.log(result)
  }
  getLowerestIndex(myArray, myNumber)
  window.getLowerestIndex = getLowerestIndex
}
