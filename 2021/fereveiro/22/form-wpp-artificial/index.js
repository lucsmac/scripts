(() => {
  document.addEventListener("DOMContentLoaded", function(event) {
    if(window.location.href.includes('atendimento-wpp')) {
      // esconder menu
      const menu = document.querySelector('.nav-simple.nav-simple--accordion-mobile')
      const breadcrumb = document.querySelector('.content-simple > .container')
      menu.style.setProperty('display', 'none')
      breadcrumb.style.setProperty('display', 'none')

      // ocultar campo mensagem 
      const inputGroups = document.querySelector('.form-conversion__body').childNodes
      const messageField = Array.prototype.find.call(inputGroups, inputGroup => {
        const hasTextarea = inputGroup.querySelector('textarea')
        return hasTextarea
      })
      messageField.style.setProperty('display', 'none')
      messageField.querySelector('textarea').removeAttribute('required')

      // mudar botão do wpp
      const btn = document.querySelector('.button--submit')
      btn.innerText = 'Iniciar atendimento'

      btn.addEventListener('click', () => {
        window.open('http://www.google.com.br');
      })
    }
  })
})()