
const addBtnAgendamento = () => {

  // desktop

  const btnsTarget = document.querySelector('.header__navbar-item.header__phones')
  const btnAgendamento = document.createElement('div')
  btnAgendamento.classList.add('header__phones-container')
  btnAgendamento.setAttribute('id', 'waRebelde')

  btnAgendamento.innerHTML = `
  <a class="btn button button--line" href="/guiauto-chevrolet/servicos" style="border-color: rgb(215, 179, 103); background-color: rgb(215, 179, 103); color: rgb(255, 255, 255);">
    <i class="icon icon-services"></i> Agendamento 
  </a>`

  btnsTarget.appendChild(btnAgendamento)

  // mobile

  const headerMobile = document.querySelector('.header-mobile__buttons')
  const buttonMobile = document.createElement('div')
  buttonMobile.innerHTML = '<a class="button-icon header__phones-button-toggler-mobile" href="/guiauto-chevrolet/servicos" style="border-color: rgb(215, 179, 103); background-color: rgb(215, 179, 103); color: rgb(255, 255, 255);"><i class="icon icon-services"></i></a>'

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

addBtnAgendamento()