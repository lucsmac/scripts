// Backup

(() => {
  document.addEventListener("DOMContentLoaded", function(event) {
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
  })
})()

(() => {
  // document.addEventListener("DOMContentLoaded", function(event) {
    // seletor da lista de wpp no topo na versão desktop
    const whatsappWrapper = document.querySelector('#whatsapp-content-0 ul.list.list--header-phones.list--border-bottom')
    // seletor da lista de wpp no topo na versão mobile
    const whatsappMobileWrapper = document.querySelector('#whatsapp-content-mobile-0 ul.list.list--border-bottom')

    // método que remove o form
    const removeWppForm = (wrapper) => {
      const items = wrapper.querySelectorAll('li')
    
      Array.prototype.forEach.call(items, (item) => {
        const strong = item.querySelector('strong')
        if(!strong.innerText.includes('Seminovos')) {
          item.innerHTML = item.innerHTML
          const tagLink = item.querySelector('a')
          const link = tagLink.getAttribute('data-link')
          tagLink.setAttribute('href', link)
          tagLink.setAttribute('target', '_blank')
          console.log(strong)
        }
      })
    }

    // chama o método para a lista do wpp desktop e mobile
    removeWppForm(whatsappWrapper)
    removeWppForm(whatsappMobileWrapper)
  // })
})()

(() => {
  const removeForm = (element, linkApi, cssProperties = null) => {
    const newWppCta = document.createElement('a')
    const innerHTML= element.innerHTML
    element.classList.forEach(currClass => newWppCta.classList.add(currClass))

    newWppCta.setAttribute('href', linkApi)
    newWppCta.setAttribute('target', '_blank')

    const hasId = element.getAttribute('id')
    if(hasId)
      newWppCta.setAttribute('id', hasId)
  
    newWppCta.innerHTML = innerHTML

    cssProperties && cssProperties.forEach(({ prop, value}) => newWppCta.style.setProperty(prop, value))
  
    const targetPosition = element.parentNode
    targetPosition.removeChild(element)
    targetPosition.appendChild(newWppCta)
  }

  const wppCtaNews = document.querySelector('.container.vehicles-new__ctas .vehicles-new__button-whatsapp')

  const wppCtaUsed = document.querySelector('.container.used-models__ctas .vehicles-new__button-whatsapp')

  if(wppCtaNews && wppCtaUsed) {
    removeForm(wppCtaNews, wppCtaNews.dataset.link)
    removeForm(wppCtaUsed, wppCtaUsed.dataset.link, [{ prop: 'margin-left', value: '30px'}])
  }
})()

(() => {
  const removeForm = (element, linkApi, cssProperties = null) => {
    const newWppCta = document.createElement('a')
    const innerHTML= element.innerHTML
    element.classList.forEach(currClass => newWppCta.classList.add(currClass))

    newWppCta.setAttribute('href', linkApi)
    newWppCta.setAttribute('target', '_blank')

    const hasId = element.getAttribute('id')
    if(hasId)
      newWppCta.setAttribute('id', hasId)
  
    newWppCta.innerHTML = innerHTML

    cssProperties && cssProperties.forEach(({ prop, value}) => newWppCta.style.setProperty(prop, value))
  
    const targetPosition = element.parentNode
    targetPosition.removeChild(element)
    targetPosition.appendChild(newWppCta)
  }

  const findParent = (element, maxLoopings, condition) => {
    let count = 1
    let elementParent = element.parentNode
    while(count < maxLoopings && !condition(elementParent)) {
      count++
      elementParent = elementParent.parentNode
    }

    return elementParent.dataset["link"]
  }

  const condition = (element) => {
    if(element.dataset["link"]) {
      return true
    } else {
      return false
    }
  }

  document.addEventListener("DOMContentLoaded", function(event) {
    const wppCtaNews = document.querySelector('#new-vehicles-showcase_cta-box-button')
    const wppCtaUsed = document.querySelector('#used-vehicles-showcase_cta-box-button')

    if(wppCtaNews) {
      removeForm(wppCtaNews, findParent(wppCtaNews, 10, condition))
    }
    
    if(wppCtaUsed) {
      removeForm(wppCtaUsed, findParent(wppCtaUsed, 10, condition))
    }
  })
})()