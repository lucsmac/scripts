(() => {
  document.addEventListener("DOMContentLoaded", function(event) {
    if(window.location.href.includes('oferta-servico')) {
      const ctaLink = document.querySelector('.showcase-service__whatsapp-box').getAttribute('data-link')
      const ctaWpp = document.querySelector('#modal-whatsapp-button')

      const wppBtn = document.createElement('a')
      wppBtn.classList.add('btn', 'button', 'button--large', 'button--whatsapp')
      wppBtn.innerHTML = ctaWpp.innerHTML
      wppBtn.setAttribute('href', ctaLink)
      wppBtn.setAttribute('target', '_blank')

      ctaWpp.parentElement.insertBefore(wppBtn, ctaWpp)
      ctaWpp.parentElement.removeChild(ctaWpp)
    }
  })
})()