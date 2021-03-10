(() => {
  const isAssignPage = window.location.href.endsWith('/assinatura') || window.location.href.endsWith('/assinatura/')

  if (isAssignPage) {
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
      

    @media screen and (max-width: 768px) {
      .how__topics ul {
        grid-template-columns: 1fr;
        row-gap: 20px;
      }

      .buy::before {
        display: none;
      }

      .buy__content-wrapper {
        grid-template-columns: 1fr;
      }
      
      .buy__content-text--wrapper {
        padding: 2rem 1rem;
      }

      .buy__topics {
        padding: 2rem 1rem;
      }
    }
    `
  }
})()