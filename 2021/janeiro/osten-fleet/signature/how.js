(() => {
  const isAssignPage = window.location.href.endsWith('/assinatura') || window.location.href.endsWith('/assinatura/')

  if (isAssignPage) {
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
      #content .container-fluid {
        display: none;
      }

      .how__content-wrapper {
        width: 100%;
        min-height: 90vh;
        background: #FFF;
        display: flex;
        align-items: center;
      }
  
      .how__content-text h3 {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.2rem;
        display: flex;
        flex-direction: column;
        color: #000;
      }
  
      .how__content-text h3::after {
        content: "";
        display: block;
        width: 60px;
        height: 4px;
        background-color: #EDB713;
        margin-top: 15px;
      }
  
      .how__content-text h2 {
        font-size: 3rem;
        margin-top: 15px;
        line-height: 1.2;
        margin: 0;
        margin-bottom: 2rem;
        color: #000;
      }
  
      .how__content-text h2 span {
        color: #EDB713;
      }
  
      .how__topics {
        background-color: #FFF;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
  
      .how__topics ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
        padding: 0;
        row-gap: 100px;
        column-gap: 50px;
        list-style: none;
      }

      .how__topics h3 {
        font-weight: bold;
        font-size: 1.2rem;
        display: flex;
        flex-direction: column;
        color: #000;
      }

      .how__topics h3::after {
        content: "";
        display: block;
        width: 60px;
        height: 4px;
        background-color: #EDB713;
        margin-top: 15px;
      }

      .how__topics p {
        color: #000;
      }
    `
  
    const how = document.createElement('section')
    how.classList.add('how')
    const content = `
    <div class="how__content-wrapper">
      <div class="container">
        <div class="how__content-text">
          <div class="how__content-text--wrapper">
            <h3>Assinatura</h3>
            <h2>Como funciona?</h2>
          </div>
        </div>
        <div class="how__topics">
          <ul>
            <li>
              <h3>O período de assinatura pode ser:</h3>
              <p>12, 24 ou 36 meses.</p>
            </li>
            <li>
              <h3>Escolha a Quilometragem conforme a sua necessidade:</h3>
              <p>1.000 km, 2.000 km ou 3.000 km por mês.</p>
            </li>
            <li>
              <h3>Manutenção Preventiva</h3>
              <p>Inclusa conforme Manual do fabricante.</p>
            </li>
            <li>
              <h3>Seguro</h3>
              <p>O seguro está incluso para a proteção do veículo e de terceiros com coparticipação para os casos de Colisão, PT, Roubo e Furto.</p>
              <p>Assessoramos o cliente se desejar Carro reserva mesmo que não faça a opção no contrato.</p>
            </li>
            <li>
              <h3>Assistência 24 horas</h3>
              <p>Em todo Território Nacional para qualquer emergência com seu veículo.</p>
            </li>
            <li>
              <h3>Formas de pagamento</h3>
              <p>Pode ser Boleto Bancário ou Cartão de Crédito.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    `
    how.innerHTML = content
  
    const target = document.querySelector('#content')
    target.appendChild(how)
  }
})()