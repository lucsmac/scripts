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
  @media screen and (max-width: 768px) {
    body {
      width: auto;
    }
    
    #showcase .brand-client {
      max-width: 150px
    }

    #showcase .nav-wrapper-dinamic > .row .navbar-header {
      display: block;
    }

    #showcase .nav-wrapper-dinamic > .row .navbar-header .navbar-toggle {
      margin: 8px 15px 0 0;
    }

    #footer .container-fluid [class^=brand] {
      margin-bottom: 10px;
    }

    #footer #main-menu {
      padding: 0 1rem;
    }

    .footer-wrapper-dinamic .wrapper-right {
      display: flex;
      justify-content: center;
    }

    #showcase ul.nav.navbar-nav.menu-geral {
      position: absolute;
      top: 40px;
      right: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-end
    }

    #showcase .nav-wrapper-dinamic > .row #main-menu {
      height: auto !important;
    }

    #showcase header .nav-wrapper-dinamic .navbar-header .navbar-toggle span {
      transition: all .2s ease;
    }

    #showcase header .nav-wrapper-dinamic .navbar-header .navbar-toggle[aria-expanded="true"] span {
      transform: rotate(90deg);
    }

    .navbar-nav {
      margin: 0;
    }

    #footer .container-fluid .footer-wrapper-dinamic .footer-wrapper-menu .navbar-nav > li,
    #footer .container-fluid .footer-wrapper-dinamic .footer-wrapper-menu .navbar-nav > li a {
      font-weight: bold;
    }

    #footer #main-menu .main-menu__social-media {
      justify-content: center;
      padding: 0;
    }

    #footer #main-menu .main-menu__social-media ul {
      padding: 0;
    }

    .footer-wrapper-dinamic > .row {
      display: flex;
      align-items: center;
    }

    #footer .container-fluid [class^=brand] {
      margin-bottom: 0;
    }
  }`
})()