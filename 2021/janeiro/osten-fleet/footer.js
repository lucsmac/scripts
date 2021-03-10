(() => {
  const addStyle = (styles) => {
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

  addStyle`
    #footer {
      background: #FFF;
      box-shadow: 0 -2px 6px rgb(0, 0, 0, 0.05);
      position: relative;
      z-index: 1;
    }

    #footer .row {
      max-width: 1170px;
    }

    #footer .brand-client a {
      background-image: url("https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/osten-logo-black.png") !important;
      margin: 0;
      max-width: 150px;
      height: auto;
    }
    
    #footer .container-fluid {
      background-color: #FFFFFF;
      padding: 40px 0 10px 0;
    }

    #footer .footer-wrapper-dinamic .wrapper-right a img {
      max-width: 150px;
    }

    #copyright {
      border-top: 1px solid #000;
    }

    #copyright .developer-brand a {
      background-image: url("https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/autoforce.svg") !important;
    }

    #copyright p {
      color: #000;
    }

    #footer #main-menu {
      display: flex !important;
      justify-content: space-between;
    }

    #footer .navbar-nav {
      display: flex;
      flex-direction: column;
      padding: 1rem 0;
      float: none;
    }

    #footer .container-fluid .footer-wrapper-dinamic .footer-wrapper-menu .navbar-nav>li {
      padding: .5rem 15px;
      margin: 0;
      color: #000;
      font-size: .9rem;
      font-weight: 300;
      display: flex;
      align-items: center;
    }
    
    #footer .container-fluid .footer-wrapper-dinamic .footer-wrapper-menu .navbar-nav>li a {
      padding: 0;
      color: #000;
      font-weight: 300;
      font-weight: 300;
      margin: 0;
    }
    
    #footer .container-fluid .footer-wrapper-dinamic .footer-wrapper-menu .navbar-nav>li span {
      width: auto;
      margin-right: 5px;
    }

    #footer #main-menu .main-menu__social-media {
      display: flex;
      align-items: flex-end;
      padding: 1rem 0;
    }

    #footer #main-menu .main-menu__social-media ul {
      list-style: none;
      display: flex;
    }

    #footer #main-menu .main-menu__social-media ul li {
      padding: 0 .5rem;
      color: #000;
    }

    #footer #main-menu .main-menu__social-media ul li a {
      color: #000;
      font-size: 1.25rem;
    }

    .navbar-collapse:before, .navbar-collapse:after {
      display: none;
    }
  `

  const socialMedia = document.querySelector('#footer .social-midia').parentNode
  socialMedia.innerHTML = '<a href="#"><img src="//legado.autoforce.com.br/mods/osten/logo-marca.png" /></a>'

  const adressTarget = document.querySelector('#footer .container-fluid .footer-wrapper-dinamic .footer-wrapper-menu .navbar-nav')
  adressTarget.innerHTML = `
  <li><span class="fa fa-map-marker icon"></span>Rua Serra de Japi, 1.345 - Anália Franco</li>
  <li><span class="fa fa-phone icon"></span><a href="tel:551120764411">+55 (11) 2076-4411</a></li>
  <li><span class="fa fa-envelope icon"></span>contato@ostengroup.com</li>
  `

  const newSocialMedia = document.createElement('div')
  newSocialMedia.classList.add('main-menu__social-media')
  newSocialMedia.innerHTML = `
  <ul>
    <li><a href="#" targe="_blank"><span class="fa fa-youtube icon"></span></a></li>
    <li><a href="#" targe="_blank"><span class="fa fa-facebook icon"></span></a></li>
    <li><a href="#" targe="_blank"><span class="fa fa-instagram icon"></span></a></li>
  </ul>
  `

  const footerMainMenu = document.querySelector('#footer #main-menu')
  footerMainMenu.appendChild(newSocialMedia)
})()