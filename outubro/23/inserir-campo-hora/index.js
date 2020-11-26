(() => {
  window.scheduleServiceFormUpdate = () => {
    const appendMarkedHourField = (modalServices) => {
  
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
      <label class="form-label">Horário de preferência:</label>
      <input type="time" class="form-control input-time" name="time" placeholder="Horário de preferência" id="schedule-time" required="" aria-required="true" min="08:00:00" max="18:00:00">
      </div>
      `
      markedHourField.innerHTML = markedHourFieldInnerHTML
      
      // busca o campo data como referência e adiciona o campo horario
      const dataField = document.querySelector('#data').parentNode
      dataField.parentNode.insertBefore(markedHourField, dataField.nextSibling)
      
      const inputHourField = document.querySelector('#schedule-time')
      simulateReactiveState(inputHourField)
    }
    
    const modalServices = document.querySelector('#modal-services')
    const btnOpenModal = document.querySelector('.showcase-services__content .btn.button.showcase-services__panel-btn-schedule')
  
    // impede duplicações do campo
    const runHourfield = (modalServices) => {
      if(!modalServices) return null
      const hourField = modalServices.querySelector('#schedule-time')
      if(!hourField)
        appendMarkedHourField(modalServices)
    }
    
    btnOpenModal.addEventListener('click', () => {
      runHourfield(modalServices)
    })
    runHourfield(modalServices)

    
    window.scheduleServiceFormScriptedData = () => {
      return serialize(modalServices)
    }

    // Remover eventos ao clicar em enviar formulário
    const sendBtn = form.querySelector('footer .submit-button')

    sendBtn.addEventListener('click', () => {
      window.scheduleServiceFormUpdate = () => {}
      window.scheduleServiceFormScriptedData = () => {
        return {}
      }
    })
  }

  // Limpar campo quando clicar em Limpar Filtro
  window.scheduleServiceFormClear = () => { sessionStorage.setItem('schedule-time', '') }
  
  // Limpar campo quando abrir o site novamente
  sessionStorage.setItem('schedule-time', '')
})()