(() => {
  const createMenuItem = (link, title) => {
    const menuItem = document.createElement('li')
    menuItem.classList.add('nav-item', 'nav-simple__item')
    menuItem.innerHTML = `<a href="${link}" class="nav-link nav-simple__link">${title}</a>`

    return menuItem
  }

  const removeMenuItem = (elToRemove) => {
    elToRemove.parentNode.removeChild(elToRemove)
  }

  const nav = document.querySelector('.nav')
  const yourVehicle = document.querySelector('.nav-item a[href="/empresa/seuveiculo"]').parentNode
  const acessories = document.querySelector('.nav-item li a[href="/acessorios"]').parentNode
  
  nav.insertBefore(createMenuItem('/acessorios', 'Acessórios'), yourVehicle)
  removeMenuItem(acessories)
})()