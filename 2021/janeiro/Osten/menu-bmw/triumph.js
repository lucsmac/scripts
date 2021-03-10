(() => {
  const newVehicles = document.querySelector('.page--home .vehicles-new__title.section-component__title')
  if(newVehicles)
    newVehicles.innerText = 'Linha Triumph'
})()

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
header.header {
  background-color: #000;
}

.header__navbar-item .header__networks-list {
  background-color: #000; 
}

.header__phones-container .button--primary.header__phones-button-toggler {
  background-color: #FFF;
  color: #000;
}

.header__phones-container .button--primary.header__phones-button-toggler .icon {
  color: #000;
}

.header-mobile__buttons .header__phones-button-toggler-mobile:not(.button-icon--whatsapp) {
  background-color: #FFF;
}

.header-mobile__buttons .header__phones-button-toggler-mobile:not(.button-icon--whatsapp) .icon {
  color: #000;
}

.navbar-toggler-hamburger .navbar-icon-line {
  background-color: #FFF;
}

.nav-link.nav-simple__link:hover {
  color: #cd192e;
}

@media screen and (min-width: 768px) {
  .nav-simple.nav-simple--accordion-mobile {
    background-color: #000;
  }

  .nav-link.nav-simple__link {
    color: #FFF;
  }
}
    `
  })
})()