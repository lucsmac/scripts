(() => {
  const wppWrapper = document.querySelector('#header-card-whatsapp')
  const title = wppWrapper.querySelector('.card-collapse__header')
  title.style.setProperty('display', 'none')

  const wppNumbers = wppWrapper.querySelector('#wpp-content-0')
  wppNumbers.classList.add('show')

  const titleMobile = document.querySelector('#header-card-whatsapp-mobile .card-collapse__header')
  titleMobile.style.setProperty('display', 'none')

  const wppMobile = document.querySelector('#wpp-content-mobile-0')
  wppMobile.classList.add('show')
})()
