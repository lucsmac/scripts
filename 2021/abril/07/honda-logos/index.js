(() => {
  const vehicleData = [
    {
      name: 'Fit',
      logoBlack: '//www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-fit.png',
      logoWhite: 'https://legado.autoforce.com.br/genius/honda-logos/FIT.png'
    },
    {
      name: 'WR-V',
      logoBlack: '//www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-wr-v.png',
      logoWhite: 'https://legado.autoforce.com.br/genius/honda-logos/WRV.png'
    },
    {
      name: 'CR-V',
      logoBlack: '//www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-cr-v.png',
      logoWhite: 'https://legado.autoforce.com.br/genius/honda-logos/CRV.png'
    },
    {
      name: 'HR-V',
      logoBlack: '//www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-hr-v.png',
      logoWhite: 'https://legado.autoforce.com.br/genius/honda-logos/HRV.png'
    },
    {
      name: 'Civic',
      logoBlack: '//www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-civic.png',
      logoWhite: 'https://legado.autoforce.com.br/genius/honda-logos/CIVIC.png'
    },
    {
      name: 'City',
      logoBlack: '//www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-city.png',
      logoWhite: 'https://legado.autoforce.com.br/genius/honda-logos/CITY.png'
    },
    {
      name: 'Accord',
      logoBlack: 'https://legado.autoforce.com.br/genius/honda-logos/ACCORD-BLACK.png',
      logoWhite: 'https://legado.autoforce.com.br/genius/honda-logos/ACCORD.png'
    },
    {
      name: 'civic si',
      logoBlack: '//www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-civic-si.png',
      logoWhite: 'https://legado.autoforce.com.br/genius/honda-logos/CIVIC-SI.png'
    }
  ]

  const getVehiclesNamesCarouselHome = () => {
    const carousel = document.querySelector('.page--home .carousel-vehicles-new')
    const titles = Array.from(carousel.querySelectorAll('.card__content .card__title'))
    const items = titles.map(title => { 
      return { 
        element: title,
        text: title.innerText.replace(/[0-9]/g, '').trim()
      }}
    )

    return items
  }

  const carouselTitles = getVehiclesNamesCarouselHome()
  
  const replaceTextWithImage = (items) => {
    items.forEach(item => {
      const vehicle = vehicleData.find(vehicle => vehicle.name.toLowerCase() === item.text.toLowerCase())

      item.element.innerHTML = `<img style="max-height: 10px;" src="${vehicle.logoBlack}" alt="${item.text}"/>`
    })
  }

  replaceTextWithImage(carouselTitles)
})()