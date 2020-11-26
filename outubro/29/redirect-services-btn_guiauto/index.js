(() => {
  const removeForm = (element, linkApi, blank = false, cssProperties = null) => {
    const newWppCta = document.createElement('a')
    const innerHTML= element.innerHTML
    element.classList.forEach(currClass => newWppCta.classList.add(currClass))

    newWppCta.setAttribute('href', linkApi)
    blank && newWppCta.setAttribute('target', '_blank')

    const hasId = element.getAttribute('id')
    if(hasId)
      newWppCta.setAttribute('id', hasId)
  
    newWppCta.innerHTML = innerHTML

    cssProperties && cssProperties.forEach(({ prop, value}) => newWppCta.style.setProperty(prop, value))
  
    const targetPosition = element.parentNode
    targetPosition.removeChild(element)
    targetPosition.appendChild(newWppCta)
  }

  const wppCta = document.querySelector('.showcase-services__panel-btn-schedule')
  const link = 'https://guiauto.autoforce.com.br/guiauto-chevrolet/empresa/agendamento-de-oficina'
  if(wppCta) 
  document.addEventListener('readystatechange', event => { 
    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
      removeForm(wppCta, link)
    }
  });
})()