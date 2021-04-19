(() => {
  if(window.location.href.includes('empresa/taos')) {
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
      .content--static-page .content__banner {
        height: 600px;
      }

      .content__form .static-conversion-form.content__form-with-banner {
        margin-top: -580px !important;
      } 
    `
  }
})()