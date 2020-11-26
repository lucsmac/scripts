
(() => {
  const modelField = document.querySelector('#year')

  const addSeparator = (field) => {
    const currentValue = field.value
    const arrayCurrentValue = currentValue.split('')
    const cleanValue = arrayCurrentValue.filter(el => el !== '/')
    cleanValue.length > 2 ? cleanValue.splice(2, 0, '/') : cleanValue
    const formated = cleanValue.join('')
    return formated
  }
  
  const validateModelCar = (modelField) => {    
    if(modelField) {
      const formated = addSeparator(modelField)

      modelField.value = formated
    }
  }

  modelField.addEventListener('keyup', () => validateModelCar(modelField))
})()
