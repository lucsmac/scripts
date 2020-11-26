(() => {

  const getMenuElementByText = ({listOfElements, elementText, elementTag}) => {
      return [].find.call(listOfElements, (element) => {
          const currentElement = element.querySelector(elementTag)
          const currentElementText = currentElement.innerText.toUpperCase()
          
          return currentElementText.includes(elementText.toUpperCase())
      });
  }

  const menuItems = document.querySelectorAll('.nav-item')
  const toChange = getMenuElementByText({
    listOfElements: menuItems,
    elementText: 'Serviços',
    elementTag: 'a'
  })

  toChange.innerHTML = toChange.innerHTML.replace('Serviços', 'Pós-venda')
})()