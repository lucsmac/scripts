
const getMenuElementByText = ({listOfElements, elementText, elementTag}) => {
  return [].find.call(listOfElements, (element) => {
      const currentElement = element.querySelector(elementTag)
      const currentElementText = currentElement.innerText.toUpperCase()
      
      return currentElementText.includes(elementText.toUpperCase())
  });
}

const moveItemToSubmenu = () => {
  const menu = document.querySelector('.nav.nav--accordion-mobile').childNodes

  const elementToMove = getMenuElementByText({
    listOfElements: menu,
    elementText: 'Ofertas Únicas',
    elementTag: 'a'
  })

  const submenuRef = getMenuElementByText({
    listOfElements: menu,
    elementText: 'Novos',
    elementTag: 'a'
  })

  const elementContent = elementToMove.innerHTML

  const newElement = document.createElement('li')
  newElement.innerHTML = elementContent
  const newElementLink = newElement.querySelector('a')


  const submenuTarget = submenuRef.querySelector('.list.list--border-bottom')

  newElementLink.classList.remove('nav-link')
  newElementLink.classList.remove('nav-simple__link')
  newElementLink.classList.add('card-collapse-deep__title')
  
  elementToMove.parentNode.removeChild(elementToMove)
  submenuTarget.appendChild(newElement)
}

moveItemToSubmenu()