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
      body {
        background-color: #FFF;
      }
    
      #showcase .container-fluid {
        max-width: none;
        height: auto;
      }
    
      #showcase header .showcase .showcase-grid {
        height: auto;
      }

      #showcase .pageview-crumb {
        display: none;
      }

      #showcase header .showcase .showcase-grid {
        background-image: url("https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/pillars.png");
        background-position: 0% 10%;
        background-size: cover;
        background-repeat: no-repeat;
      }

      .hero__content-text {
        padding: 3rem 0;
      }

      .hero__content-text h3 {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.2rem;
        display: flex;
        flex-direction: column;
      }
  
      .hero__content-text h3::after {
        content: "";
        display: block;
        width: 60px;
        height: 4px;
        background-color: #EDB713;
        margin-top: 15px;
      }
  
      .hero__content-text h2 {
        font-size: 3.5rem;
        margin-top: 15px;
        line-height: 1.2;
        margin: 0;
        margin-bottom: 2rem;
        max-width: 800px;
      }
  
      .hero__content-text h2 span {
        color: #EDB713;
      }
    `

    const target = document.querySelector('#showcase .pageview-crumb')
    const heroContent = document.createElement('div')
    heroContent.classList.add('hero')
    heroContent.innerHTML = `
<div class="hero__content-text">
  <div class="container">
    <div class="row">
      <h3>Pessoa jurídica</h3>
      <h2>Por quê <span>terceirizar</span> ou <span>assinar</span> com a Osten Fleet?</h2>
    </div>
  </div>
</div>
    `

    target.parentNode.insertBefore(heroContent, target)
  }
})()