// https://sael.com.br/bmw/ https://sael.com.br/bmw-motorrad
(() => {
  const wrapperDesktop = document.querySelector('.header__navbar-item.header__phones')
  const wrapperMobile = document.querySelector('.header-mobile__buttons')
  
  const newBtn = document.createElement('a')
  newBtn.setAttribute('href', 'https://sael.com.br/bmw-motorrad/empresa/faca-um-tour-pela-loja-3d')
  'btn button button--primary header__phones-button-toggler'
    .split(' ')
    .forEach(className =>
      newBtn.classList.add(className)
    )
  newBtn.innerHTML = '<img src="https://legado.autoforce.com.br/genius/images/360.png" style="width: 25px; margin-right: 7px"/> Tour Virtual'
  newBtn.style.setProperty('background-color', '#000')
  newBtn.style.setProperty('color', '#FFF')

  const btnMobileWrapper = document.createElement('div')
  btnMobileWrapper.innerHTML = '<a href="https://sael.com.br/bmw-motorrad/empresa/faca-um-tour-pela-loja-3d" class="button-icon header__phones-button-toggler-mobile" style="background-color: #000;"><img src="https://legado.autoforce.com.br/genius/images/360.png" style="width: 23px; margin-top: 3px"/></button>'

  wrapperDesktop.insertBefore(newBtn, wrapperDesktop.firstChild)
  wrapperMobile.insertBefore(btnMobileWrapper, wrapperMobile.firstChild)
})()

// https://sael.com.br/mini
(() => {

  const addBtnTourVirtual = () => {

    // desktop
  
    const btnsTarget = document.querySelector('.header__navbar-item.header__phones')
    const btnTourVirtual = document.createElement('div')
    btnTourVirtual.classList.add('header__phones-container')
    btnTourVirtual.setAttribute('id', 'waRebelde')
  
    btnTourVirtual.innerHTML = `
    <a class="btn button" href="https://sael.com.br/mini/empresa/faca-um-tour-pela-loja-3d" style="background-color: rgb(4, 97, 147); color: #FFF;">
      <i class="icon icon-map"></i> Tour Virtual 
    </a>`
  
    btnsTarget.appendChild(btnTourVirtual)
  
    // mobile
  
    const headerMobile = document.querySelector('.header-mobile__buttons')
    const buttonMobile = document.createElement('div')
    buttonMobile.innerHTML = '<a class="button-icon header__phones-button-toggler-mobile" href="https://sael.com.br/mini/empresa/faca-um-tour-pela-loja-3d" style="background-color: rgb(4, 97, 147); color: rgb(255, 255, 255);"><i class="icon icon-map"></i></a>'
  
    headerMobile.appendChild(buttonMobile)
  
    // styles
  
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
        .time-missing__time {
  
        }
  
        .fragment-info-extra__container img {
          width: 100%;
        }
      
        .header__navbar-title.header__navbar-title--label.d-flex {
          display: none !important;
        }
  
        @media screen and (max-width: 992px) {
          .header__logo.img-fluid {
            width: 100px;
          }
        }
      `
    })
  }
  
  addBtnTourVirtual()
})()