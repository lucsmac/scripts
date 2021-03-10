(() => {
  const createWppItem = ({ name, phone, formatedPhone }) => {
    return `
        <a class="dropdown-item" style="color: black; text-decoration: none; font-weight: 400;" href="https://api.whatsapp.com/send?phone=${phone}" target="_blank">
          <div>
              <span style="font-weight: 600;">${name}: </span><br />
              <span class="dropdown-phone-formated">
                +${formatedPhone}
              </span>
          </div>
          <img src="//legado.autoforce.com.br/mods/plugins/WhatsApp/img/whatsapp-icone-7.png" width="20" style="margin-right: 10px;" />
        </a>
    `
  }

  const addNewStyle = ({ styles }) => {
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

  const wppData = [
    {
        name: "Seminovos Audi Alphaville",
        phone: "1194749-8658",
        formatedPhone: "(11)  94749-8658"
      },
      {
        name: "Seminovos Brooklin",
        phone: "1199999-5155",
        formatedPhone: "(11) 99999-5155"
      },
      {
        name: "Seminovos Butantã",
        phone: "1199852-5079",
        formatedPhone: "(11) 99852-5079"
      },
      {
        name: "Seminovos Morumbi",
        phone: "1199383-6482",
        formatedPhone: "(11) 99383-6482"
      },
  ]

  const btnWpp = document.createElement('a')
  btnWpp.innerHTML = `Fale conosco<i class="icon icon-dropdown icon-arrow-d open" style="position: absolute; right: 10px;"></i>`
  btnWpp.classList.add('dropdown-toggle')
  btnWpp.setAttribute('type', 'button')
  btnWpp.setAttribute('data-toggle', 'dropdown')
  btnWpp.setAttribute('aria-haspopup', 'true')
  btnWpp.setAttribute('aria-expanded', 'false')

  const wppRow = document.createElement('div')
  wppRow.classList.add('dropdown-menu', 'whatsapp-dropdown')

  const wppWrapper = document.createElement('div')
  wppWrapper.classList.add('dropup')

  wppWrapper.appendChild(btnWpp)

  wppData.forEach((item) => {
    const wppItem = document.createElement('div')
    const wppContent = createWppItem(item)
    wppItem.innerHTML = wppContent
    wppItem.classList.add('row')

    wppRow.appendChild(wppItem)
    wppWrapper.appendChild(wppRow)
  })
  wppWrapper.addEventListener('click', (e) => {
    wppWrapper.classList.toggle('open')
    const btn = wppWrapper.querySelector('.dropdown-toggle')
    btn.setAttribute('aria-expanded', !(btn.getAttribute('aria-expanded')))
  })

  addNewStyle({styles: `
    .dropup .dropdown-toggle {
      text-align: left;
      font-weight: 600;
      color: rgb(255, 255, 255);
      width: 100%;
      padding: 10px;
    }

    .dropup .dropdown-toggle .icon {
      transition: all 0.2s ease;
    }

    .dropup.open .dropdown-toggle .icon {
      transform: rotate(-180deg);
    }

    .dropup .dropdown-toggle:after {
        display: none !important;
    }

    .dropup .dropdown-menu.whatsapp-dropdown {
        width: 280px;
        position: absolute;
        box-shadow: 0 2px 4px rgba(0,0,0,.15);
        border-radius: 4px;
        margin-bottom: .5rem;
    }

    .whatsapp-dropdown .dropdown-item {
        padding: 12px 24px;
        transition: all .3s ease;
    }

    .whatsapp-dropdown .dropdown-item:hover {
        padding-left: 28px;
        transition: all .3s ease;
    }

    .dropup {
        position: fixed;
        z-index: 100000;
        bottom: 15px;
        left: 15px;
        background-color: #4ec859;
        color: #fff;
        text-align: center;
        box-shadow: 2px 2px 3px #999;
        width: 290px;
        transition: all .2s ease;
    }

    .dropup:hover {
      background-color: #45af4e;
    }

    .open>.whatsapp-dropdown {
        display: block!important;
    }

    .dropdown-item {
        border-bottom: 1px solid #e8e8e8;
        display: flex;
        justify-content: space-between;
    }

    .dropdown-item img {
        width: 35px;
        height: 35px
    }

    .dropdown-menu.whatsapp-dropdown > .row {
      margin: 0;
      min-width: 200px !important;
      background-color: #F8F9F9;
    }

    .dropdown-phone-formated {
      opacity: .8;
    }
  `})

  document.body.appendChild(wppWrapper)
})()
