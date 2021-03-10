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
    .brands, #showcase header .showcase .btn-dropdown-list {
      display: none;
    }

    .grecaptcha-badge {
      display: none !important;
    }
    
    #showcase .nav-wrapper-dinamic > .row {
      max-width: 1170px;
    }

    .nav-wrapper-dinamic {
      margin-top: 34px;
    }

    #showcase {
      display: flex;
      flex-direction: column;
      z-index: auto !important;
    }

    #showcase #main-menu li:nth-child(1), #showcase #main-menu li:nth-child(2) {
      display: none;
    }

    #showcase header .showcase-slides .showcase-carousel {
      display: none;
    }

    #showcase header {
      background: transparent;
    }

    #showcase .nav-wrapper-dinamic > .row {
      display: flex;
      justify-content: space-between;
    }

    #showcase .nav-wrapper-dinamic > .row::before, #showcase .nav-wrapper-dinamic > .row::after, #showcase .nav-wrapper-dinamic > .row .navbar-header {
      display: none;
    }

    #showcase .nav-wrapper-dinamic > .row .wrapper-right {
      display: flex;
      align-items: center;
    }

    #showcase .nav-wrapper-dinamic > .row #main-menu {
      float-right: none;
    }

    #showcase .nav-wrapper-dinamic > .row #main-menu a {
      color: #FFF;
    }

    #showcase .nav-wrapper-dinamic > .row #main-menu a:hover {
      color: #EDB713;
    }
  `

  const showcase = document.querySelector('#showcase')

  // ajustar nav

  const nav = document.querySelector('.nav-wrapper-dinamic')
  const phone = nav.querySelector('.wrapper-right')
  const logo = nav.querySelector('.pad-sm-without')
  const menu = document.querySelector('#main-menu')

  phone.insertBefore(menu,phone.firstChild)
  phone.classList.remove('col-xs-3', 'col-sm-6')
  logo.classList.remove('col-xs-7', 'col-sm-6')
  
  const navItems = document.querySelectorAll('#showcase #main-menu .navbar-nav li')
  Array.prototype.forEach.call(navItems, item => {
    ['menu', 'endereços'].includes(item.innerText.toLowerCase()) && item.parentNode.removeChild(item) 
  })
})()