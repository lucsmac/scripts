document.addEventListener("DOMContentLoaded", function(event) {
  (() => {
  
    const getMenuElementByHref = ({listOfElements, elementHref, elementTag}) => {
        return [].find.call(listOfElements, (element) => {
            const currentElement = element.querySelector(elementTag)
            const currentElementHref = currentElement.getAttribute('href').toUpperCase()
            
            return currentElementHref.includes(elementHref.toUpperCase())
        });
    }
  
    const brands = document.querySelectorAll('.mini-brands-carousel.owl-carousel .item')
    const fipal = getMenuElementByHref({
      listOfElements: brands,
      elementHref: 'ttps://www.fipalseminovos.com.br',
      elementTag: 'a'
    })
  
    fipal.querySelector('a').style.setProperty('background-image', 'url("https://legado.autoforce.com.br/static/fipal-seminovos.png")')
  })()
})