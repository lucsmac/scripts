
const getMenuElementByText = ({listOfElements, elementText, elementTag}) => {
  return [].find.call(listOfElements, (element) => {
      const currentElement = element.querySelector(elementTag)
      const currentElementText = currentElement.innerText.toUpperCase()
      
      return currentElementText.includes(elementText.toUpperCase())
  });
}

const copyElement = ({ elementPicker }) => {
  const elementToCopy = (typeof elementPicker) === 'string' ? document.querySelector(elementPicker) : elementPicker
  
  return elementToCopy.cloneNode(true)
}

const removeElementBySelector = ({ elementSelector }) => {
    const elementToRemove = (typeof elementSelector) === 'string' ? document.querySelector(elementSelector) : elementSelector
    const elementFather = elementToRemove.parentNode

    elementFather.removeChild(elementToRemove)
}

const replaceElement = ({ elementToRemoveSelector, elementToReplaceSelector }) => {
  const elementToRemove = (typeof elementToRemoveSelector) === 'string' ? document.querySelector(elementToRemoveSelector) : elementToRemoveSelector
  const elementToReplace = (typeof elementToReplaceSelector) === 'string' ? document.querySelector(elementToReplaceSelector) : elementToReplaceSelector
  
  const nextElement = elementToRemove.nextSibling
  const father = elementToRemove.parentNode

  father.classList.remove('card-collapse')
  
  removeElementBySelector({ elementSelector: elementToRemove })
  father.insertBefore(elementToReplace, nextElement)
  
}

const moveItemToSubmenu = () => {
  const menu = document.querySelector('.nav.nav--accordion-mobile').childNodes

  const elementToMove = getMenuElementByText({
    listOfElements: menu,
    elementText: 'Ofertas Únicas',
    elementTag: 'a'
  })

  const elementToTranformInSubmenu = getMenuElementByText({
    listOfElements: menu,
    elementText: 'Novos',
    elementTag: 'a'
  })

  const submenuRef = getMenuElementByText({
    listOfElements: menu,
    elementText: 'Quem somos',
    elementTag: 'a'
  })

  const dropdownMenu = copyElement({ elementPicker: submenuRef })

  const dropdownOldText = dropdownMenu.innerHTML
  dropdownMenu.innerHTML = dropdownOldText.replace('Quem Somos', 'Novos')

  dropdownMenu.style.setProperty('--animation-index', '1')

  dropdownMenu.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show')

    const linkRef = dropdownMenu.querySelector('a')
    const linkCurrState = linkRef.getAttribute('aria-expanded')
    linkRef.setAttribute('area-expanded', !linkCurrState)

    const content = dropdownMenu.querySelector('.nav-simple-sub.card-collapse-deep.dropdown-menu')
    content.classList.toggle('show')
  })

  const dropdownContent = dropdownMenu.querySelector('ul.list.list--border-bottom')

  const newDropdownItem = ({ link, text }) => {
    const item = document.createElement('li')
    const linkContent = document.createElement('a')
    linkContent.setAttribute('href', link)
    linkContent.classList.add('card-collapse-deep__title')
    linkContent.innerText = text

    item.appendChild(linkContent)
    return item
  }

  const novosItem = newDropdownItem({ link: '/novos', text: 'Veículos' })
  const ofertasUnicasItem = newDropdownItem({ link: '/ofertas-unicas', text: 'Ofertas Únicas' })

  dropdownContent.innerHTML = ''
  dropdownContent.appendChild(novosItem)
  dropdownContent.appendChild(ofertasUnicasItem)

  removeElementBySelector({ elementSelector: elementToMove })
  
  replaceElement({ elementToRemoveSelector: elementToTranformInSubmenu, elementToReplaceSelector: dropdownMenu })

}

moveItemToSubmenu()