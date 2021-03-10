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
      .why-fleet__content-wrapper {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        min-height: 80vh;
        background: #FFF;
      }
  
      .why-fleet {
        position: relative;
      }
  
      .why-fleet::before {
        content: "";
        display: block;
        width: 500px;
        height: 500px;
        border-radius: 300px;
        border: 90px solid #EDB713;
        position: absolute;
        z-index: 99999;
        top: 0;
        left: 0;
        transform: translate3d(-50%, -50%, 0);
      }
  
      .why-fleet__content-text {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
      }
  
      .why-fleet__content-text--wrapper {
        color: #000;
        max-width: calc(1500px / 2);
        padding: 4rem 4rem 4rem 10%;
        margin-left: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
      }
  
      .why-fleet__content-text h3 {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.2rem;
        display: flex;
        flex-direction: column;
        color: #FFF;
      }
  
      .why-fleet__content-text h3::after {
        content: "";
        display: block;
        width: 60px;
        height: 4px;
        background-color: #FFF;
        margin-top: 15px;
      }
  
      .why-fleet__content-text h2 {
        font-size: 3rem;
        margin-top: 15px;
        line-height: 1.2;
        margin: 0;
        margin-bottom: 2rem;
        color: #FFF;
      }
  
      .why-fleet__content-text h2 span {
        color: #EDB713;
      }
  
      .why-fleet__topics {
        background-color: #FFF;
        max-width: calc(1500px / 2);
        padding: 4rem 10% 4rem 4rem;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
  
      .why-fleet__topics ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        padding: 0;
        row-gap: 100px;
        column-gap: 50px;
        list-style: none;
      }

      .why-fleet__topics img {
        width: 85%;
      }

      .why-fleet__topics p {
        color: #000;
      }
    `
  
    const whyFleet = document.createElement('section')
    whyFleet.classList.add('why-fleet')
    const content = `
    <div class="why-fleet__content-wrapper">
      <div class="why-fleet__content-text">
        <div class="why-fleet__content-text--wrapper">
          <h3>Pessoa física</h3>
          <h2>Por quê <span>assinar</span> seu veículo com a Osten Fleet ao invés de <span>comprar?</span></h2>
        </div>
      </div>
      <div class="why-fleet__topics">
        <ul>
          <li>
            <img src="https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/topics/vantagens-fisica-1.png" alt="Vantagens"/>
            <p>Aprovação de crédito baseada no valor da locação e não do bem.</p>
          </li>
          <li>
            <img src="https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/topics/vantagens-fisica-2.png" alt="Vantagens"/>
            <p>O Capital que seria imobilizado pode ser investido em seus negócios ou aplicações financeiras.</p>
          </li>
          <li>
            <img src="https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/topics/vantagens-fisica-3.png" alt="Vantagens"/>
            <p>Economia com a depreciação da venda do veículo, custos e tempo para Emplacamento, Licenciamento, IPVA, Manutenções Preventivas e Seguro do Veículo.</p>
          </li>
          <li>
            <img src="https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/topics/vantagens-fisica-4.png" alt="Vantagens"/>
            <p>Apresentação técnica realizada por nossos especialistas, no momento da entrega do veículo, para você usufruir ao máximo todos os recursos do veículo.</p>
          </li>
        </ul>
      </div>
    </div>
    `
    whyFleet.innerHTML = content
  
    const target = document.querySelector('#content')
    target.appendChild(whyFleet)
  }
})()