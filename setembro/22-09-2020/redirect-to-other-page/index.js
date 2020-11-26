const getMenuElementByText = ({listOfElements, elementText, elementTag}) => {
  return [].find.call(listOfElements, (element) => {
      const currentElement = element.querySelector(elementTag)
      const currentElementText = currentElement.innerText.toUpperCase()
      
      return currentElementText.includes(elementText.toUpperCase())
  });
}

const redirectPecas = () => {
  const menu = document.querySelector('.nav.nav--accordion-mobile')
  const menuItems = menu.querySelectorAll('li.nav-item.nav-simple__item')
  
  const submenu = getMenuElementByText({
    listOfElements: menuItems,
    elementText: 'Pós-venda',
    elementTag: 'a'
  })

  const pecas = getMenuElementByText({
    listOfElements: submenu.querySelectorAll('li'),
    elementText: 'Peças',
    elementTag: 'a'
  })

  const pecasLink = pecas.querySelector('a')
  
  pecasLink.setAttribute('target', '_blank')
  
  console.log(pecas)
}

redirectPecas()