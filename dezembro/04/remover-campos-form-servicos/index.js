(() => {
  const isServicePage = window.location.href.includes('/servicos')
  const fieldsToKeep = ['name', 'email', 'phone', 'cpf', 'unit']
  
  const form = document.querySelector('form#modal-services')
  const btnOpen = document.querySelector('.btn.button.button--large.button--primary.showcase-services__panel-btn-schedule')
  
  console.log(btnOpen)
      
  const removeFields = (form, toKeep) => {
    console.log('chamou: ', form)
    const formGroups = form.querySelectorAll('fieldset > .form-group')
    if(formGroups) {
      Array.prototype.forEach.call(formGroups, (group) => {
        const child = group.querySelector('select') ? group.querySelector('select') : group.querySelector('input')
        if(child && child.name && !toKeep.includes(child.name)) {
          group.remove()
        }
      })
    }
  }

  const addEventToRemove = (form, toKeep) => {
    const formGroups = form.querySelectorAll('fieldset > .form-group')
    if(formGroups) {
      Array.prototype.forEach.call(formGroups, (group) => {
        const child = group.querySelector('select') ? group.querySelector('select') : group.querySelector('input')
        child.addEventListener('keyup', () => removeFields(form, toKeep))
      })
    }
  }
  
  if(isServicePage) {
    removeFields(form, fieldsToKeep)
    btnOpen.addEventListener('click', () => removeFields(form, fieldsToKeep))
    addEventToRemove(form, fieldsToKeep)
  }

})()
