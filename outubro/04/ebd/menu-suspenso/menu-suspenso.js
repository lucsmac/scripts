const createNewsVehiclesMenu = () => {

  const VehiclesData = [
    {
      url: 'https://ebd.autoforce.com.br/miso/novos/hb20-nova-geracao',
      imgLink: 'https://production.autoforce.com/uploads/version/profile_image/1669/model_thumb_comprar-unique-1-0_62a2971c48.png',
      vehicleName: 'HB20'
    },
    {
      url: 'https://ebd.autoforce.com.br/miso/novos/hb20s-nova-geracao',
      imgLink: 'https://production.autoforce.com/uploads/version/profile_image/2590/model_thumb_comprar-unique-1-0_25897ebb31.png',
      vehicleName: 'HB20S'
    },
    {
      url: 'https://ebd.autoforce.com.br/miso/novos/hb20x-nova-geracao',
      imgLink: 'https://production.autoforce.com/uploads/version/profile_image/3157/model_thumb_comprar-style-com-bluemedia-1-6-manual_5699aa9bc5.png',
      vehicleName: 'HB20X 2019'
    },
    {
      url: 'https://ebd.autoforce.com.br/miso/novos/hb20-sport-nova-geracao',
      imgLink: 'https://production.autoforce.com/uploads/version/profile_image/1771/model_thumb_comprar-r-spec_f3534997e2.png',
      vehicleName: 'HB20 SPORT'
    },
  ]
  
  const defaultElement = ({url, imgLink, vehicleName}) => {
    return `
        <a href="${url}" class="card-collapse-deep__title">
            <img src="${imgLink}" style="height: 70px; margin-top: -10px;" />
            <span class="nome-modelo" style="font-weight: 600; font-size: 18px;"> &nbsp;&nbsp;&nbsp;${vehicleName}</span>
        </a>
    `
  }
  
  const menuWrapper = document.createElement('div')
  menuWrapper.classList.add('nav-simple-sub', 'card-collapse-deep', 'dropdown-menu')
  
  const menu = document.createElement('ul')
  menu.classList.add('news-vehicles-list')
  
  VehiclesData.forEach(vehicle => {
    const menuItem = document.createElement('li')
    menuItem.classList.add('news-vehicles-list__item', 'list--border-bottom')
    menuItem.innerHTML = defaultElement(vehicle)
  
    menu.appendChild(menuItem)
  })
  
  const copyElement = ({ elementPicker }) => {
    const elementToCopy = (typeof elementPicker) === 'string' ? document.querySelector(elementPicker) : elementPicker
    
    return elementToCopy.cloneNode(true)
  }
  
  const newDropdown = copyElement({ elementPicker: 'a[data-toggle="dropdown"'})
  newDropdown.setAttribute('href', '#')
  newDropdown.innerHTML = `
    Novos
    <i class="icon icon-dropdown icon-arrow-d"></i>
  `
  newDropdownWrapper = document.createElement('li')
  newDropdownWrapper.classList.add('nav-item', 'nav-simple__item')
  newDropdownWrapper.style.setProperty('--animation-index', '1')
  
  menuWrapper.appendChild(menu)
  newDropdownWrapper.appendChild(newDropdown)
  newDropdownWrapper.appendChild(menuWrapper)
  
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

  newDropdownWrapper.addEventListener('click', () => {
    newDropdownWrapper.classList.toggle('show')
    menuWrapper.classList.toggle('show')
  })
  
  const getMenuElementByText = ({listOfElements, elementText, elementTag}) => {
    return [].find.call(listOfElements, (element) => {
        const currentElement = element.querySelector(elementTag)
        const currentElementText = currentElement.innerHTML.toUpperCase()
        
        return currentElementText.includes(elementText.toUpperCase())
    });
  }
  
  
  const oldNew = getMenuElementByText({
    listOfElements: document.querySelectorAll('li.nav-item'),
    elementText: 'Novos',
    elementTag: 'a'
  })
  
  replaceElement({
    elementToRemoveSelector: oldNew, 
    elementToReplaceSelector: newDropdownWrapper
  })
  
  const addNewStyle = ({ styles }) => {
    const css = styles,
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');
    head.appendChild(style);
    style.setAttribute('type', 'text/css');
    if (style.styleSheet){
      // This is required for IE8 and below.
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }
  
  addNewStyle({ styles: `
    .news-vehicles-list {
      list-style: none;
      padding-left: 10px;
    }
  
    .news-vehicles-list__item {
      padding: 5px;
    }
  `
  })
}

createNewsVehiclesMenu()
