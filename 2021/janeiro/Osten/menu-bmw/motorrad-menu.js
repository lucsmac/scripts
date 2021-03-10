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
        #top-logo-fixed {
          top: 0;
        }

        header.header {
          border-bottom: none;
          background: transparent;
        }

        header.header .container {
          display: none;
        }

        header.header.scrolled {
          background: #FFF;
        }

        #top-logo-fixed, .header .container {
          position: fixed;
          z-index: 99999;
        }

        .page--home .nav-simple {
          background: transparent;
        }

        .nav-simple + * {
          margin-top: 120px;
        }

        .page--home .nav-simple + * {
          margin-top: 96px;
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

        section.nav-simple.scrolled .header__logo-container-phrase, section.nav-simple .header__logo-container-phrase {
          display: none;
        }
        
        .page--home section.nav-simple .header__logo-container-phrase {
          font-size: 16px;
          top: 100px;
          background-color: transparent;
          border: none;
          font-family: sans-serif;
          font-weight: 300;
          display: flex;
          justify-content: flex-end;
          padding-right: 129px;
          width: 100%;
          max-width: 1050px;
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
          display: flex.
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

        .nav-item__contact-icons-nav {
          display: flex;
          align-items: center;
          flex: 1;
          justify-content: flex-end;
        }

        .header__logo-container {
          height: 100% !important;
          display: flex;
          align-items: center;
        }
      }

      @media screen and (max-width: 768px) {
        header.header {
          background: transparent;
          box-shadow: none;
          border-bottom: none;
        }

        #top-logo-fixed {
          position: fixed;
          top: 0;
          z-index: 9999999;
        }

        .header.scrolled {
          position: fixed;
          top: 40px;
          width: 100%;
        }
        
        .header-mobile__row .header-mobile__buttons {
          display: none;
        }

        .header-mobile__row {
          justify-content: space-between;
          align-items: center;
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

        .header-mobile__logo {
          display: flex;
          justify-content: flex-end;
        }

        .header-mobile__logo img {
          height: 36px;
        }

        .header .navbar-toggler {
          height: 36px;
        }

        .nav-simple + section {
          margin-top: 96px;
        }

        .navbar-toggler-hamburger .navbar-icon-line {
          background: #FFF;
        }

        header.header.scrolled .navbar-toggler-hamburger .navbar-icon-line {
          background: #000;
        }

        .header .header__logo-container-image,
        .page--home .header.scrolled .header__logo-container-image {
          display: block;
        }

        section.nav-simple .nav-item__contact-icons-nav {
          display: none;
        }

        .nav-simple.nav-simple--active {
          top: 96px;
        }

        .header__logo-container {
          display: none;
        }
      }
    `
  })

  const header = document.querySelector('header.header')
  header.classList.add('scrolled')
  const nav = document.querySelector('section.nav-simple')
  nav.classList.add('scrolled')

  const logoBMW = document.createElement('div')
  logoBMW.classList.add('header__logo-container')
  logoBMW.innerHTML = '<img class="header__logo-container-image" src="https://legado.autoforce.com.br/static/images/bmw/BMW-Logo.svg">'

  const logoBMWtarget = nav.querySelector('.container .row').parentNode
  logoBMWtarget.appendChild(logoBMW)

  const mobileLogo = document.querySelector('.header-mobile__logo img')
  mobileLogo.setAttribute('src', 'https://legado.autoforce.com.br/static/images/bmw/BMW-Logo.svg')

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

  // navMenu.appendChild(navTel)

  const wpp = document.querySelector('.header__phones-container .button--whatsapp').parentNode
  const navWpp = document.createElement('li')
  const phoneWpp = wpp.querySelector('button')

  phoneWpp.classList.remove('btn', 'button', 'button--whatsapp', 'header__phones-button-toggler')
  phoneWpp.classList.add('button-icon', 'button-icon--whatsapp', 'header__phones-button-toggler-mobile')
  phoneWpp.innerHTML = '<i class="icon icon-whatsapp"></i>'

  navWpp.classList.add('nav-item', 'nav-simple__item', 'nav-item__custom')
  wpp.appendChild(phoneWpp)

  const contactIcons = document.createElement('li')
  contactIcons.classList.add('nav-item__contact-icons-nav')
  contactIcons.appendChild(navTel)
  contactIcons.appendChild(wpp)

  navMenu.appendChild(contactIcons)
})()