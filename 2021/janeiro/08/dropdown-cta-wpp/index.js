(() => {
  const target = document.querySelector('.text-calls-chat-online .container')
  target.innerHTML = `
  <div id="specialist-dropdown">
    <div class="specialist-dropdown__cta">
      Fale agora mesmo com um Especialista On-line
    </div>
    <div class="specialist-dropdown__options">
      <ul>
        <li class="specialist-dropdown__option">
          <a href="https://api.whatsapp.com/send?phone=5571981080286&text=Ol%C3%A1!%20Posso%20me%20ajudar?">Bahia <i class="icon icon-whatsapp"></i></a>
        </li>
        <li class="specialist-dropdown__option">
          <a href="https://api.whatsapp.com/send?phone=5585991844829&text=Ol%C3%A1!%20Posso%20me%20ajudar?">Ceará <i class="icon icon-whatsapp"></i></a>
        </li>
        <li class="specialist-dropdown__option">
          <a href="https://api.whatsapp.com/send?phone=5581992061180&text=Ol%C3%A1!%20Posso%20me%20ajudar?">Pernambuco <i class="icon icon-whatsapp"></i> </a>
        </li>
      </ul>
    </div>
  </div>`

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
    #specialist-dropdown {
      display: inline-flex;
      align-items: start;
      flex-direction: column;
      position: relative;
    }
    
    #specialist-dropdown .specialist-dropdown__cta { 
      font-size: 1rem;
      color: #FFF;
      background: #25d366;
      padding: 20px 60px;
      border-radius: 8px;
      cursor: pointer;
    }

    #specialist-dropdown .specialist-dropdown__options {
      background-color: #FFF;
      width: 100%;
      border-radius: 8px;
      box-shadow: -2px 2px 5px rgba(0,0,0,0.05);
      position: absolute;
      bottom: 75px;
      z-index: 99;
      display: none;
    }

    #specialist-dropdown .specialist-dropdown__options.active {
      display: block;
    }

    #specialist-dropdown ul {
      list-style: none;
      padding: 0;
      margin-bottom: 0;
    }

    #specialist-dropdown ul li:first-child {
      border-radius: 8px 8px 0 0;
    }

    #specialist-dropdown ul li:last-child {
      border-radius: 0 0 8px 8px;
    }

    #specialist-dropdown ul li {
      padding: 0 20px;
    }

    #specialist-dropdown ul li:hover {
      background: #25d366;
    }

    #specialist-dropdown ul li:hover a {
      color: #FFF;
    }

    #specialist-dropdown ul li + li{
      border-top: 1px solid #f1f1f1;
    }

    #specialist-dropdown ul li a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 10px;
      color: #000;
    }

    #specialist-dropdown ul li a i {
      color: #25d366;
    }

    #specialist-dropdown ul li:last-child a {
      border-bottom: 3px solid #25d366;
    }

    #specialist-dropdown ul li a:hover {
      text-decoration: none;
    }
  `})

  const cta = document.querySelector('#specialist-dropdown .specialist-dropdown__cta')
  const dropdown = document.querySelector('#specialist-dropdown .specialist-dropdown__options')
  cta.addEventListener('click', () => {
    dropdown.classList.toggle('active')
  })

  document.addEventListener("DOMContentLoaded", function(event) {
    const wppModal = document.querySelector('#header-conversion-form-whatsapp-modal')
    const closeModalButton = document.querySelector('.modal__overlay-close--form')
    const links = document.querySelectorAll('#specialist-dropdown .specialist-dropdown__option')
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        wppModal.classList.add('is-open')
        closeModalButton.addEventListener('click', () => {
          wppModal.classList.remove('is-open')
        })
      })
    })
  })
})()