const addStyleLC = ({ styles }) => {
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

const createPopup = (iframe) => {
  console.log('createPopup')
  const popup = document.createElement('div')
  popup.innerHTML = `
    <div class="popup-fancybox">
      <div class="popup-wrapper">
        ${iframe}
        <span class="popup-fancybox-btn-close">x</span>
      </div>
    </div>
  `

  popup.classList.add('popup-overlay')

  addStyleLC({
    styles: `
      .popup-overlay {
        position: fixed;
        z-index: 999999;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, .6);
        pointer-events: none;
        opacity: 0;
      }

      .popup-fancybox {
        position: fixed;
        z-index: 999999;
        top: 50%;
        left: 50%;
        width: 80%; 
        max-width: 800px;
        transform: translate3d(-50%, -50%, 0);
        background-color: #FFF;
        border-radius: 10px;
        box-shadow: -4px 1px
      }

      .popup-wrapper {
        position: relative;
      }

      .popup-fancybox iframe {
        display: block;
        height: 90vh;
        overflow-y: scroll;
      }

      .popup-fancybox-btn-close {
        position: absolute;
        right: -15px;
        top: -15px;
        font-size: 1.5rem;
        color: #2A2A2A;
        font-family: sans-serif;
        cursor: pointer;
        background: #FFF;
        border: 1px solid #2A2A2A;
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 50%;
        line-height: 1;
      }

      @media screen and (max-width: 768px) {
        .popup-fancybox iframe {
          max-width: 90vw;
        }
      }
    `
  })

  document.body.appendChild(popup)

  const btnClose = document.querySelector('.popup-fancybox-btn-close')
  btnClose.addEventListener('click', () => {
    popup.style.setProperty('pointer-events', 'none')
    popup.style.setProperty('opacity', '0')
  })
}

const createCTABanner = () => {
  console.log('createCTABanner')
  addStyleLC({ styles: `
    .form-conversion__body fieldset, .form-conversion__body hr, .form-conversion__body footer, .static-conversion-form fieldset, .static-conversion-form .form-group {
      display: none;
    }
  `})

  const btnOpen = document.querySelector('.form-conversion__body button')
  if(btnOpen) {
    const popup = document.querySelector('.popup-overlay')
    btnOpen.addEventListener('click', () => {
      popup.style.setProperty('pointer-events', 'initial')
      popup.style.setProperty('opacity', '1')
    })
  }
}

const createBoxCTA = (selector) => {
  console.log('createBoxCTA')
  const boxCTA = `<div>
    <div>
        <div class="cta-box cta-box--vertical cta-form-leads-connect">
            <div class="cta-box__phrase"><span>Clique para preencher o formulário e receber o contato de um de nossos especialistas</span></div>
            <div class="cta-box__button-container">
              <button class="btn button button--large btn-leads-connect">Estou interessado</button>
            </div>
        </div>
    </div>
  </div>
  `

  const formTarget = document.querySelector(selector)

  if(formTarget)
    formTarget.innerHTML = boxCTA

  addStyleLC({ styles: `
    .cta-form-leads-connect {
      border-top: 3px solid #E41955;
    }

    .btn-leads-connect {
      background-color: #E41955;
    }

    .btn-leads-connect:hover {
      background-color: #A8133F;
    }
  `})

  const btnOpen = document.querySelector('.btn-leads-connect')
  if(btnOpen) {
    const popup = document.querySelector('.popup-overlay')
    btnOpen.addEventListener('click', () => {
      popup.style.setProperty('pointer-events', 'initial')
      popup.style.setProperty('opacity', '1')
    })
  }
}

const servicesModalButton = () => {
  console.log('servicesModalButton')
  const btnOpenServicesModalWrapper = document.querySelector('.showcase-services__panel-btn-schedule') ? document.querySelector('.showcase-services__panel-btn-schedule').parentNode : ''
  if(btnOpenServicesModalWrapper) {
    btnOpenServicesModalWrapper.innerHTML = btnOpenServicesModalWrapper.innerHTML
    const btnOpenServicesModal = document.querySelector('.showcase-services__panel-btn-schedule')
    const popup = document.querySelector('.popup-overlay')
    btnOpenServicesModal.addEventListener('click', () => {
      popup.style.setProperty('pointer-events', 'initial')
      popup.style.setProperty('opacity', '1')
    })
  }
}