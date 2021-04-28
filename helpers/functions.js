

const copyElement = ({ elementPicker }) => {
    const elementToCopy = (typeof elementPicker) === 'string' ? document.querySelector(elementPicker) : elementPicker
    
    return elementToCopy.cloneNode(true)
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

const debuggerConsoleLog = ({ title, item }) => {
    console.log(title)
    console.log(item)
}

const doThisWithThisNewDocumentContexts = ({ newDocumentContexts, toDo }) => {
    newDocumentContexts.forEach((newDocumentContext) => {
        toDo(newDocumentContext)
    })
}

const getMenuElementByText = ({listOfElements, elementText, elementTag}) => {
    return [].find.call(listOfElements, (element) => {
        const currentElement = element.querySelector(elementTag)
        const currentElementText = currentElement.innerText.toUpperCase()
        
        return currentElementText.includes(elementText.toUpperCase())
    });
}

const removeElementBySelector = ({ elementSelector }) => {
    const elementToRemove = (typeof elementSelector) === 'string' ? document.querySelector(elementSelector) : elementSelector
    const elementFather = elementToRemove.parentNode

    elementFather.removeChild(elementToRemove)
}

const isThisPage = ({ urlPiece }) => {
    const fullURL = window.location.href
    return fullURL.includes(urlPiece)
}

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

const changeCssProp = ({ selector, changes }) => {
    const el = (typeof selector) === 'string' ? document.querySelector(selector) : selector

    changes.forEach(({prop, value}) => {
      el.style.setProperty(prop, value)
    })
  }

document.addEventListener('readystatechange', event => { 

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
        // function
    }
});

document.addEventListener("DOMContentLoaded", function(event) {
    // função
});

const moveSection = (elToMove, elRef) => {
    const el = (typeof elToMove) === 'string' ? document.querySelector(elToMove) : elToMove
    const ref = (typeof elRef) === 'string' ? document.querySelector(elRef) : elRef
    
    ref.parentNode.insertBefore(el, ref)
}

const lastDayOfMonth = () => { 
    const addZero = (number) => String(number).length == 1 ? `0${0}` : number

    const today = new Date()
    const lastDayDirtyTemplate = new Date(today.getFullYear(), today.getMonth() + 1, 0)
    const day = addZero(lastDayDirtyTemplate.getDate())
    const month = addZero(lastDayDirtyTemplate.getMonth() + 1)
    const year = lastDayDirtyTemplate.getFullYear()
    const lastDay = `${day}/${month}/${year}`
    
    return lastDay
}

const getSimpleItem = (label) => {
    return Array.prototype.find.call(
        document.querySelectorAll('.nav-item'),
        (item) => item.innerText.toLowerCase().includes(label)
    )
}

const getDropdownItem = (label) => {
    return Array.prototype.find.call(
        document.querySelectorAll('.nav-item a[data-toggle="dropdown"]'),
        (item) => item.innerText.toLowerCase().includes(label)
    ).parentNode
}

const getSimpleItem = (label) => {
  if (!label) return null
  const items = Array.from(document.querySelectorAll('.nav-item'))
  const item = items.find(item => {
    const itemLabel = item.innerText.toLowerCase() ?
      item.innerText.toLowerCase() :
      item.querySelector('.nav-link')
        .innerHTML
        .replace('<i class="icon icon-dropdown icon-arrow-d"></i>', '')
        .toLowerCase()
        .trim()
        
    return itemLabel == label.toLowerCase()
  })

  return item || null
}
