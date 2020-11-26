(() => {

  const VehiclesData = [
    {
      url: 'https://jeepway.com.br/way-cjdr/novos/renegade-2021',
      imgLink: 'https://production.autoforce.com/uploads/version/profile_image/5117/model_middle_comprar-std-1-8-automatico_4f8e611ea9.png',
      vehicleName: 'Renegade'
    },
    {
      url: 'https://jeepway.com.br/way-cjdr/novos/compass-2021',
      imgLink: 'https://production.autoforce.com/uploads/version/profile_image/5134/model_middle_comprar-sport-at-2-0-flex_81384a627a.png',
      vehicleName: 'Compass'
    },
    {
      url: 'https://jeepway.com.br/way-cjdr/novos/wrangler-2020',
      imgLink: 'https://production.autoforce.com/uploads/version/profile_image/4608/model_middle_comprar-sahara-4x4-2-0-at8-turbo-2p_891af899e3.png',
      vehicleName: 'Wrangler'
    },
    {
      url: 'https://jeepway.com.br/way-cjdr/novos/grand-cherokee-2020',
      imgLink: 'https://production.autoforce.com/uploads/version/profile_image/4359/model_middle_comprar-limited-at8-3-0-v6-turbo-diesel-4p_c2d58ed869.png',
      vehicleName: 'Grand Cherokee'
    },
    {
      url: 'https://jeepway.com.br/way-cjdr/novos/2500',
      imgLink: 'https://production.autoforce.com/uploads/version/profile_image/4707/model_middle_comprar-laramie_c82e2a9166.png',
      vehicleName: '2500'
    },
  ]
  
  const defaultElement = ({url, imgLink, vehicleName}) => {
    return `
        <a href="${url}" class="card-collapse-deep__title">
            <img src="${imgLink}" style="width: 80px;" />
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
})()