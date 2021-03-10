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
      .buy__content-wrapper {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        min-height: 80vh;
        background: #FFF;
      }
  
      .buy {
        position: relative;
      }
  
      .buy::before {
        content: "";
        display: block;
        width: 500px;
        height: 500px;
        border-radius: 300px;
        border: 90px solid #EDB713;
        position: absolute;
        z-index: 99999;
        top: 0;
        right: 0;
        transform: translate3d(50%, -50%, 0);
      }
  
      .buy__content-text {
        background: #EDB713;
      }
  
      .buy__content-text--wrapper {
        color: #000;
        max-width: calc(1170px / 2);
        padding: 0;
        padding-right: 5rem;
        margin-left: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
      }
  
      .buy__content-text h3 {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.2rem;
        display: flex;
        flex-direction: column;
        color: #000;
      }
  
      .buy__content-text h3::after {
        content: "";
        display: block;
        width: 60px;
        height: 4px;
        background-color: #FFF;
        margin-top: 15px;
      }
  
      .buy__content-text h2 {
        font-size: 3rem;
        margin-top: 15px;
        line-height: 1.2;
        margin: 0;
        margin-bottom: 2rem;
        color: #000;
      }
  
      .buy__content-text h2 span {
        color: #FFF;
      }
  
      .buy__topics {
        background-color: #FFF;
        max-width: calc(1170px / 2);
        padding: 0;
        padding-left: 5rem;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
  
      .buy__topics ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        padding: 0;
        list-style: none;
      }

      .buy__topics span {
        font-size: 2.5rem;
        font-weight: bold;
        color: #000;
      }

      .buy__topics span::after {
        content: "";
        display: block;
        width: 60px;
        height: 4px;
        background-color: #EDB713;
        margin-top: 15px;
      }

      .buy__topics p {
        color: #000;
      }
    `
  
    const buy = document.createElement('section')
    buy.classList.add('buy')
    const content = `
    <div class="buy__content-wrapper">
      <div class="buy__content-text">
        <div class="buy__content-text--wrapper">
          <h3>Assinatura</h3>
          <h2>Como contratar em <span>5 passos</span></h2>
        </div>
      </div>
      <div class="buy__topics">
        <ul>
          <li>
            <span>1.</span>
            <p>Preencher formulário e enviar documentos.</p>
          </li>
          <li>
            <span>2.</span>
            <p>Dar aceite na proposta do veículo desejado.</p>
          </li>
          <li>
            <span>3.</span>
            <p>Assinatura eletrônica ou física do contrato.</p>
          </li>
          <li>
            <span>4.</span>
            <p>Pagamento da primeira parcela para dar start no pedido do veículo.</p>
          </li>
          <li>
            <span>5.</span>
            <p>Recebimento ou retirada do veículo conforme prazo de entrega da proposta.</p>
          </li>
        </ul>
      </div>
    </div>
    `
    buy.innerHTML = content
  
    const target = document.querySelector('#content')
    target.appendChild(buy)
  }
})()