(() => {
  const logos = document.querySelectorAll('.header__logo')
  Array.prototype.forEach.call(logos, (logo) => {
    logo.style.setProperty('display', 'none')
  })
})()