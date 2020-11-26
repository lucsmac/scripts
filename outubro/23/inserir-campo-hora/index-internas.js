(() => {
  // Limpar campo quando abrir o site novamente
  sessionStorage.setItem('schedule-time', '')

  // método para adicionar o campo no formulário de conversão das internas
  const appendMarkedHourField = (formServices) => {
  
    const simulateReactiveState = (field) => {
      const value = sessionStorage.getItem('schedule-time') || '';
      field.value = value
  
      field.onchange = () => {
        sessionStorage.setItem('schedule-time', field.value)
      }
    }

    // constrói o html do elemento
    const markedHourField = document.createElement('div')
    markedHourField.classList.add('form-group')
    
    const markedHourFieldInnerHTML = `
    <label class="form-label schedule-time">Horário de preferência:</label>
    <input type="time" class="form-control input-time" name="time" placeholder="Horário de preferência" id="schedule-time" required="" aria-required="true" min="08:00:00" max="18:00:00">
    </div>
    `
    markedHourField.innerHTML = markedHourFieldInnerHTML
    
    // busca o campo data como referência e adiciona o campo horario
    const dataField = document.querySelector('#invalid-data').parentNode
    dataField.parentNode.insertBefore(markedHourField, dataField.nextSibling)
    
    const inputHourField = document.querySelector('#schedule-time')
    simulateReactiveState(inputHourField)
  }
  
  const formServices = document.querySelector('#schedule-service-conversion-form')

  // impede duplicações do campo
  const runHourfield = (formServices) => {
    const hourField = formServices.querySelector('#schedule-time')
    if(!hourField)
      appendMarkedHourField(formServices)
  }
  
  runHourfield(formServices)

  window.scheduleServiceConversionFormUpdate = () => {
    runHourfield(formServices)
  }

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
        color: #ffffff;
        font-weight: 700;
        font-size: 14px;
        font-size: 0.875rem
      }
    ` 
  })
})()