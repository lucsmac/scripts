(() => {
  document.addEventListener("DOMContentLoaded", function(event) {
    const removeFormWpp = (wppTitle) => {
      ['#wpp-content-0', '#wpp-content-mobile-0'].forEach(wrapper => {
        const whatsItems = document.querySelectorAll(`${wrapper} li.header__card-whatsapp-item`)
        Array.prototype.forEach.call(whatsItems, (whatsItem) => {
          if(whatsItem.innerHTML.includes(wppTitle)) {
            const linkElement = whatsItem.querySelector('a')
            const link = linkElement.getAttribute('data-link')
            whatsItem.innerHTML = whatsItem.innerHTML.replace('href="#"', `href="${link}" target="_blank"`)
          }
        })
      }) 
    }

    removeFormWpp('Peças, Funilaria e Oficina')
  })
})()