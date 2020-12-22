(() => {
  const dealer = #codecheat%dealer
  const slug = dealer.replace(/ /g, '-').toLowerCase()
  
  const logoDesktop = document.querySelector('.header-desktop .header__logo')
  logoDesktop.setAttribute('src', `https://legado.autoforce.com.br/assets/images/nissan-logos/desktop/${slug}.png`)
  logoDesktop.style.setProperty('max-height', '58px')
  
  const logoMobile = document.querySelector('.header-mobile .header__logo')
  logoMobile.setAttribute('src', `https://legado.autoforce.com.br/assets/images/nissan-logos/mobile/${slug}.png`)
})()