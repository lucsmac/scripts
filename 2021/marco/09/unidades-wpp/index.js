(() => {
  const wppWrapper = document.querySelector('#header-card-whatsapp')
  const wppItems = wppWrapper.childNodes

  Array.prototype.forEach.call(wppItems, (wppItem) => {
    const title = wppItem.querySelector('.card-collapse__header')
    title.style.setProperty('display', 'none')

    const wppNumbers = wppItem.querySelector('.card-collapse__content')
    wppNumbers.classList.add('show')
  })
})()