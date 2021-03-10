(() => {
  document.addEventListener("DOMContentLoaded", function(event) {
    const form = document.querySelector('form#schedule-service-conversion-form')
    const isServicePage = window.location.href.includes('/servicos/')
    const fieldsToRemove = ['km', 'plate']

    const removeFields = (toRemove) => {
      const formGroups = form.querySelectorAll('.form-group')

      if(formGroups) {
        Array.prototype.forEach.call(formGroups, (group) => {
          const child = group.querySelector('select') ? group.querySelector('select') : group.querySelector('input')
          if(toRemove.includes(child.name)) {
            child.removeAttribute('required')
            group.style.setProperty('display', 'none')
          }
        })

        setTimeout(function(){
          form.querySelector('input[name="type_service"]').removeAttribute('required')
        }, 1000)
      }
    } 

    if(form && isServicePage) {
      removeFields(fieldsToRemove)
    }
  })
})()
