(() => {
  const changeMobileBanner = () => {
    const banner = document.querySelector('#owl-showcase .owl-item .item')
    if(window.matchMedia("(max-width: 768px)").matches) {
      banner.style.setProperty('background-image', 'url(https://legado.autoforce.com.br/genius/images/banner-fipal-lp.jpeg)')
    } else {
      banner.style.setProperty('background-image', 'url(https://production.autoforce.com/bns/service_bns/000/014/692/fill_2880_707/Fipal-Fiat-HoraDeCuidarSeuFiat-LP-Banner-Desktop.png?1605814165)')
    }
  }
  
  document.addEventListener('readystatechange', event => { 

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
      if(window.location.href.includes('ofertas-fipal-fiat/servicos')) {
        changeMobileBanner()
        window.addEventListener('resize', changeMobileBanner)
      }
    }
  })
})()