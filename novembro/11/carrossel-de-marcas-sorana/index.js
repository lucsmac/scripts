(() => {
  const logosAudi = document.querySelectorAll('img[src="https://production.autoforce.com/uploads/brand/logo_regular/8/logo_brand_thumb_comprar-audi_a7668fb8a2.png"]')

  Array.prototype.forEach.call(logosAudi, (logo) => {
    logo.parentNode.setAttribute('href', 'http://soranaaudi.com.br/')
  })

  const logosVolks = document.querySelectorAll('img[src="https://production.autoforce.com/uploads/brand/logo_regular/15/logo_brand_thumb_comprar-volkswagen_a830acd3b7.png"]')

  Array.prototype.forEach.call(logosVolks, (logo) => {
    logo.parentNode.setAttribute('href', 'http://soranavw.com.br/')
  })
})()