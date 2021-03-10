(() => {
  const addStyle = ({ styles }) => {
    const css = styles,
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');
    head.appendChild(style);
    style.setAttribute('type', 'text/css');
    if (style.styleSheet){
      // This is required for IE8 and below.
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  addStyle({
    styles: `
      @media screen and (min-width: 768px) {
        header.header {
          border-bottom: none;
          background: transparent;
        }

        header.header.scrolled {
          background: #FFF;
        }

        #top-logo-fixed, .header .container {
          position: fixed;
          z-index: 99999;
          display: none;
        }

        .page--home .nav-simple {
          background: transparent;
        }

        .nav-simple + * {
          margin-top: 100px;
        }

        .page--home .nav-simple + * {
          margin-top: 0;
        }
        
        section.nav-simple {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: fixed;
          transition: all .2s ease;
          z-index: 999999;
          top: 40px;
        }
        
        section.nav-simple.scrolled {
          background: #FFF;
          transition: all .2s ease;
        }

        section.nav-simple .header__logo-container-phrase {
          color: #000;
        }

        .page--home section.nav-simple .header__logo-container-phrase {
          background: transparent;
          color: #FFF;
        }

        .page--home section.nav-simple.scrolled .header__logo-container-phrase {
          color: #000;
        }

        section.nav-simple.scrolled .header__logo-container-phrase {
          display: none;
        }
        
        section.nav-simple .header__logo-container-phrase {
          display: block;
          font-size: 16px;
          position: absolute;
          top: 100px;
          margin-right: -50vw;
          background-color: transparent;
          border: none;
          font-family: sans-serif;
          font-weight: 300;
        }
        
        section.nav-simple .header__logo-container-phrase b {
          font-weight: bold;
        }
        
        .nav-simple.scrolled .header__logo-container-phrase {
          color: #000;
        }

        section.nav-simple .container {
          height: 100px;
          display: flex;
          justify-content: space-between;
        }

        section.nav-simple .container .row {
          width: 100%;
        }

        section.nav-simple .nav {
          border-bottom: 1px solid rgba(255, 255, 255, 0.4);
          height: 100%;
          margin-right: 20px;
        }
        
        section.nav-simple.scrolled .nav {
          border-bottom: none;
        }

        section.nav-simple li.nav-item {
          padding: 0 10px;
        }

        .page--home section.nav-simple .nav-link.nav-simple__link {
          color: #FFF;
        }
        
        section.nav-simple .nav-link.nav-simple__link {
          color: #000;
          border-bottom: 4px solid transparent;
          border-top: 4px solid transparent;
          box-sizing: border-box;
          transition: all .2s ease;
        }
        
        section.nav-simple.scrolled .nav-link.nav-simple__link {
          color: #000;
        }
        
        section.nav-simple .nav-link.nav-simple__link:hover {
          border-bottom: 4px solid #1C69D4;
        }
        
        .nav-simple .header__logo-container-image {
          border: 1px solid transparent;
          background-color: transparent;
          box-shadow: none;
          width: auto;
        }

        .nav-simple .header__logo-container-image.bmw-white,
        .page--home .nav-simple.scrolled .header__logo-container-image.bmw-white {
          display: none;
        }

        .page--home .nav-simple .header__logo-container-image.bmw-white {
          display: block;
          padding-left: 4px;
        }

        .nav-simple .header__logo-container-image,
        .page--home .nav-simple.scrolled .header__logo-container-image {
          display: block;
        }

        .page--home .nav-simple .header__logo-container-image {
          display: none;
        }

        .nav .list--border-bottom>li {
          border: none;
        }

        .nav .nav-link nav-simple__link .icon {
          display: none
        }

        .page.page--home .showcase-simple {
          padding-top: 24px;
        }

        section.nav-simple .nav-item__custom {
          display: flex;
          align-items: center;
        }

        #header-card-phones, #header-card-whatsapp {
          margin-top: 35px;
          border-radius: 0 0 4px 4px;
        }
      }

      @media screen and (max-width: 768px) {
        header.header {
          background: transparent;
          box-shadow: none;
          border-bottom: none;
        }

        header.header.scrolled {
          background: #FFF;
          box-shadow: 0 1px 4px rgba(0,0,0,0.15);
          border-bottom: none;
        }

        div.header__logo-container-phrase {
          display: none;
        }

        .header .header-mobile__buttons {
          display: none;
        }

        img.header__logo-container-image {
          box-shadow: none;
          width: auto;
          background: none;
          height: 36px;
        }

        .nav-simple img.header__logo-container-image {
          display: none;
        }

        .header .navbar-toggler {
          height: 36px;
        }

        .nav-simple + section {
          margin-top: -66px;
        }

        .navbar-toggler-hamburger .navbar-icon-line {
          background: #FFF;
        }

        header.header.scrolled .navbar-toggler-hamburger .navbar-icon-line {
          background: #000;
        }

        .header .header__logo-container-image.bmw-white,
        .page--home .header.scrolled .header__logo-container-image.bmw-white {
          display: none;
        }

        .page--home .header .header__logo-container-image.bmw-white {
          display: block;
          padding-left: 2px;
        }

        .header .header__logo-container-image,
        .page--home .header.scrolled .header__logo-container-image {
          display: block;
        }

        .page--home .header .header__logo-container-image {
          display: none;
        }

        section.nav-simple .nav-item__custom {
          display: none;
        }
      }
    `
  })
  
  const nav = document.querySelector('section.nav-simple')
  const container = nav.querySelector('.container')
  const navItemsWrapper = container.querySelector('.col-12.col-md-10')

  const headerLogo = document.querySelector('.header .header__logo-container')
  const navLogo = document.querySelector('.header .header__logo-container').cloneNode(true)
  const headerBmwLogo = headerLogo.querySelector('img')
  const headerBmwLogoWhite = headerLogo.querySelector('img').cloneNode(true)
  const navBmwLogo = navLogo.querySelector('img')
  const navBmwLogoWhite = navLogo.querySelector('img').cloneNode(true)
  const phrase = navLogo.querySelector('.header__logo-container-phrase')

  container.appendChild(navLogo)
  nav.appendChild(phrase)
  navItemsWrapper.classList.remove('col-md-10')

  phrase.innerHTML = "Puro <b>prazer</b> de dirigir"

  headerBmwLogo.setAttribute('src', 'https://legado.autoforce.com.br/static/images/bmw/BMW-Logo.svg')
  headerBmwLogoWhite.classList.add('bmw-white')
  headerBmwLogoWhite.setAttribute('src', 'https://legado.autoforce.com.br/static/images/bmw/BMW-Logo-White.svg')
  headerBmwLogo.parentNode.insertBefore(headerBmwLogoWhite, headerBmwLogo.nextSibling)

  navBmwLogo.setAttribute('src', 'https://legado.autoforce.com.br/static/images/bmw/BMW-Logo.svg')
  navBmwLogoWhite.classList.add('bmw-white')
  navBmwLogoWhite.setAttribute('src', 'https://legado.autoforce.com.br/static/images/bmw/BMW-logo-white-default-53px.svg')
  navBmwLogo.parentNode.insertBefore(navBmwLogoWhite, navBmwLogo.nextSibling)

  document.addEventListener('scroll', (function () {
    const navbar = document.querySelector('section.nav-simple')
    const header = document.querySelector('header.header')
    if(window.pageYOffset >= navbar.clientHeight) 
      navbar.classList.add('scrolled');
    else
      navbar.classList.remove('scrolled');
    if(window.pageYOffset >= header.clientHeight)
      header.classList.add('scrolled');
    else
      header.classList.remove('scrolled');
  }))

  const navbarToggler = document.querySelector('.navbar-toggler-hamburger')

  navbarToggler.addEventListener('click', () => {
    const header = document.querySelector('header.header')
    if (navbarToggler.classList.contains('navbar-icon--active') || (window.pageYOffset >= header.clientHeight)) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  })

  // ocultando logo bmw motorrad
  const logoMotorrad = document.querySelector('.nav-item.bmw-motorrad')
  logoMotorrad.parentNode.removeChild(logoMotorrad)

  // telefone no nav
  const phone = document.querySelector('.header__phones-container')
  const phoneBtn = phone.querySelector('button')
  const navMenu = document.querySelector('.nav.nav--accordion-mobile')
  
  phoneBtn.classList.remove('btn', 'button', 'button--primary', 'header__phones-button-toggler')
  phoneBtn.classList.add('button-icon', 'header__phones-button-toggler-mobile')
  phoneBtn.innerHTML = '<i class="icon icon-phone"></i>'

  const navTel = document.createElement('li')
  navTel.classList.add('nav-item', 'nav-simple__item', 'nav-item__custom')
  navTel.appendChild(phone)

  navMenu.appendChild(navTel)

  const wpp = document.querySelector('.header__phones-container .button--whatsapp').parentNode
  const navWpp = document.createElement('li')
  const phoneWpp = wpp.querySelector('button')

  phoneWpp.classList.remove('btn', 'button', 'button--whatsapp', 'header__phones-button-toggler')
  phoneWpp.classList.add('button-icon', 'button-icon--whatsapp', 'header__phones-button-toggler-mobile')
  phoneWpp.innerHTML = '<i class="icon icon-whatsapp"></i>'

  navWpp.classList.add('nav-item', 'nav-simple__item', 'nav-item__custom')
  wpp.appendChild(phoneWpp)
  navWpp.appendChild(wpp)

  navMenu.appendChild(navWpp)
})()