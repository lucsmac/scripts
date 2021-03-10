(() => {
  if(location.href.endsWith('/novos')) {
    document.addEventListener('readystatechange', event => { 

      // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
      if (event.target.readyState === "complete") {
        const wrongLogoCard = document.querySelector('.card__content img[src="//www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-civic-si.png"]')
        if(wrongLogoCard) {
          wrongLogoCard.setAttribute('src', '//www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-civic.png')
        }
      }
    })
  }
})()

(() => {
  if(location.href.endsWith('/novos')) {
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
      styles: `.card__content img[src="//www.honda.com.br/sites/hab/themes/hondahab/dist/img/home/model-logo-civic-si.png"] {
        display: none
      }`
    })
  }
})()