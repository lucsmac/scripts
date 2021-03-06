(() => {
  const createWppItem = ({ name, phone }) => {
    return `
       <a class="dropdown-item" style="color: black; text-decoration: none; font-weight: 400;" href="https://api.whatsapp.com/send?phone=${phone.replace('(', '').replace(')', '').replace(' ', '').replace('-', '')}" target="_blank">
          <div>
             <span style="font-weight: 600;">${name}: </span><br />
             <span class="dropdown-phone-formated">
                +${phone}
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
       name: "Way Belém - Umarizal",
       phone: "(91) 99836-0463"
     },
    {
       name: "Way Belém - Batista Campos",
       phone: "(91) 99836-0463"
     },
    {
       name: "Way Ananindeua",
       phone: "(91) 99836-0463"
     },
    {
       name: "Way Macapá",
       phone: "(96) 99184-2536"
     },
    {
       name: "Way Santarém",
       phone: "(93) 99124-4488"
     },
    {
       name: "Way São Paulo",
       phone: "(14) 99799-3799"
     },
 ]

 const createFloatWppList = (data) => {
  const btnWpp = document.createElement('a')
  btnWpp.innerHTML = `<img style="position: absolute; right: 5px; bottom: 5px;" class="icone" src="//legado.autoforce.com.br/mods/plugins/WhatsApp/img/whatsapp-icon.png" width="50" />`
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
 
  data.forEach((item) => {
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
     .dropup .dropdown-toggle:after {
        display: none !important;
     }
 
     .dropup .dropdown-menu.whatsapp-dropdown {
        width: 310px;
        position: absolute;
        box-shadow: 0 2px 4px rgba(0,0,0,.15);
        border-radius: 4px;
        margin-bottom: .5rem;
        left: -250px;
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
        width: 60px;
        height: 60px;
        bottom: 40px;
        right: 40px;
        background-color: #25d366;
        color: #fff;
        border-radius: 50px;
        text-align: center;
        box-shadow: 2px 2px 3px #999;
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
 }
 
 createFloatWppList(wppData)
})()