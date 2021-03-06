
sol.onReady(function () {
  const getMenuElementByText = ({listOfElements, elementText}) => {
      return [].find.call(listOfElements, (element) => {
          const currentElement = element.querySelector('a')
          const currentElementText = currentElement.innerText.toUpperCase()
          return currentElementText === elementText.toUpperCase()
      });
  }

  const menuItemInsertBefore = ({elementPicker, elementTarget}) => {
      const menu = document.querySelector('ul.nav')
      const links = menu.childNodes
      const elementToChange = getMenuElementByText({ listOfElements: links, elementText: elementPicker})
      const elementReferency = getMenuElementByText({ listOfElements: links, elementText: elementTarget})
      menu.removeChild(elementToChange)
      menu.insertBefore(elementToChange, elementReferency)
  }

  menuItemInsertBefore({ elementPicker: 'Vendas diretas', elementTarget: 'Consórcios'})
  menuItemInsertBefore({ elementPicker: 'Seminovos', elementTarget: 'Oficina'})
  menuItemInsertBefore({ elementPicker: 'Funilaria e Pintura', elementTarget: 'Institucional'})
  menuItemInsertBefore({ elementPicker: 'Peças e acessórios', elementTarget: 'Funilaria e Pintura'})
})