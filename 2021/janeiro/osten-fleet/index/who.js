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
    .who__content-wrapper {
      width: 100%;
      min-height: 100vh;
      background: url("https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/hero-osten.png");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 9% 7%;
    }

    .who__content-text {
      background: #FFF;
      color: #000;
      max-width: 600px;
      padding: 4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    .who__content-text h3 {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.2rem;
      display: flex;
      flex-direction: column;
    }

    .who__content-text h3::after {
      content: "";
      display: block;
      width: 60px;
      height: 4px;
      background-color: #EDB713;
      margin-top: 15px;
    }

    .who__content-text h2 {
      font-size: 4rem;
      margin-top: 15px;
      line-height: 1.1;
      margin: 0;
      margin-bottom: 2rem;
    }

    .who__content-text .content__paragraphs {
      margin-bottom: 40px;
    }

    .who__content-text p {
      font-size: 1rem;
      margin-top: 15px;
      color: #4E4C4C;
      max-width: 100%;
    }
  `

  const who = document.createElement('section')
  who.classList.add('who')
  const content = `
  <div class="who__content-wrapper">
    <div class="who__content-text">
      <h3>Foco no cliente</h3>
      <h2>Quem somos</h2>
      <div class="content__paragraphs">
        <p>Com mais de 18 anos na comercialização de veículos, a Osten Group se consolidou como um dos maiores grupos do mercado automotivo premium graças a busca constante pela excelência no atendimento a seus clientes.</p>
       <p>Atento às demandas do mercado, o grupo abriu uma nova frente, a Osten Fleet, oferecendo uma ampla gama de serviços em Terceirização de Frota Executiva às empresas.</p>
        <p>Prezamos pela qualidade no atendimento e total customização dos nossos serviços, visando proporcionar maior segurança e tranquilidade aos nossos clientes.</p>
      </div>
      <a href="#" class="cta-fleet"/>Solicitar orçamento</a>
    </div>
  </div>
  `
  who.innerHTML = content

  const brands = document.querySelector('#brands')
  brands.parentNode.insertBefore(who, brands)
})()