(() => {
  const logosWrapper = document.querySelector('.header__navbar-item.header__networks')
  const target = document.querySelector('#top-logo-fixed')

  target.innerHTML = `<div class="container">${target.innerHTML}</div>`
  logosWrapper.classList.remove('d-md-none')

  target.querySelector('.container').appendChild(logosWrapper)

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
    #top-logo-fixed .container {
      position: initial;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      padding: 0 2rem;
    }

    #top-logo-fixed .container > a:first-child {
      grid-column: 2;
      justify-self: center;
    }

    #top-logo-fixed .container  .header__networks {
      justify-self: end;
    }

    #top-logo-fixed .container  .header__networks .header__networks-list {
      background-color: transparent;
      padding: 0;
      border-radius: 0;
    }

    #top-logo-fixed .container  .header__networks .header__networks-list > a + a {
      margin-left: 5px
    }

    @media and (min-width: 992px) {
      #top-logo-fixed .container .header__networks {
        display: none;
      }
    }
    `
  })
})()