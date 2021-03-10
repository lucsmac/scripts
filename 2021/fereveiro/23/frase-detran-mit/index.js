(() => {
  const footerContainer = document.querySelector('.footer .container')
  const detranPhrase = document.createElement('div')
  detranPhrase.classList.add('detran-phrase')
  detranPhrase.innerHTML = "<p>No trânsito, sua responsabilidade salva vidas.</p>"

  if(footerContainer)
    footerContainer.insertBefore(detranPhrase, footerContainer.firstChild)

  const addStyle = (styles) => {
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

  addStyle`
    .detran-phrase {
      border-top: 3px solid hsl(var(--primary-hue), var(--primary-sat), var(--primary-light));
      padding: 30px 0;
    }

    .detran-phrase p {
      color: #FFF;
      margin: 0;
    }

    .footer__units.footer__units--desktop {
      border-top: none;
      padding-top: 0;
    }
  `
})()