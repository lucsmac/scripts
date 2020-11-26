const runAppendHourFieldBanner = (formSelector, elementTarget, innerHTML, storageKey, NewFieldId) => {
  // Limpar campo quando abrir o site novamente
  sessionStorage.setItem(storageKey, '')

  // método para adicionar o campo no formulário de conversão dos banners
  const appendFieldToScheduleFormBanner = (formServices, elementTarget, innerHTML, storageKey) => {
  
    const simulateReactiveState = (field, storageKey) => {
      const value = sessionStorage.getItem(storageKey) || '';
      field.value = value
  
      field.onchange = () => {
        sessionStorage.setItem(storageKey, field.value)
      }
    }

    const buildField = (innerHTML) => {
      const newField = document.createElement('div')
      newField.classList.add('form-group')
      newField.innerHTML = innerHTML
      
      return newField
    }

    // constrói o html do campo de data
    const dateField = buildField(innerHTML)
    
    // busca o campo data como referência e adiciona o campo horario
    const positionTarget = formServices.querySelector(elementTarget)
    positionTarget.parentNode.insertBefore(dateField, positionTarget)
    console.log(formServices)
    
    const inputDateField = document.querySelector('#data')
    simulateReactiveState(inputDateField, storageKey)
  }
  
  const formServices = document.querySelector(formSelector)

  // impede duplicações do campo
  const runAppendfield = (formServices, elementTarget, innerHTML, storageKey) => {
    const hasField = document.querySelector(NewFieldId)
    console.log(`hasField: ${NewFieldId}`, hasField)
    if(!hasField){
      appendFieldToScheduleFormBanner(formServices, elementTarget, innerHTML, storageKey)
    }
  }
  
  window.scheduleServiceBannerFormUpdate = () => {
    runAppendfield(formServices, elementTarget, innerHTML, storageKey)
  }
  
  runAppendfield(formServices, elementTarget, innerHTML, storageKey)
  
  // Adapta os estilos do campo para o formulário de internas de serviços
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

  addStyle({ 
    styles: `
      .was-validated .form-control:invalid, .was-validated .form-conversion--static textarea:invalid, .form-conversion--static .was-validated textarea:invalid, .was-validated .form-conversion--static select:invalid, .form-conversion--static .was-validated select:invalid, .form-control.is-invalid, .form-conversion--static textarea.is-invalid, .form-conversion--static select.is-invalid {
        padding-right: 12px;
      }

      .form-label.schedule-time {
        display: block;
        color: #000;
        font-weight: 700;
        font-size: 14px;
        font-size: 0.875rem
      }
    ` 
  })

}

const newFieldsData = [
  {
    formSelector: '#conversion-step-1-step-1',
    positionRef: 'fieldset.conversion-step__contact-by',
    innerHTML: `
    <label class="conversion-form__control-label" for="data">Escolha a data:</label>
    <input id="data" placeholder="Data desejada:" name="data" class="form-control" required="" type="text" data-bouncer-target="#invalid-data" aria-describedby="bouncer-error_data" aria-invalid="true" />
    <div id="invalid-data" class="invalid-feedback"><div class="error-message" id="bouncer-error_data">Por favor, preencha esse campo</div></div>
    `,
    storageKey: 'schedule-date',
    id: '#data'
  },
  {
    formSelector: '#conversion-step-1-step-1',
    positionRef: 'fieldset.conversion-step__contact-by',
    innerHTML: `
    <label class="form-label schedule-time">Horário de preferência:</label>
    <input type="time" class="form-control input-time" name="time" placeholder="Horário de preferência" id="schedule-time" required="" aria-required="true" min="08:00:00" max="18:00:00">
    </div>
    `,
    storageKey: 'schedule-time',
    id: '#schedule-time'
  },
]

newFieldsData.forEach(({ formSelector, positionRef, innerHTML, storageKey, id }) => {
  runAppendHourFieldBanner(formSelector, positionRef, innerHTML, storageKey, id)
})
