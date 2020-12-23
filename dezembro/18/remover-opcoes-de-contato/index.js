(() => {
  const contactOptions = document.querySelector('fieldset .form-check').parentNode
  if(window.location.href.includes('empresa/contato'))
    contactOptions.style.setProperty('display', 'none')
})()