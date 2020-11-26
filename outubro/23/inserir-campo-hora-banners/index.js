const runAppendBannersFormFields = (formField) => {
  const fieldsData = [
    {
      innerHTML: `
      <input placeholder="Modelo" id="model_car" name="model_car" class="form-control" type="text" required data-bouncer-target="#invalid-model_car" aria-describedby="bouncer-error_model_car" aria-invalid="true" />
      <div id="invalid-model_car" class="invalid-feedback"><div class="error-message" id="bouncer-error_model_car">Por favor, preencha esse campo</div></div>
      `,
      storageKey: 'model_car',
      id: '#model_car'
    },
    {
      innerHTML: `
      <input placeholder="Placa" id="plate" name="plate" class="form-control" type="plate" required="" data-bouncer-target="#invalid-plate" aria-describedby="bouncer-error_plate" aria-invalid="true" />
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

  const addField = (form, innerHTML, storageKey) => {
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
        addField(form, field.innerHTML, field.storageKey)
      })
    }
  }

  // Limpar campo quando abrir o site novamente
  fieldsData.forEach((field) => {
    sessionStorage.setItem(field.storageKey, '')
  })

  // remover campo de modelos quando estiver vazio
  const removeModelsField = (form) => {
    if(form) {
      const modelField = form.querySelector('select[name="product"]')
      if(!modelField) return
      let parent = modelField.parentNode
      while(!parent.classList.contains('form-group')) {
        parent = parent.parentNode
      }
      parent.parentNode.removeChild(parent)
    }
  }

  window.scheduleServiceBannerFormUpdate = () => {
    const form = formField
    removeModelsField(form)
    keepFieldsAlive(form, fieldsData)
    window.scheduleServiceBannerByScriptData = () => {
      return serialize(form)
    }

    // Remover eventos ao clicar em enviar formulário
    const sendBtn = form.querySelector('.conversion-step__actions .button--primary')

    sendBtn.addEventListener('click', () => {
      window.scheduleServiceBannerFormUpdate = () => {}
      window.scheduleServiceBannerByScriptData = () => {
        return {}
      }
    })
  }
}

// const form = document.querySelector('#conversion-step-0-step-1')
// runAppendBannersFormFields(form)
