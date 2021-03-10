(() => {
  if(window.location.href.endsWith('/fisica-juridica') || window.location.href.endsWith('/fisica-juridica/')) {
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
    @media screen and (max-width: 992px) {
      .physical__topics ul {
        grid-template-columns: 1fr 1fr;
      }

      .why-fleet__content-wrapper {
        grid-template-columns: 1fr;
      }
    }

    @media screen and (max-width: 768px) {
      #showcase header .pageview {
        height: auto;
      }

      .physical__topics ul {
        grid-template-columns: 1fr;
        justify-items: center;
      }

      .physical__topics ul li, .why-fleet__topics ul li {
        max-width: 300px;
      }

      #content .container-fluid {
        display: none;
      }

      .physical__topics img {
        width: 100%;
      }

      .why-fleet::before {
        display: none;
      }

      .why-fleet__topics ul {
        grid-template-columns: 1fr;
        justify-items: center;
      }

      .why-fleet__topics {
        padding: 4rem 1rem;
      }
    }`
  }
})()