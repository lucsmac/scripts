const changeIndexOrdenation = () => {
  const moveSection = (elToMove, elRef) => {
    const el = (typeof elToMove) === 'string' ? document.querySelector(elToMove) : elToMove
    const ref = (typeof elRef) === 'string' ? document.querySelector(elRef) : elRef

    ref.parentNode.insertBefore(el, ref)
  }

  // carrossel de veiculos novos pra antes de consórcio

  const specialOffersSection = document.querySelector('.section-component.vehicles-new.carousel-vehicles-new')
  const consortia = document.querySelector('.section-component.carousel-consortia')
  
  moveSection(specialOffersSection, consortia)

  // vendas diretas para antes de seminovos

  const directSales = document.querySelector('.section-component.carousel-direct-sales')
  const usedModels = document.querySelector('.section-component.used-models')

  moveSection(directSales, usedModels)
}

changeIndexOrdenation()