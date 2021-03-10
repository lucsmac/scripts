(() => {
  if($(".page.page--home").length) {
    $('.institutional:not(.custom) .institutional__description').html($('.institutional:not(.custom) .institutional__description').text());
    $("h2.institutional__title").before('<img class="institutional__description__big__img" src="//legado.autoforce.com.br/mods/osten/bmw/jorge-yamaniski-neto.jpg">');
    $("h2.institutional__title").remove();

    const institutionalCustom = document.createElement('section')
    institutionalCustom.classList.add('institutional', 'custom')
    institutionalCustom.innerHTML = `<section class="institutional custom">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2>Nossos clientes e parceiros.</h2>
          </div>
          <div class="col-md-6">
            <div class="institutional__description">
              <p>
                <em>
                  <span class="institutional__title__aspas">"</span>Tenho muito orgulho de trabalhar junto a Osten Group pela transparência e preocupação aos seus clientes.<span class="institutional__title__aspas">"</span>
                </em>
                <br>
              </p>
              <p>
                <img class="custom-avatar" src="//legado.autoforce.com.br/mods/osten/bmw/leonardo-bertolini.jpg" alt="Leonardo Bertolini, Welook Digital"><span>- Leonardo Bertolini, Welook Digital</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>`
      
    $('.institutional').after(institutionalCustom)

    
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
      .institutional__title__aspas {
        font-size: 120px;
        position: absolute;
        font-family: cursive;
        line-height: 0.25em;
        left: -35px;
        top: 20px;
        opacity: 0.1;
      }
      
      span.institutional__title__aspas:last-child {
        top: 55px;
        left: 180px;
        transform: rotate(180deg);
      }
      
      .institutional__description p {
        position: relative;
      }
      
      .institutional__description h3 {
        margin-bottom: 20px;
      }
      
      img.institutional__description__big__img {
        width: 100%;
        height: 420px;
        object-fit: cover;
        object-position: top;
      }
      
      .institutional.custom {
        background-color: white;
      }
      
      .institutional.custom h2 {
        font-weight: 800;
        font-size: 40px;
      }
      
      .custom-avatar {
        height: 60px;
        width: 60px;
        border-radius: 50px;
        margin-right: 10px;
      }
      
      .custom span.institutional__title__aspas:last-child {
        top: 0;
      }
      
      section.institutional.custom .container {
        position: relative;
      }
      
      
      @media screen and (min-width: 768px) {
        .institutional {
          padding: 90px 0 70px;
        }
      
        section.institutional.custom .container::before {
          content: "";
          display: block;
          background-color: #262626;
          height: 5px;
          width: 150px;
          position: absolute;
          top: -66px;
          border-radius: 0;
        }
      }
      
      @media screen and (max-width: 768px) {
        .institutional.custom h2 {
          margin-bottom: 30px;
        }
      
        img.institutional__description__big__img {
          margin-bottom: 30px;
        }
      }
      `
    })
  }
})()