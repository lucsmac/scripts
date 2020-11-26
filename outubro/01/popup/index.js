
function appendWarningPopup() {
  const endOfURL = '.com.br'
  
  if(window.location.href.endsWith('/') || window.location.href.endsWith('.com') || window.location.href.endsWith(endOfURL) ) {
    const imgPopupUrl = `https://legado.autoforce.com.br/vigorito/_3EB0BD517B54117FDD0F.jpeg`

    const popup = document.createElement('div')
    popup.innerHTML = `
      <div class="popup-fancybox">
        <div class="popup-wrapper">
          <img src="${imgPopupUrl}" alt="Aviso"/>
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
        }

        .popup-fancybox {
          position: fixed;
          z-index: 999999;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          background-color: #FFF;
          border-radius: 10px;
          box-shadow: -4px 1px
        }

        .popup-wrapper {
          position: relative;
        }

        .popup-fancybox img {
          display: block;
          max-width: 50vw;
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
          .popup-fancybox img {
            max-width: 90vw;
          }
        }
      `
    })

    document.body.appendChild(popup)

    const btnClose = document.querySelector('.popup-fancybox-btn-close')
    btnClose.addEventListener('click', () => {
      document.body.removeChild(popup)
    })
  }

}

appendWarningPopup()