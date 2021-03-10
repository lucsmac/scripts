// Barra branca: Osten Jeep e Osten Triumph

(() => {
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

  const ostenBarBlack = document.createElement('div')
  ostenBarBlack.id = 'top-logo-fixed'
  ostenBarBlack.innerHTML = `<a href="https://www.ostengroup.com.br/"><img src="//legado.autoforce.com.br/mods/osten/logo-marca.png" alt="Osten Group"></a>`

  addStyle({
    styles: `
    #top-logo-fixed {
      width: 100%;
      background: #FFF;
      padding: .5rem 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    
    #top-logo-fixed img { 
      height: 12.69px;
      filter: invert(1);
    }
  `})

  const header = document.querySelector('.header')
  header.parentNode.insertBefore(ostenBarBlack, header)
})()

// Barra preta: Osten Motorrad

(() => {
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

  const ostenBarBlack = document.createElement('div')
  ostenBarBlack.id = 'top-logo-fixed'
  ostenBarBlack.innerHTML = `<a href="https://www.ostengroup.com.br/"><img src="//legado.autoforce.com.br/mods/osten/logo-marca.png" alt="Osten Group"></a>`

  addStyle({
    styles: `
    #top-logo-fixed {
      width: 100%;
      background: #000;
      padding: .5rem 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    
    #top-logo-fixed img { 
      height: 12.69px;
      filter: invert(1);
    }
  `})

  const header = document.querySelector('.header')
  header.parentNode.insertBefore(ostenBarBlack, header)
})()