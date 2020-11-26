const changeSectionsTitles = () => {
// - Alterar texto da index de "Confira Ofertas Especiais da Guiauto Chevrolet" para "Ofertas Exclusivas Grupo Guiauto & CVG".

  const specialOffersTitle = document.querySelector('.section-component__title.carousel-offers-vehicles-new__title')
  specialOffersTitle.innerHTML = `
  <i class="icon icon--section icon-offer"></i> Ofertas Exclusivas <span>&nbsp;Guiauto Chevrolet & CVG</span></h2>
  `

// - Alterar texto da index de "Consórcio" para "Consórcio Nacional Chevrolet".

  const consortiaTitle = document.querySelector('.carousel-consortia .section-component__title')
  consortiaTitle.innerHTML = ` Consórcio <span>Nacional Chevrolet</span>`
}

changeSectionsTitles()