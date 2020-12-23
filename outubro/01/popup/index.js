
(() => {
  const popup = document.createElement('div')
  popup.innerHTML = `
    <div class="popup-fancybox">
      <div class="popup-wrapper">
        <iframe name="form-leads_connect" id="form-leads_connect" src="https://hondabrasil.secure.force.com/CapturaLeads/myHonda_DynamicLeadCaptureForm?id=MjAyMDA2MTYxNDE5NTR8fDAwMTYxMDAwMDBOck9OSkFBMw==" frameborder="0" width="100%" height="1100" allowfullscreen=""></iframe>
        <span class="popup-fancybox-btn-close">x</span>
      </div>
    </div>
  `

  popup.classList.add('popup-overlay')

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

  addStyle({ styles: `
    .form-conversion__body fieldset, .form-conversion__body hr, .form-conversion__body footer {
      display: none;
    }
  `})

  addStyle({
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

  const btnOpen = document.querySelector('.form-conversion__body button')
  btnOpen.addEventListener('click', () => {
    popup.style.setProperty('pointer-events', 'initial')
    popup.style.setProperty('opacity', '1')
  })
})()