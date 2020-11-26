const mudarTextoPosVendas = () => {

  const getMenuElementByText = ({listOfElements, elementText, elementTag}) => {
      return [].find.call(listOfElements, (element) => {
          const currentElement = element.querySelector(elementTag)
          const currentElementText = currentElement.innerHTML.toUpperCase()
          
          return currentElementText.includes(elementText.toUpperCase())
      });
  }

  const menuItem = getMenuElementByText({
    listOfElements: document.querySelectorAll('.nav-item'),
    elementText: 'Pós-venda',
    elementTag: 'a'
  })

  if(menuItem) {
    menuItem.innerHTML = menuItem.innerHTML.replace('Pós-venda', 'Pós venda')

    menuItem.addEventListener('click', (e) => {
      e.preventDefault()

      menuItem.classList.toggle('show')
      menuItem.querySelector('.nav-simple-sub.card-collapse-deep').classList.toggle('show')
    })
  }
}

mudarTextoPosVendas()