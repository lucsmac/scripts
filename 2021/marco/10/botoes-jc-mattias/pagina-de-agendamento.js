(() => {
  if (window.location.href.includes('/atendimento-online')) {
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
      .buttons-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2rem; 
        padding-top: 3rem;
        max-width: 800px;
        margin: 0 auto;
      }
      
      .buttons-wrapper .btn {
        background: hsla(var(--primary-hue),calc(var(--primary-sat) - -12%),calc(var(--primary-light) + -12%),1);
        color: #FFF;
        transition: all .2s ease;
        border: 2px solid hsla(var(--primary-hue),calc(var(--primary-sat) - -12%),calc(var(--primary-light) + -12%),1);
        padding: .75rem;
      }
      
      .buttons-wrapper .btn:hover {
        background: transparent;
        color: #000;
      }

      @media screen and (max-width: 768px) {
        .buttons-wrapper {
          grid-template-columns: 1fr;
        }
      }
    `
  }
})()