(() => {
  const customContent = ({ bgImage, title, text, buttonText, buttonLink }) => {
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
      #version {
        display: none;
      }
      
      #custom-content {
        width: 100%;
        position: relative;
      }

      #custom-content .background > div:first-child {
        background: #333;
      }

      #custom-content .background > div:nth-child(2) {
        background: url("${bgImage}") no-repeat center;
        background-size: cover;
      }

      #custom-content .custom-content__text {
        background: #333;
        display: flex;
        flex-direction: column;
        align-items: start;
        padding: 7rem 4rem;
      }

      #custom-content .custom-content__img-wrapper {
        max-height: 350px;
        overflow: hidden;
        display: flex;
        align-items: center;
        width: 100%;
      }

      #custom-content .custom-content__img-wrapper img {
        display: block;
        width: 100%;
      }

      #custom-content .custom-content__text h2, #custom-content .custom-content__text p {
        color: #FFF;
      }

      #custom-content .custom-content__text h2 {
        font-size: 3.5rem;
        margin: 0;
        text-transform: uppercase;
        font-weight: 300;
        margin-bottom: 4rem;
      }

      #custom-content .custom-content__text p {
        font-size: 1.65rem;
        max-width: 450px;
        margin-bottom: 4rem;
      }

      #custom-content .custom-content__text a {
        padding: 15px 40px;
        color: #FFF;
        border: 2px solid #FFF;
      }

      #custom-content .custom-content__text a span {
        color: #FFF;
        font-size: 1.75rem;
      }

      #custom-content .custom-content__text a:hover {
        background-color: #FFF;
        text-decoration: none;
      }

      #custom-content .custom-content__text a:hover span {
        color: #000;
      }

      @media screen and (min-width: 768px) {
        #custom-content .background {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          height: 800px;
        }

        #custom-content .custom-content {
          position: absolute;
          top: 0;
          width: 100%;   
          height: 800px; 
        }

        #custom-content .custom-content .row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr;
          height: 100%;
        }

        #custom-content .custom-content__text {
          grid-column: 1 / 2;
          grid-row: 1 / 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: start;
          padding: 150px 3rem;
        }

        #custom-content .custom-content .row .custom-content__img-wrapper {
          display: none;
        }

        #custom-content .custom-content__text h2, #custom-content .custom-content__text p {
          max-width: 400px;
        }
      }
    `})

    const moreProducts = document.querySelector('#more-product')
    const chargers = document.createElement('section')
    chargers.id = 'custom-content'
    chargers.innerHTML = 
    `<div class="background">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="custom-content">
      <div class="row">
        <div class="custom-content__text">
          <h2>${title}</h2>
          <p>${text}</p>
          <a href="${buttonLink}" target="_blank"><span>${buttonText}</span></a>
        </div>
        <div class="custom-content__img-wrapper">
          <img src="${bgImage}"/>
        </div>
      </div>
    </div>`

    if(moreProducts)
      moreProducts.parentElement.insertBefore(chargers, moreProducts)
  }

  customContent({
    bgImage: 'https://cdn.discordapp.com/attachments/750695916994035742/801523256238145536/landscape-2_final_a.png',
    title: 'Texto institucional',
    text: 'O XC40 Recharge totalmente elétrico permite uma experiência de condução sem emissões de carbono, mas poderosa. Feito para você e para o mundo que compartilhamos. Um SUV urbano de verdade. Perfeitamente conectado. Adaptado ao seu estilo de vida. É um XC40, recarregado para fornecer sua experiência de condução mais pessoal.',
    buttonText: 'Onde recarregar meu XC40',
    buttonLink: 'https://developer.plugshare.com/docs/',
  })
})()