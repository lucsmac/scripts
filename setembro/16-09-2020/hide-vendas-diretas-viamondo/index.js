const hideVendasDiretas = () => {
  const getMenuElementByText = ({listOfElements, elementText, elementTag}) => {
    return [].find.call(listOfElements, (element) => {
        const currentElement = element.querySelector(elementTag)
        const currentElementText = currentElement.innerText.toUpperCase()
        
        return currentElementText.includes(elementText.toUpperCase())
    });
  }
  
  const listOfElements = document.querySelector('ul.nav.navbar-nav.menu-geral').childNodes
  
  const vendasDiretasElement = getMenuElementByText({
    listOfElements,
    elementText: 'Vendas Diretas',
    elementTag: 'a'
  })
  
  vendasDiretasElement.parentNode.removeChild(vendasDiretasElement)
}

hideVendasDiretas()