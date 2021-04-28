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

  const dealerImage = 'https://legado.autoforce.com.br/codecheat/images/logo-dealer.png'
  const authorizedDealer = 'https://legado.autoforce.com.br/codecheat/images/selo-concessionaria-autorizda.png'

  const logosWrapper = document.createElement('div')
  logosWrapper.innerHTML = `<img src="${dealerImage}" /><img src="${authorizedDealer}" />`
  logosWrapper.classList.add('mercedes-dealer-logos')

  const header = document.querySelector('.header__navbar')
  header.appendChild(logosWrapper)

  addStyle`
    .mercedes-dealer-logos {
      display: flex;
      align-items: center;
      margin-left: auto;
    }

    .mercedes-dealer-logos img {
      max-width: 150px;
      max-height: 35px;
    }

    .mercedes-dealer-logos img + img {
      margin-left: 15px;
    }

    .nav-item a, .nav-simple .nav button, .list--header-phones > li a {
      font-family: var(--font-family-secondary)
    }
  `
})()