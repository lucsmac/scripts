(() => {
  const form = document.querySelector('#conversion-step-1-step-1')
  if(form) {
    const modelField = form.querySelector('select[name="product"]')
    let parent = modelField.parentNode
    while(!parent.classList.contains('form-group')) {
      parent = parent.parentNode
    }
    const modelsOptions = parent.querySelector('.choices__list .choices__list')
    const options = modelsOptions.childNodes
    if(options.length <= 1)
      parent.parentNode.removeChild(parent)
  }
})()
