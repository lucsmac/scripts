(() => {
  const getMenuElementByText = ({listOfElements, elementText, elementTag}) => {
    return [].find.call(listOfElements, (element) => {
        const currentElement = element.querySelector(elementTag)
        const currentElementText = currentElement.innerText.toUpperCase()
        
        return currentElementText.includes(elementText.toUpperCase())
    });
  }

  const menuItems = document.querySelectorAll('.nav-item')
  const toMove = getMenuElementByText({
    listOfElements: menuItems,
    elementText: 'Vendas Diretas',
    elementTag: 'a'
  })
  const refEl = getMenuElementByText({
    listOfElements: menuItems,
    elementText: 'Pós-venda',
    elementTag: 'a'
  })

  refEl.parentNode.insertBefore(toMove, refEl)
})()