(() => {
  if(window.location.href.includes('/servicos')){
    const servicesBtns = document.querySelectorAll('.list-services .list-services__item a.btn.card__cta')

    Array.prototype.forEach.call(servicesBtns, (btn) => {
      btn.setAttribute('href', 'https://guiauto.autoforce.com.br/guiauto-chevrolet/empresa/agendamento-de-oficina')
    })
  }
})()

(() => {
  document.addEventListener("DOMContentLoaded", function(event) {
    const getMenuElementByText = ({listOfElements, elementText, elementTag}) => {
      return [].find.call(listOfElements, (element) => {
          const currentElement = element.querySelector(elementTag)
          const currentElementText = currentElement.innerHTML.toUpperCase()
          
          return currentElementText.includes(elementText.toUpperCase())
      });
    }

    const wppWrapper = document.querySelector('#whatsapp-content-0')
    const duplicatedItem = getMenuElementByText({
      listOfElements: wppWrapper.querySelectorAll('li.header__card-whatsapp-item'),
      elementText: '+55 (31) 99879-0020',
      elementTag: 'span'
    })
    
    duplicatedItem.parentNode.removeChild(duplicatedItem.nextSibling)

    wppWrapper.innerHTML = wppWrapper.innerHTML.replace('href="#"', 'href="https://api.whatsapp.com/send?phone=5531998790020&text=Ol%C3%A1!" target="_blank"')
  });
})()
