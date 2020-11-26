
const runAddUnits = () => {
  const isThisPage = ({ urlPiece }) => {
    const fullURL = window.location.href
    const result = fullURL.includes(urlPiece)
  
    return result
  }
  
  const addUnits = () => {
    const vehicles = [
      {
        slug: 's60-2-0-t4-kinetic-1105',
        units: ['bmw-tatuape']
      },
      {
        slug: 'impreza-2-5-wrx-sti-sedan-4x4-16v-turbo-intercooler-1108',
        units: ['bmw-itapura']
      },
      {
        slug: 'e-250-2-0-cgi-exclusive-1105',
        units: ['bmw-tatuape', 'bmw-itapura']
      },
    ]
  
    const dataUnits = [
      {
        slug: 'bmw-itapura',
        name: 'BMW ITAPURA',
        adress: 'Rua Itapura, 1078 - Anália Franco - São Paulo-SP',
        tel: '',
        formatedTel: ''
      },
      {
        slug: 'bmw-tatuape',
        name: 'BMW Tatuapé',
        adress: 'Av. Airton Pretini, 10 - Penha - São Paulo-SP',
        tel: '',
        formatedTel: ''
      }
    ]
  
    const unitHTML = (unit) => {
      return `
        <div class="cta-box__title text-uppercase">${unit.name}</div>
        <div class="used-vehicles-showcase__cta-box-phrase cta-box__phrase text-center justify-content-center">${unit.adress}</div>
        <div class="cta-box__info--primary"><a href="tel:${unit.tel}">${unit.formatedTel}</a></div>
      `
    }
  
    const generateUnitsCode = (units) => {
      const unitsCode = document.createElement('div')
  
      units.forEach(unit => {
        const unitWrapper = document.createElement('div')
        unitWrapper.classList.add(...'used-vehicles-showcase__ctx-box-phone cta-box cta-box--vertical text-center'.split(' '))
        unitWrapper.innerHTML = unitHTML(dataUnits.find(currUnit => currUnit.slug === unit))
  
        unitsCode.appendChild(unitWrapper)
      })
  
      return unitsCode
    }
  
    const generateUnits = (vehicles) => {
      vehicles.forEach(vehicle => {
        if(window.location.href.includes(vehicle.slug)) {
          
          const unitsCode = generateUnitsCode(vehicle.units)
  
          const oldElement = document.querySelector('.used-vehicles-showcase__ctx-box-phone')
          const position = oldElement.parentNode
          position.removeChild(oldElement)
          position.appendChild(unitsCode)
        }
      })
    }
  
    generateUnits(vehicles)
  }

  if(isThisPage({ urlPiece: 'seminovos/' }))
    addUnits()
}

runAddUnits()
