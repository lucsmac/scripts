(() => {
  const form = document.querySelector('#consortium .form-toggle.active.bait')
  const monthDisplay = document.querySelector('#info-values')

  if(form) {
    const title = form.querySelector('.form-content p.info-form')
    title.innerHTML = 'SOLICITAR CONTATO'
  }

  if(monthDisplay) {
    const monthValue = monthDisplay.querySelector('label')
    monthValue.innerHTML = 'Consulte nossos planos de'
  }
})()