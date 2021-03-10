(() => {
  const isHomePage = window.location.href.endsWith('.com.br/osten-fleet') || window.location.href.endsWith('.com.br/osten-fleet/')

  if (isHomePage) {
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
      .premium-brands__logos ul {
        grid-template-columns: 1fr 1fr 1fr;
      }

      .premium-brands__content-text h2 {
        font-size: 3rem;
      }
    }

    @media screen and (max-width: 768px) {
      .hero-content__wrapper img {
        max-width: 180px;
      }

      #showcase .hero-content h2 {
        font-size: 2.5rem;
        max-width: 100%;
      }

      .pillars::after, .pillars::before {
        width: 300px;
        height: 300px;
        border: 50px solid #EDB713;
      }

      .pillars__content-wrapper {
        grid-template-columns: 1fr;
        grid-template-rows: 10fr 12fr;
        min-height: 0;
      }
      
      .pillars__content-wrapper::after {
        background-position: top;
      }

      .pillars__content-text {
        grid-row: 2;
      }

      .pillars__content-text h2 {
        font-size: 2rem;
      }

      .pillars__content-text p {
        margin-top: 0;
      }

      .who__content-wrapper {
        padding: 9% 2%;
        min-height: 0;
      }

      .who__content-text {
        padding: 4rem 2rem;
        z-index: 99999;
        position: relative;
      }

      .premium-brands__content-wrapper {
        grid-template-columns: 1fr;
      }

      .premium-brands__content-text--wrapper {
        padding: 4rem 2rem;
      }

      .premium-brands__content-text--wrapper h2 {
        font-size: 2rem;
      }

      .premium-brands__logos {
        margin: 0;
      }

      .premium-brands__logos ul {
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
      }

      .premium-brands__logos li img {
        max-width: 100%;
      }
    `
  }
})()