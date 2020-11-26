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

  const wppCta = document.querySelector('.container.vehicles-new__ctas .vehicles-new__button-whatsapp')
  const link = 'google'
  if(wppCta) 
    removeForm(wppCta, link)
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

  const wppCta = document.querySelector('.container.vehicles-new__ctas .vehicles-new__button-whatsapp')
  const link = 'https://api.whatsapp.com/send?phone=551938647080&text=Ol%C3%A1!%20Tenho%20interesse%20neste%20produto.%20%23chave:%20a324M000005VSGeQAO'
  if(wppCta) 
    removeForm(wppCta, link)
})()