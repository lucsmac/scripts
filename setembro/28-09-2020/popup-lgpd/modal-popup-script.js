const popup = document.createElement('div')

popup.classList.add('cookies-popup-wrapper')
popup.innerHTML = `
<div class="cookies-popup-content">
  <p>Nós utilizamos cookies e outras tecnologias para possibilitar e aprimorar sua experiência em nosso site, e ao continuar navegando em nossas páginas você concorda com a coleta e uso de cookies. Para saber mais, visite nossa <a href="#privacy-policy" class="open-modal-lgpd">Política de Privacidade.</a></p>
  <button class="btn-accept" type="button">Entendi e aceito!</button>
</div>
`

const privacyPolicyIsAccepted = localStorage.getItem('privacy-policy')

if (privacyPolicyIsAccepted !== 'accepted') {
  document.querySelector('body').appendChild(popup)
  popup.style.setProperty('display', 'block');
}

document.querySelector('.btn-accept') && document.querySelector('.btn-accept').addEventListener('click', function() {
  localStorage.setItem('privacy-policy', 'accepted')
  popup.classList.add('desappear');
  popup.style.setProperty('display', 'none');
})

document.querySelector('.open-modal-lgpd') && document.querySelector('.open-modal-lgpd').addEventListener('click', function() {
  const modalLgpdOverlay = document.querySelector('.overlay')
  modalLgpdOverlay.classList.add('active', 'open-shazam')

  const modalLgpd = document.querySelector('#privacy-policy')
  modalLgpd.classList.add('active')
})

var addStyle = ({ styles }) => {
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
  .overlay.open-shazam {
    z-index: 99999999;
  }

  #privacy-policy {
    width: 90%;
    height: 90vh;
  }
  
  .overlay .content {
    top: auto !important;
  }

  .overlay .content .pop-up-wrapper-item {
    padding: 24px 48px;
  }
  
  .desappear {
    animation-name: desappear;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }

  @keyframes desappear {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      display: block;
    }
  }

  .cookies-popup-wrapper {
    box-sizing: border-box;
    position: fixed;
    z-index: 999;
    display: none;
    bottom: 0;

    margin: 32px;
    padding: 32px 64px;

    background-color: #FFF;

    border: 2px solid rgba(0, 0, 0, .1);
    border-radius: 4px;
    box-shadow: -3px 3px 8px 2px rgba(0, 0, 0, 0.1);
  }

  .cookies-popup-content {
    display: flex;
    align-items: center;
  }

  .cookies-popup-content p {
    padding-right: 10%;
    
    font-family: 'Roboto', 'Open Sans', sans-serif;
    color: #2A2A2A;
    font-weight: 300;
    line-height: 1.5;

    opacity: 0.8;
  }

  .cookies-popup-content button {
    flex-shrink: 0;

    border: 0;
    padding: 15px;
    min-width: 25%;

    background-color: #00C390;
    color: #FFF;

    cursor: pointer;

    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    font-weight: 500;
  }

  .cookies-popup-content a {
    color: #006ECE;
  }

  @media screen and (max-width: 768px) {
    .cookies-popup-wrapper {
      margin: 16px;
      padding: 32px;
    }

    .cookies-popup-content {
      flex-direction: column;
    }

    .cookies-popup-content p {
      padding-right: 0;
      padding-bottom: 24px;
    }
    
    .cookies-popup-content button {
      width: 100%;
    }

    .overlay .content .pop-up-wrapper-item {
      padding: 12px;
    }
  }
  `
})