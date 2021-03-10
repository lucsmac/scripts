(() => {
  if(window.location.href.endsWith('.com.br/osten-fleet') || window.location.href.endsWith('.com.br/osten-fleet/')) {
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
      .premium-brands__content-wrapper {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        min-height: 90vh;
        background: #FFF;
      }
  
      .premium-brands__content-text {
        background: #EDB713;
        width: 100%;
      }
  
      .premium-brands__content-text--wrapper {
        color: #000;
        max-width: calc(1500px / 2);
        padding: 4rem 4rem 4rem 10%;
        margin-left: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
      }
  
      .premium-brands__content-text h3 {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.2rem;
        display: flex;
        flex-direction: column;
      }
  
      .premium-brands__content-text h3::after {
        content: "";
        display: block;
        width: 60px;
        height: 4px;
        background-color: #FFF;
        margin-top: 15px;
      }
  
      .premium-brands__content-text h2 {
        font-size: 4rem;
        margin-top: 15px;
        line-height: 1.2;
        margin: 0;
        margin-bottom: 2rem;
      }
  
      .premium-brands__content-text h2 span {
        color: #FFF;
      }
  
      .premium-brands__logos {
        background-color: #FFF;
        max-width: calc(1500px / 2);
        padding: 4rem 10% 4rem 4rem;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
  
      .premium-brands__logos ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        width: 100%;
        padding: 0;
        row-gap: 100px;
        column-gap: 50px;
        align-items: center;
      }
    `
  
    const premiumBrands = document.createElement('section')
    premiumBrands.classList.add('premium-brands')
    const content = `
    <div class="premium-brands__content-wrapper">
      <div class="premium-brands__content-text">
        <div class="premium-brands__content-text--wrapper">
          <h3>Todas as marcas</h3>
          <h2>Trabalhamos com todas as marcas do segmento <span>PREMIUM</span></h2>
        </div>
      </div>
      <div class="premium-brands__logos">
        <ul>
          <li><img src="https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/brands/audi.svg" alt="Audi"/></li>
          <li><img src="https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/brands/bmw.svg" alt="Bmw"/></li>
          <li><img src="https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/brands/chevrolet.svg" alt="Chevrolet"/></li>
          <li><img src="https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/brands/ford.svg" alt="Ford"/></li>
          <li><img src="https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/brands/hyundai.svg" alt="Hyundai"/></li>
          <li><img src="https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/brands/land-rover.svg" alt="Land Rover"/></li>
          <li><img src="https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/brands/jaguar.svg" alt="Jaguar"/></li>
          <li><img src="https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/brands/jeep.svg" alt="Jeep"/></li>
          <li><img src="https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/brands/mercedes.svg" alt="Mercedes"/></li>
          <li><img src="https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/brands/toyota.svg" alt="Toyota"/></li>
          <li><img src="https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/brands/volvo.svg" alt="Volvo"/></li>
          <li><img src="https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/brands/volkswagen.svg" alt="Volkswagen"/></li>
        </ul>
      </div>
    </div>
    `
    premiumBrands.innerHTML = content
  
    const brands = document.querySelector('#brands')
    brands.parentNode.insertBefore(premiumBrands, brands)
  }
})()