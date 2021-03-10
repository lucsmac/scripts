(() => {
  const isAssignPage = window.location.href.endsWith('/contato') || window.location.href.endsWith('/contato/')

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
    @media screen and (max-width: 1170px) {
      .contact__content {
        column-gap: 30px;
      }
    } 

    @media screen and (max-width: 992px) {
      .contact .container {
        width: auto;
      }

      .contact__title h1 {
        font-size: 3rem;
      }
    } 

    @media screen and (max-width: 768px) {
      .contact__content {
        padding: 4rem 0;
        grid-template-columns: 1fr;
      }

      .footerFields {
        grid-template-columns: 1fr;
      }

      .contact::before {
        display: none;
      }
    }
    `
  }
})()