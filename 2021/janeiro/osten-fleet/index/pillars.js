(() => {
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
    body {
      overflow: hidden;
      background: #FFF;
    }
  
    .pillars {
      position: relative;
    }

    .pillars::before, .pillars::after {
      content: "";
      display: block;
      width: 600px;
      height: 600px;
      border-radius: 300px;
      border: 120px solid #EDB713;
      position: absolute;
      z-index: 99999;
    }

    .pillars::before {
      top: 0;
      right: 0;
      transform: translate3d(50%, -50%, 0);
    }

    .pillars::after {
      bottom: 0;
      left: 0;
      transform: translate3d(-50%, 50%, 0);
    }
    
    .pillars__content-wrapper {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      min-height: 100vh;
      background: #FFF;
    }

    .pillars__content-wrapper::after {
      content: "";
      display: block;
      background-image: url("https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/pillars.png");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    .pillars__content-text {
      color: #000;
      max-width: calc(1170px / 2);
      padding: 4rem 1rem;
      margin-left: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-bottom: 10rem;
    }

    .pillars__content-text h3 {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.2rem;
      display: flex;
      flex-direction: column;
    }

    .pillars__content-text h3::after {
      content: "";
      display: block;
      width: 60px;
      height: 4px;
      background-color: #EDB713;
      margin-top: 15px;
    }

    .pillars__content-text h2 {
      font-size: 4rem;
      margin-top: 15px;
      line-height: 1.1;
      margin: 0;
      margin-bottom: 2rem;
    }

    .pillars__content-text p {
      font-size: 1rem;
      margin-top: 15px;
      color: #4E4C4C;
      max-width: 80%;
    }
  `

  const pillars = document.createElement('section')
  pillars.classList.add('pillars')
  const content = `
  <div class="pillars__content-wrapper">
    <div class="pillars__content-text">
      <h3>Nossos pilares</h3>
      <h2>Pessoas. Solidez. Segurança.</h2>
      <p>Acreditamos que as pessoas são o centro de tudo. Segurança e tranquilidade garantida para sua empresa.</p>
    </div>
  </div>
  `
  pillars.innerHTML = content

  const brands = document.querySelector('#brands')
  brands.parentNode.insertBefore(pillars, brands)
})()