(() => {
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

  const highlightContent = ({ bgImage, title, text }) => {
    addStyle({
      styles: `
      #featured {
        background: url("${bgImage}") no-repeat center;
        background-size: cover;
        padding-top: 6rem;
        padding-bottom: 6rem;
      }
      
      section#featured .container-fluid {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: transparent;
      }

      section#featured .featured-content {
        margin-bottom: 10rem;
      }

      section#featured .featured-text {
        max-width: 400px;
        padding: 50px 40px;
        background-color: rgba(0, 0, 0, .5);
      }

      section#featured .featured-text h2 {
        font-size: 3rem;
        text-transform: uppercase;
        margin-top: 0;
        color: #FFF;
      }

      section#featured .featured-text p {
        color: #FFF;
      }

      section#featured .highlight {
        background-color: rgba(0, 0, 0, .5);
        padding: 30px 0;
        border: none;
      }

      section#featured .highlight + .highlight > div {
        border-left: 2px solid #999;
      }

      section#featured .highlight > div h3, section#featured .highlight > div h4 {
        color: #FFF;
        margin: 0;
      }

      @media screen and (max-width: 768px) {
        section#featured .featured-content {
          margin-bottom: 7rem;
        }

        section#featured .featured-text {
          max-width: 400px;
          padding: 40px 20px;
          background-color: rgba(0, 0, 0, .5);
        }

        section#featured .highlight {
          padding: 0 30px;
        }

        section#featured .highlight > div {
          padding: 30px 0;
        }
  
        section#featured .highlight + .highlight > div {
          border-left: none;
          border-top: 2px solid #999;
        }
      }
    `})

    const highlights = document.querySelector('#featured .container-fluid')
    const highlightText = document.createElement('div')
    highlightText.classList.add('featured-content')
    highlightText.innerHTML = 
    `<div class="row">
      <div class="featured-text">
        <h2>${title}</h2>
        <p>${text}</p>
      </div>
    </div>`

    if(highlights)
      highlights.insertBefore(highlightText, highlights.firstChild)

    const highlightsItems = document.querySelectorAll('#featured .row hgroup')
    Array.prototype.forEach.call(highlightsItems, highlightItem => {
      highlightItem.classList.add('highlight')
      highlightItem.innerHTML = `<div>${highlightItem.innerHTML}</div`
    })
  }

  highlightContent({
    bgImage: 'https://cdn.discordapp.com/attachments/750695916994035742/801513359093661756/unknown.png',
    title: 'XC40 Recharge<br />O híbrido Volvo',
    text: 'O XC40 Recharge totalmente elétrico permite uma experiência de condução sem emissões de carbono, mas poderosa. Feito para você e para o mundo que compartilhamos. Um SUV urbano de verdade. Perfeitamente conectado. Adaptado ao seu estilo de vida. É um XC40, recarregado para fornecer sua experiência de condução mais pessoal. Experimente um SUV totalmente elétrico e compacto que transporta e ajuda a proteger o que é mais importante para você. Com mais segurança, você pode aproveitar o passeio'
  })
})()