(() => {
  // document.addEventListener("DOMContentLoaded", function(event) {
    const form = document.querySelector('form#modal-services')
    const isServicePage = window.location.href.includes('/servicos')
    const fieldsToKeep = ['name', 'email', 'phone', 'cpf']

    const removeFields = (toKeep) => {
      const formGroups = form.querySelectorAll('.form-group')

      const appendField = () => {
        const formGroup = document.createElement('div')
        formGroup.classList.add('form-group')
        formGroup.innerHTML = '<select name="type_service" class="form-control choices__input is-hidden"><option value="REVISÃO" selected=""></option></select>'

        const target = form.querySelector('fieldset')
        target.appendChild(formGroup)
      }

      if(formGroups) {
        Array.prototype.forEach.call(formGroups, (group) => {
          const child = group.querySelector('select') ? group.querySelector('select') : group.querySelector('input')
          if(!toKeep.includes(child.name)) {
            child.removeAttribute('required')
            group.style.setProperty('display', 'none')
          }
        })

        setTimeout(function(){
          form.querySelector('input[name="type_service"]').removeAttribute('required')
        }, 1000)
  
        appendField()
      }
    } 

    window.scheduleServiceFormUpdate = () => {
      if(form && isServicePage)
        removeFields(fieldsToKeep)
    }
  // })
})()