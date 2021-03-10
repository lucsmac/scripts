(() => {
  const wppWrapper = document.querySelector('#header-card-whatsapp')
  const title = wppWrapper.querySelector('.card-collapse__header')
  title.style.setProperty('display', 'none')

  const wppNumbers = wppWrapper.querySelector('#wpp-content-0')
  wppNumbers.classList.add('show')

  const wppn = document.querySelector('#wpp-content-0 .header__card-whatsapp-item a[data-name="Novos"]')
  wppn.parentNode.innerHTML = wppn.parentNode.innerHTML
})()

(() => {
  const wppn = document.querySelector('#wpp-content-0 .header__card-whatsapp-item a[data-name="Novos"]')
  const link = wppn.getAttribute('data-link')
  wppn.setAttribute('href', link)
  wppn.setAttribute('target', '_blank')
  wppn.parentNode.innerHTML = wppn.parentNode.innerHTML
})()
