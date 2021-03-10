(() => {
  const logo = document.querySelector('.header__logo-container .header__logo-container-image')
  logo.setAttribute('src', 'https://production.autoforce.com/uploads/site/logo/1387/logo_comprar-osten-motorrad_08eb95bf10.png')
  logo.style.setProperty('width', '130px')
  logo.style.setProperty('height', 'auto')

  const logoMobile = document.querySelector('.header-mobile__logo .header__logo')
  logoMobile.setAttribute('src', 'https://production.autoforce.com/uploads/site/logo/1387/logo_comprar-osten-motorrad_08eb95bf10.png')
  logoMobile.style.setProperty('width', '80px')
  logoMobile.style.setProperty('height', 'auto')
})()