(() => {
  // seletor da lista de wpp no topo na versão desktop
  const whatsappWrapper = document.querySelector('#whatsapp-content-0 ul.list.list--header-phones.list--border-bottom')
  // seletor da lista de wpp no topo na versão mobile
  const whatsappMobileWrapper = document.querySelector('#whatsapp-content-mobile-0 ul.list.list--border-bottom')

  // método que remove o form
  const removeWppForm = (wrapper) => {
    wrapper.innerHTML = wrapper.innerHTML
  
    const items = wrapper.querySelectorAll('li')
  
    Array.prototype.forEach.call(items, (item) => {
      const tagLink = item.querySelector('a')
      const link = tagLink.getAttribute('data-link')
      tagLink.setAttribute('href', link)
      tagLink.setAttribute('target', '_blank')
    })
  }

  // chama o método para a lista do wpp desktop e mobile
  removeWppForm(whatsappWrapper)
  removeWppForm(whatsappMobileWrapper)
})()