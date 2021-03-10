(() => {
  const isAssignPage = window.location.href.endsWith('/assinatura') || window.location.href.endsWith('/assinatura/')
  const isContactPage = window.location.href.endsWith('/contato') || window.location.href.endsWith('/contato/')

  if (isAssignPage || isContactPage) {
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
    #top-logo-fixed {
      box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
    }

    #showcase .nav-wrapper-dinamic > .row {
      max-width: 1170px;
    }

    #showcase .nav-wrapper-dinamic > .row .pad-sm-without {
      filter: invert(1);
    }

    #showcase .nav-wrapper-dinamic > .row #main-menu a {
      color: #000;
    }

    #showcase .nav-wrapper-dinamic > .row #main-menu a:hover {
      color: #EDB713;
    }

    body {
      background-color: #FFF;
    }
  
    #showcase .container-fluid {
      max-width: none;
      height: auto;
    }

    #showcase header .showcase {
      height: auto;
    }
  
    #showcase header .showcase .showcase-grid {
      height: auto;
      background: transparent;
    }

    #showcase .pageview-crumb, .pageview-background {
      display: none;
    }

    #showcase header .showcase .btn-dropdown-list .btn, #showcase header .showcase .btn-dropdown-list .btn:hover {
      color: #000;
      border: 2px solid #000;
      background: transparent;
    }

    @media screen and (max-width: 768px) {
      #showcase header .nav-wrapper-dinamic .navbar-header .navbar-toggle span,
      #showcase header .nav-wrapper-dinamic .navbar-header .navbar-toggle span::before,
      #showcase header .nav-wrapper-dinamic .navbar-header .navbar-toggle span::after {
        background-color: #000;
      }
    }
    `
  }
})()