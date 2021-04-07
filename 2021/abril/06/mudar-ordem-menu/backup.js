(() => {
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
  
  const elementsPicker = [ { el_picker: 'Comprar', el_target: 'Pós-venda' }, { el_picker: 'Ofertas', el_target: 'Soluções' }, { el_picker: 'Pós-venda', el_target: 'Concessionária' } ]

  elementsPicker.forEach(({ el_picker, el_target }) => menuItemInsertBefore({ elementPicker: el_picker, elementTarget: el_target}))  
})()

//codecheat

{/* <script> */}
  (() => {
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
    
    // const elementsPicker = #codecheat%elements_to_move

    elementsPicker.forEach(({ el_picker, el_target }) => menuItemInsertBefore({ elementPicker: el_picker, elementTarget: el_target}))  
  })()
// </script>