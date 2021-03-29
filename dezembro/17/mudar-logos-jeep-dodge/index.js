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

  const headerLogoRight = document.querySelector('.header__link-logo-right')

  const newLogos = `
  <img class="header__logo-right" src="https://production.autoforce.com/uploads/brand/logo_white/18/logo_brand_logo_brand_jeep-branco_co_pia_74575a8da7.png" alt="Jeep" style="transform: translate3d(8px, 0, 0)"/>
  <img class="header__logo-right" src="https://production.autoforce.com/uploads/brand/logo_white/53/logo_brand_logo-fundo-escuro.png" alt="RAM" />
  <img class="header__logo-right" src="https://production.autoforce.com/uploads/brand/logo_white/25/logo_brand_comprar-chrysler_30990cc541.png" alt="Chrysler" />
  <img class="header__logo-right" src="https://production.autoforce.com/uploads/brand/logo_white/52/logo_brand_logo.png" alt="Dodge" />`

  headerLogoRight.innerHTML = newLogos

  addStyle`
  .header__navbar-item:not(:last-child) {
    margin-right: 0;
  }

  .header__link-logo-right {
    display: grid;
    grid-template-columns: repeat(4, 80px);
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
    column-gap: 5px;
  }

  .header__link-logo-right .header__logo-right {
    margin-top: -30px;
    margin-bottom: -30px;
    max-width: 70px;
  }

  @media screen and (max-width: 768px) {
    .header-mobile__link-logo-right {
      display: none;
    }
  }
  `
})()