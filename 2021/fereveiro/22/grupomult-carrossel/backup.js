
(() => {
  if(window.location.href.includes('/seminovos')) {
    const headerNew = 
    `<div class="row hidden-xs">
      <ul class="mini-brands-carousel owl-carousel">
        <li class="item">
          <a target="multicar" alt="Multicar" style="background-image: url(//legado.autoforce.com.br/genius/images/multicar-white.png); background-size: inherit;" href="//multicar.com.br">Mult Empreendimentos
          </a>
        </li>
        <li class="item">
          <a target="Nissan" alt="Nissan" style="background-image: url(//legado.autoforce.com.br/mods/grupomult/img/brands/Nissan_Kobe_.png); background-size: inherit;" href="/kobe-nissan">Kobe Nissan</a>
        </li>
        <li class="item">
          <a target="Mitsubishi" alt="Mitsubishi" style="background-image: url(//legado.autoforce.com.br/assets/images/multicar/mit.png); background-size: contain;" href="/multicar">Mit Multicar</a>
        </li>
        <li class="item">
          <a target="multicar" alt="Multicar Renault" style="background-image: url(//legado.autoforce.com.br/mods/tmp/logo-renault-2.png); background-size: inherit;" href="http://www.multicarrenault.com.br">Multicar Renault
          </a>
        </li>
        <li class="item">
          <a target="multcorretora" alt="MultCorretora" style="background-image: url(//legado.autoforce.com.br/mods/grupomult/img/brands/mult-corretora.png); background-size: inherit;" href="https://www.segurosmult.com.br">Mult Corretora
          </a>
        </li>
        <li class="item">
          <a target="multempreendimentos" alt="MultEmpreendimentos" style="background-image: url(//legado.autoforce.com.br/mods/grupomult/img/brands/mult-empreendimentos.png); background-size: inherit;" href="javascript:;">Mult Empreendimentos
          </a>
        </li>
      </ul>
    </div>`
    
    $('#showcase header .brands')[0].innerHTML = headerNew;
    
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
    #showcase header .row {
      display: block !important;
    }

    @media screen and (min-width: 768px){
      #showcase .showcase-grid, #showcase header {
        height: 600px !important;
      }
    }
    
    @media screen and (min-width: 992px){
      #showcase .showcase-grid, #showcase header {
        height: 700px !important;
      }
    }
    
    @media screen and (min-width: 1199px){
      #showcase .showcase-grid, #showcase header {
        height: 600px !important;
      }
    }`
  }
})()
