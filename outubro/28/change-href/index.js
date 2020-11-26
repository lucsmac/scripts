(() => {
  const servicesWrapper = document.querySelector('.section-component.services.carousel-services .services__carousel ')
  if(servicesWrapper) {
    const btns = servicesWrapper.querySelectorAll('.card__footer a')

    Array.prototype.forEach.call(btns, (btn) => {
      btn.setAttribute('href', 'https://guiauto.autoforce.com.br/guiauto-chevrolet/empresa/agendamento-de-oficina')
    })
  }
})()