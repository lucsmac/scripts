(() => {
  if(window.location.href.includes('ondemand')) {
    const target = document.querySelector('#pagina__locacao .pagina__locacao__introducao')
    const form = document.querySelector('.content__form')

    target.appendChild(form)

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
      section#pagina__locacao .pagina__locacao__introducao {
        display: grid;
        grid-template: 
          'image form'
          'text form'
          / 1fr 350px;
      }

      .pagina__locacao__banner__pequeno {
        grid-area: image;
      }

      .pagina__locacao__introducao__text {
        grid-area: text;
      }

      .content__form {
        grid-area: form;
      }

      article.content__text--with-bait {
        flex: 1;
      }

      @media screen and (max-width: 768px) {
        section#pagina__locacao .pagina__locacao__introducao {
          display: grid;
          grid-template: 
            'image'
            'text'
            'form'
            / 1fr;
        }
      }
    `
  }
})()
