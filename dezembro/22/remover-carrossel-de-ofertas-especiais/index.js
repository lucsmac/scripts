(() => {
  const carouselSpecialOffers = document.querySelector('.carousel-used-models-featured2')
  carouselSpecialOffers.parentNode.removeChild(carouselSpecialOffers)

  const menuLink = document.querySelector('a[href="/ofertas-especiais"]').parentNode
  menuLink.parentNode.removeChild(menuLink)
})()