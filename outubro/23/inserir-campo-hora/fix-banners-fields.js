(() => {
  const fieldsData = [
    {
      innerHTML: `
      <input placeholder="Placa:" id="plate" name="plate" class="form-control" type="plate" required="" data-bouncer-target="#invalid-plate" aria-describedby="bouncer-error_plate" aria-invalid="true" />
      <div id="invalid-plate" class="invalid-feedback"><div class="error-message" id="bouncer-error_plate">Por favor, preencha esse campo</div></div>
      `,
      storageKey: 'plate',
      id: '#plate'
    },
    {
      innerHTML: `
      <label class="form-label schedule-time" style="color: #000;">Data e horário desejado:</label>
      <input type="date" id="data" placeholder="Data desejada:" name="data" class="form-control" required="" type="text" data-bouncer-target="#invalid-data" aria-describedby="bouncer-error_data" aria-invalid="true" />
      <div id="invalid-data" class="invalid-feedback"><div class="error-message" id="bouncer-error_data">Por favor, preencha esse campo</div></div>
      `,
      storageKey: 'schedule-date',
      id: '#data'
    },
    {
      innerHTML: `
      <input type="time" class="form-control input-time" name="time" placeholder="Horário de preferência" id="schedule-time" required="" aria-required="true" min="08:00:00" max="18:00:00">
      </div>
      `,
      storageKey: 'schedule-time',
      id: '#schedule-time'
    },
  ]

  // Métodos auxiliares
  const simulateReactiveState = (field, storageKey) => {
    const value = sessionStorage.getItem(storageKey) || '';
    const fieldInput = field.querySelector('input') ? field.querySelector('input') : field
    fieldInput.value = value

    fieldInput.onchange = () => {
      sessionStorage.setItem(storageKey, fieldInput.value)
    }
  }

  const buildField = (innerHTML) => {
    const newField = document.createElement('div')
    newField.classList.add('form-group')
    newField.innerHTML = innerHTML
    
    return newField
  }

  const createWrapper = (form) => {
    const wrapper = document.createElement('div')
    wrapper.setAttribute('id', 'script-fields-wrapper')

    const target = form.querySelector('fieldset.conversion-step__contact-by')
    target.parentNode.insertBefore(wrapper, target)
  }

  const addField = (form, innerHTML, elementTarget, storageKey) => {
    const field = buildField(innerHTML)

    const positionTarget = form.querySelector('#script-fields-wrapper')
    positionTarget.appendChild(field)

    simulateReactiveState(field, storageKey)
  }

  const keepFieldsAlive = (form, fields) => {
    const hasField = fields.find((field => form.querySelector(field.id) ))
    if(!hasField) {
      createWrapper(form)
      fields.forEach((field) => {
        addField(form, field.innerHTML, field.positionRef, field.storageKey)
      })
    }
  }

  // Limpar campo quando abrir o site novamente
  fieldsData.forEach((field) => {
    sessionStorage.setItem(field.storageKey, '')
  })

  window.scheduleServiceBannerFormUpdate = () => {
    const form = document.querySelector('#conversion-step-1-step-1')
    keepFieldsAlive(form, fieldsData)
  }
})()