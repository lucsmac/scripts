const isThisPage = ({ urlPiece }) => {
  const fullURL = window.location.href
  const result = fullURL.includes(urlPiece)

  return result
}

const addSecondUnit = () => {
  const unitProperties = {
    name: 'São Bernardo',
    adress: 'Avenida Dr. Rudge Ramos, 837 - Rudge Ramos - São Bernardo-SP',
    tel: 1141228222,
    formatedTel: '(11) 4122-8222'
  }
  const unitHTML = `
  <div class="cta-box__title text-uppercase">${unitProperties.name}</div>
  <div class="used-vehicles-showcase__cta-box-phrase cta-box__phrase text-center justify-content-center">${unitProperties.adress}</div>
  <div class="cta-box__info--primary"><a href="tel:${unitProperties.tel}">${unitProperties.formatedTel}</a></div>
`

  const unitWrapper = document.createElement('div')
  unitWrapper.classList.add(...'used-vehicles-showcase__ctx-box-phone cta-box cta-box--vertical text-center'.split(' '))

  unitWrapper.innerHTML = unitHTML

  const position = document.querySelector('.used-vehicles-showcase__ctx-box-phone')
  position.parentNode.appendChild(unitWrapper)
}

if(isThisPage({ urlPiece: 'seminovos/' }))
  addSecondUnit()