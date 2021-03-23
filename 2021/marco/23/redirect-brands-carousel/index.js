(() => {
  const changeBrandUrl = (brands) => {
    brands.forEach(({ target, url }) => {
      const brandsItems = document.querySelectorAll('header .mini-brands-carousel li a')
      
      const currBrand = Array.prototype.find.call(brandsItems, item => 
        item.getAttribute('alt').toLowerCase().includes(target.toLowerCase())
      )

      currBrand.setAttribute('href', url)
    })
  }

  // adicione um item pra cada marca que você quer alterar
  // o 'target' é o identificador, verifique na logo qual nome está definido no atributo 'alt', e cole aqui
  // o 'url', é o link para onde você quer que seja redirecionado
  changeBrandUrl([
    {
      target: 'hyundai',
      url: 'https://hyundai.smaff.com.br/',
    },
    {
      target: 'volkswagen',
      url: 'https://vw.smaff.com.br/',
    },
    {
      target: 'ford',
      url: 'https://ford.smaff.com.br/',
    },
  ])
})()