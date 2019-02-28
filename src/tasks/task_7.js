export const task7 = () => {
  const task7 = document.querySelector('#task7')
  if (task7 == null) {
    return null
  }
  const createHolder = value => {
    return {
      number: value,
      getValue () {
        console.log(this.number)
        return this.number
      },
      setValue (newValue) {
        this.number = newValue
      }
    }
  }
  const obj = createHolder(5)
  obj.getValue()
  window.obj = obj
}
