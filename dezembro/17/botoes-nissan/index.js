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

  addStyle({
    styles: `
      .btn {
        border-radius: 0;
        font-color: white;
        font-weight: 300;
        font-size: 12px;

        padding: 9px 20px;
      }

      .button--primary {
        background-color: #C3002F;
      }

      .button--secondary {
        background-color: #676767;
      }
    `
  })
})()