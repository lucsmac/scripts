(() => {
  if(window.location.href.includes('ofertas/')) {
    const conditions = document.querySelector('#modal-offer-conditions .modal__content').innerHTML
    const target = document.querySelector('.legal-text').parentElement
    const conditionsBtn = document.querySelector('.terms-link[data-target-id="modal-offer-conditions"]')

    const conditionsBox = document.createElement('div')
    conditionsBox.classList.add('conditions-box')
    conditionsBox.innerHTML = 
    `<div>
      <h3>Condições desta oferta</h3>
      <p>${conditions}</p>
    </div>`

    if(target && conditionsBtn) {
      target.parentElement.insertBefore(conditionsBox, target)
      conditionsBtn.style.setProperty('display', 'none')
    }

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
        .conditions-box {
          padding: 30px;
          margin-top: 30px;
          border-radius: 8px;

          background: #FFF;
          box-shadow: 0 2px 4px rgba(0,0,0,.15);
          border-top: 3px solid hsl(var(--primary-hue),var(--primary-sat),var(--primary-light));
        }

        .conditions-box h3 {

        }

        .conditions-box p {
          margin: 0;
          font-weight: 300;
        }
      `
    })
  }
})()
