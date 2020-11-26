const buildPopupOnOut = (imgPopupUrl, url) => {
  function appendWarningPopup(imgPopupUrl, url) {
    const endOfURL = url
    
    if(window.location.href.endsWith('/') || window.location.href.endsWith('.com') || window.location.href.endsWith('.com.br') || window.location.href.endsWith(endOfURL) ) {
  
      const popup = document.createElement('div')
      popup.innerHTML = `
        <div class="before-out-popup-fancybox">
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
            background-color: rgba(0, 0, 0, .9);
          }
  
          .before-out-popup-fancybox {
            position: fixed;
            z-index: 999999;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
            background-color: #FFF;
            border-radius: 10px;
            box-shadow: -4px 1px
          }
  
          .before-out-popup-fancybox .popup-wrapper {
            position: relative;
          }
  
          .before-out-popup-fancybox img {
            display: block;
            max-width: 50vw;
            max-height: 80vh;
          }
  
          .before-out-popup-fancybox .popup-fancybox-btn-close {
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
            display: flex;
            align-items: center;
            justify-content: center;
          }
  
          @media screen and (max-width: 768px) {
            .before-out-popup-fancybox .popup-fancybox img {
              max-width: 90vw;
              max-height: 90vh;
            }
          }
        `
      })
  
      document.body.appendChild(popup)
  
      const btnClose = document.querySelector('.popup-fancybox-btn-close')
      btnClose.addEventListener('click', () => {
        document.body.removeChild(popup)
        localStorage.setItem('popup-out', 'closed')
      })
    }
  
  }
  
  localStorage.setItem('popup-out', false)
  
  const popupOutVerifications = () => {
    if((localStorage.getItem('popup-in') !== 'opened') && (localStorage.getItem('popup-out') === 'false')) {
      appendWarningPopup()
      localStorage.setItem('popup-out', 'opened')
    }
  }
  
  document.addEventListener("mouseout", (e) => {
    e = e ? e : window.event;
    var from = e.relatedTarget || e.toElement;
    if (!from || from.nodeName == "HTML") {
      popupOutVerifications()
    }
  });
}

buildPopupOnOut(`https://legado.autoforce.com.br/vigorito/_3EB0BD517B54117FDD0F.jpeg`, 'ford-ebd-teste')
