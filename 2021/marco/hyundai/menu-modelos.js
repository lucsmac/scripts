(() => {
  document.addEventListener("DOMContentLoaded", function(event) {
    const createNewsVehiclesMenu = () => {
      const vehiclesCards = document.querySelectorAll('.vehicles-new__carousel .card.card--simple')
      const vehiclesData = Array.prototype.map.call(vehiclesCards, card => {
        const url = card.firstChild.getAttribute('href')
        const imgLink = card.querySelector('.card__header img').getAttribute('src')
        const vehicleName = card.querySelector('.card__title').innerText
        
        return {
          url,
          imgLink,
          vehicleName
        }
      })
      
      const defaultElement = ({url, imgLink, vehicleName}) => {
        return `
            <a href="${url}" class="card-collapse-deep__title">
                <img src="${imgLink}" style="max-height: 70px; max-width: 100%;" />
                <span class="nome-modelo" >${vehicleName}</span>
            </a>
        `
      }
      
      const menuWrapper = document.createElement('div')
      menuWrapper.classList.add('nav-simple-sub', 'card-collapse-deep', 'dropdown-menu')
      
      const menu = document.createElement('ul')
      menu.classList.add('news-vehicles-list')
      
      vehiclesData.forEach(vehicle => {
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
        Modelos
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
      
      const addStyle = (styles) => {
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
      
      addStyle`
        .news-vehicles-list {
          list-style: none;
          padding-left: 10px;
        }
      
        .news-vehicles-list__item {
          padding: 5px;
        }
        
        .nav-simple-sub {
          width: 350px;
          max-width: 350px;
        }

        .card-collapse-deep__title {
          display: grid;
          grid-template-columns: 100px 1fr;
          column-gap: 12px;
          align-items: center;
        }

        .card-collapse-deep_title span {
          font-weight: 600;
          font-size: 16px;
          line-height: 1.3;
        }
      `
    }

    createNewsVehiclesMenu()
  })
})()