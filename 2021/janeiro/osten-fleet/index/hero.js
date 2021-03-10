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
    #showcase header .showcase-slides {
      height: auto !important;
      min-height: auto !important;
    }

    #showcase {
      min-height: 100vh;
    }

    #showcase .hero-content {
      flex: 1;
      display: flex;
      align-items: center;
    }

    #showcase .hero-content img {
      display: flex;
      flex-direction: column;
    }

    #showcase .hero-content h2 {
      font-size: 4rem;
      max-width: 70%;
      margin-top: 0;
    }

    #showcase .hero-content h2::before {
      content: "";
      display: block;
      width: 60px;
      height: 4px;
      background-color: #EDB713;
      margin-top: 15px;
    }

    a.cta-fleet {
      padding: 1rem 3rem;
      background-color: #EDB713;
      color: #FFF;
      text-transform: uppercase;
      transition: all .2s ease;
      font-weight: bold;
    }

    a.cta-fleet:hover {
      background-color: #d6a615;
      text-decoration: none;
    }

    #brands, #units {
      display: none;
    }
  `

  const showcase = document.querySelector('#showcase')
  showcase.style.setProperty('background-image', 'url("https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/hero-osten.png")')
  showcase.style.setProperty('background-size', 'cover')
  showcase.style.setProperty('background-position', 'center')
  showcase.style.setProperty('background-repeat', 'no-repeat')

  // bloco no hero

  const content = `
<div class="container">
  <div class="hero-content__wrapper">
    <img src="//legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/osten-logo-yellow.png" alt="Osten Fleet" />
    <h2>Sua solução completa em locação de veículos.</h2>
    <a href="#" class="cta-fleet">Solicitar orçamento</a>
  </div>
</div>
  `
  const heroContent = document.createElement('div')
  heroContent.classList.add('hero-content')
  heroContent.innerHTML = content

  showcase.appendChild(heroContent)
})()