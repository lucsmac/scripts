(() => {
  const carousel = document.querySelector('.section-component.services.carousel-services')
  const list = document.querySelector('.list-services')
  if(carousel) {
    const imgsLink = carousel.querySelectorAll('.card__header a')
    Array.prototype.forEach.call(imgsLink, (imgs) => {
      imgs.setAttribute('href', 'https://guiauto.com.br/empresa/agendamento-de-oficina')
    })
  } else if(list) {
    const imgsLink = list.querySelectorAll('.card__header a')
    Array.prototype.forEach.call(imgsLink, (imgs) => {
      imgs.setAttribute('href', 'https://guiauto.com.br/empresa/agendamento-de-oficina')
    })
  }
})()