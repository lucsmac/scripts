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
      <input placeholder="Ano (00/00)" id="year" name="year" class="form-control" type="text" required data-bouncer-target="#invalid-year" aria-describedby="bouncer-error_year" aria-invalid="true" maxlength="5" />
      <div id="invalid-year" class="invalid-feedback"><div class="error-message" id="bouncer-error_year">Por favor, preencha esse campo</div></div>
      `,
      storageKey: 'year',
      id: '#year'
    },
    {
      innerHTML: `
      <input placeholder="Placa (XXX-0000)" id="plate" name="plate" class="form-control" type="plate" required="" data-bouncer-target="#invalid-plate" aria-describedby="bouncer-error_plate" aria-invalid="true" />
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

  // colocando dois campos em duas colunas na mesma linha

  const twoFieldsInSameRow = () => {
    const wrapper = document.createElement('div')
    wrapper.setAttribute('id', 'twoFieldsInSameRowWrapper')
    const field1 = document.querySelector('#model_car')
    const field2 = document.querySelector('#year')
    if(wrapper && field1 && field2) {
      field1.parentElement.insertBefore(wrapper, field1)
      wrapper.appendChild(field1)
      wrapper.appendChild(field2)
    }
  }

  // ajuste na formatação do campo de ano/modelo

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

  // chamando as funções sempre que o form atualizar

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
    
    twoFieldsInSameRow()
    
    
    const modelField = document.querySelector('#year')
    if(modelField)
      modelField.addEventListener('keyup', () => validateModelCar(modelField))
  }

  // adicionando estilos nos campos que vão ficar na mesma linha

  const addStyle = ({ styles }) => {
    const css = styles,
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');
    head.appendChild(style);
    style.setAttribute('type', 'text/css');
    if (style.styleSheet){
      // This is required for IE8 and below.
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }
  
  addStyle({ styles: `
    #twoFieldsInSameRowWrapper {
      display: flex;
    }  

    #twoFieldsInSameRowWrapper #model_car {
      margin-right: 10px;
    } 
  `})
}
  
(() => {
  // document.addEventListener("DOMContentLoaded", function(event) {
    const bannerService = document.querySelector('.showcase-simple__form[data-category="service"]')
    const steps = bannerService.querySelectorAll('.conversion-step__form')
    const step2 = steps[steps.length - 1]
    const form = step2
    runAppendBannersFormFields(form)
  // })
})()