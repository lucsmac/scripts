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
    elementText: 'Pós-venda',
    elementTag: 'a'
  })

  toChange.innerHTML = toChange.innerHTML.replace('venda', 'vendas')

  toChange.addEventListener('click', (e) => {
    toChange.setAttribute('area-expand', !!toChange.getAttribute('area-expand'))
    toChange.classList.toggle('show')
    toChange.querySelector('.dropdown-menu').classList.toggle('show')
  })
  
})()