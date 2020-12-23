const addFCAContentBlock = (dealerName, links) => {
  
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

  const elRef = document.querySelector('.institutional')

  const contentBlock = document.createElement('div')
  contentBlock.classList.add('section-componet', 'dealer-solutions', 'container')

  contentBlock.innerHTML = `
  <h1>
      A <span>${dealerName}</span> tem a solução certa para você
    </h1>
    <ul class="dealer-solutions__items">
      <li>
        <a class="dealer-solutions__item dealer-solutions__item--1" href="${links[0]}">
          Peças    
        </a>
      </li>
      <li>
        <a class="dealer-solutions__item dealer-solutions__item--2" href="${links[1]}">
          Serviços    
        </a>
      </li>
      <li>
        <a class="dealer-solutions__item dealer-solutions__item--3" href="${links[2]}">
          Vendas Diretas   
        </a>
      </li>
      <li>
        <a class="dealer-solutions__item dealer-solutions__item--4" href="${links[3]}">
          Consórcio    
        </a>
      </li>
    </ul>
  `

  elRef.parentNode.insertBefore(contentBlock, elRef)

  addStyle({
    styles: `
      .section-componet.dealer-solutions {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 60px 0;
      }

      .section-componet.dealer-solutions h1 {
        color: #212651;
        text-transform: uppercase;
        margin-bottom: 50px;
        font-weight: bold;
        font-size: 2.25rem;
        align-self: flex-start;
      }

      .section-componet.dealer-solutions h1 span {
        color: #FF1430;
      }

      .dealer-solutions__items {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 0 25px;
        list-style: none;
        padding: 0;
      }

      .dealer-solutions__items li:hover a {
        padding-bottom: 42px;
        transition: all 0.3s ease;
      }

      .dealer-solutions__item {
        width: 240px;
        height: 287px;
        display: flex;
        align-items: flex-end;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        padding: 34px 25px;
        color: #FFF;
        font-weight: bold;
        text-decoration: none;
        font-size: 1.75rem;
        line-height: 1;
        transition: all 0.3s ease;
      }

      .dealer-solutions__item:hover {
        color: #FFF;
        font-weight: bold;
        text-decoration: none;
        font-size: 1.75rem;
      }
        
      .dealer-solutions__item--1 {
        background-image: url("https://legado.autoforce.com.br/static/fca-content-block/pecas-desktop.png");
      }

      .dealer-solutions__item--2 {
        background-image: url("https://legado.autoforce.com.br/static/fca-content-block/servicos-desktop.png");
      }

      .dealer-solutions__item--3 {
        background-image: url("https://legado.autoforce.com.br/static/fca-content-block/vendas-diretas-desktop.png");
      }

      .dealer-solutions__item--4 {
        background-image: url("https://legado.autoforce.com.br/static/fca-content-block/consorcio-desktop.png");
      }

      @media screen and (max-width: 1200px) {
        .dealer-solutions__item {
          width: 200px;
          height: 240px;
        }
      }

      @media screen and (max-width: 992px) {
        .dealer-solutions__item {
          width: 160px;
          height: 190px;
          padding: 20px 14px;
        }

        .dealer-solutions__items li:hover a {
          padding-bottom: 27px;
        }
      }

      @media screen and (max-width: 768px) {
        .dealer-solutions__item {
          width: 290px;
          height: 167px;
          padding: 30px;
        }

        .dealer-solutions__items li:hover a {
          padding-bottom: 35px;
        }

        .dealer-solutions__items {
          grid-template-columns: 1fr;
          gap: 25px 0;
        }
        
        .dealer-solutions__item--1 {
          background-image: url("https://legado.autoforce.com.br/static/fca-content-block/pecas-mobile.png");
        }

        .dealer-solutions__item--2 {
          background-image: url("https://legado.autoforce.com.br/static/fca-content-block/servicos-mobile.png");
        }

        .dealer-solutions__item--3 {
          background-image: url("https://legado.autoforce.com.br/static/fca-content-block/vendas-diretas-mobile.png");
        }

        .dealer-solutions__item--4 {
          background-image: url("https://legado.autoforce.com.br/static/fca-content-block/consorcio-mobile.png");
        }

        .section-componet.dealer-solutions h1 {
          padding: 0 10%;
          font-size: 2rem;
        }
      }
    `
  })
}

// Nome da concessionária -> substituir o valor entre as aspas simples
const dealerName = 'Dealer Fiat'
const links = [
  '#',
  '#',
  '#',
  '#'
]
addContentBlock(dealerName, links)