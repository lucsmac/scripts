(() => {
  const table = document.createElement('div')
  table.setAttribute('id', 'table')
  const tableInnerHTML = `
  <div class="title">
    <h1 class="text-center">Revisão Programada</h1>
    <p class="text-center">Realize sua revisão dentro do prazo e mantenha seu veículo na garantia de fábrica.</p>
</div>
<div class="content">
  <div>
      <h4></h4>
      <p>Consulte a tabela, compare com a quilometragem do seu veículo e saiba quando está na hora de realizar as suas revisões. Para realizar o agendamento, por gentileza, preencha o formulário acima.</p>
  </div>
  <div>
    <img alt="Imagem de bloco" src="https://legado.autoforce.com.br/genius/images/tabela-lp-jpg.jpg" />
  </div>
</div>`

table.innerHTML = tableInnerHTML

const location = document.querySelector('#featured')
location.parentNode.insertBefore(table, location)

const addStyle = ({ styles }) => {
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

addStyle({
  styles: `
    #table {
      padding: 80px 9rem;
    }

    #table .title {
      display: flex;
      flex-direction: column;
      align-items: center;

      padding-bottom: 60px;
    }
    
    #table .title h1 {
      font-size: 5rem;
      line-height: 1;
      margin: 0;
    }

    #table .title p {
      text-align: center;
      font-size: 1.5rem;
    }

    #table .content {
      display: grid;
      align-items: center;
      grid-template-columns: 50% 50%;
    }

    #table .content p {
      max-width: 500px;
      width: 100%;
      font-size: 2rem;
    }

    #table .content img {
      max-width: 100%;
      width: 100%;
    }

    @media screen and (max-width: 868px) {
      #table {
        padding: 80px 5%;
      }

      #table .title {
        padding-bottom: 0px;
      }

      #table .content {
        justify-items: center;
        grid-template-columns: 1fr;
      }

      #table .content p {
        text-align: center;
        font-size: 1.5rem;
        padding-bottom: 30px;
      }
    }

    @media screen and (max-width: 562px) {
      #table .title h1 {
        font-size: 3.5rem;
      }
    }
  `
})

})()

(() => {
  const select = document.querySelector('#form-interest')
  let parent = select.parentNode
  // adicionar um count para impedir que o laço se repita mais que 10 vezes
  let count = 0
  while(count < 10 && !parent.classList.contains('form-group')) {
    parent = parent.parentNode
    count++
  }
  parent.parentNode.removeChild(parent)
})()