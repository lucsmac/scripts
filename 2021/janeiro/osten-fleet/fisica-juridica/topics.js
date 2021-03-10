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
      .physical__topics {
        padding: 4rem 0;
      }

      .physical__topics ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
        padding: 0;
        row-gap: 100px;
        column-gap: 50px;
        list-style: none;
        position: relative;
        z-index: 100000;
      }

      .physical__topics p {
        color: #000;
      }

      .physical__topics img {
        width: 85%;
      }
    `
  
    const physical = document.createElement('section')
    physical.classList.add('physical')
    const content = `
    <div class="physical__content-wrapper">
      <div class="container">
        <div class="physical__topics">
          <ul>
            <li>
              <img src="https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/topics/vantagens-fisica-4-1.png" alt="Vantagens"/>
              <p>Prezamos pela satisfação dos nossos clientes e contamos com profissionais capacitados, a fim de contribuir na escolha dos melhores veículos de acordo as suas necessidades.</p>
            </li>
            <li>
              <img src="https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/topics/vantagens-fisica-4-2.png" alt="Vantagens"/>
              <p>Nossa equipe está à disposição a qualquer hora, fornecendo assistência técnica e emergencial 24 horas em casos de sinistros e/ou problemas mecânicos.</p>
            </li>
            <li>
              <img src="https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/topics/vantagens-fisica-4-3.png" alt="Vantagens"/>
              <p>Com informação precisa de cada cliente, nossa central de atendimento, conhece as particularidades de cada contrato e está sempre disponível a colaborar.</p>
            </li>
            <li>
              <img src="https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/topics/vantagens-fisica-4-4.png" alt="Vantagens"/>
              <p>Trabalhamos de forma preventiva, chamando nossos clientes a efetuar suas manutenções de forma antecipada, cuidando do que há de mais importante nas organizações, seus colaboradores.</p>
            </li>
            <li>
              <img src="https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/topics/vantagens-fisica-4-5.png" alt="Vantagens"/>
              <p>Deixe de se preocupar com os trâmites relacionados a documentação e multas da sua frota. Garantimos que todos os veículos estejam sempre disponíveis para utilização.</p>
            </li> 
            <li>
              <img src="https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/topics/vantagens-fisica-4-6.png" alt="Vantagens"/>
              <p>Efetuamos revisões preventivas para garantir total segurança e conforto de nossos clientes. Contamos com uma ampla rede credenciada de parceiros em todo o território nacional.</p>
            </li>
            <li>
              <img src="https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/topics/vantagens-fisica-4-7.png" alt="Vantagens"/>
              <p>A Osten Fleet dispõe de veículos reservas em caso de manutenção, panes e sinistros.</p>
            </li>
            <li>
              <img src="https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/topics/vantagens-fisica-4-8.png" alt="Vantagens"/>
              <p>Com a correria diária, nem sempre é possível você parar para levar o veículo para revisões periódicas. Pensando nisso disponibilizamos aos nossos clientes este serviço para qualquer local do Brasil.</p>
            </li>
            <li>
              <img src="https://legado.autoforce.com.br/mods/osten/osten-fleet/assets/images/topics/vantagens-fisica-4-9.png" alt="Vantagens"/>
              <p>Esteja informado o tempo todo com as mais modernas e precisas ferramentas do mercado.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    `
    physical.innerHTML = content
  
    const target = document.querySelector('#content')
    target.appendChild(physical)
  }
})()