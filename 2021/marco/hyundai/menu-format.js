(() => {
  const createSubmenu = (title) => {
    const submenu = `
    <li id="submenu-${title.toLowerCase()}" style="--animation-index: 8" class="nav-item nav-simple__item">
      <a href="#" class="nav-link nav-simple__link" data-toggle="dropdown" aria-expanded="false"> ${title} <i class="icon icon-dropdown icon-arrow-d"></i></a>
      <div class="nav-simple-sub card-collapse-deep dropdown-menu">
        <ul class="list list--border-bottom">
        </ul>
      </div>
    </li>
    `

    const nav = document.querySelector('.nav-simple .nav')
    nav.insertAdjacentHTML('beforeend', submenu)

    const submenuRef = document.querySelector(`#submenu-${title.toLowerCase()}`)
    submenuRef.addEventListener('click', () => {
      submenuRef.classList.toggle('show')
      submenuRef.querySelector('.dropdown-menu').classList.toggle('show')
    })
  }

  const createSubItem = (link, title, submenu) => {
    const subItem = document.createElement('li')
    subItem.classList.add('card-collapse-deep__title')
    
    subItem.innerHTML = `<a href="${link}" class="card-collapse-deep__title"> ${title} </a>`

    submenu.querySelector('ul').insertAdjacentElement('beforeend', subItem)
  }

  const moveToSubmenu = (element, submenu) => {
    const subItem = document.createElement('li')
    subItem.classList.remove('nav-item', 'nav-simple__item')
    subItem.classList.add('card-collapse-deep__title')
    subItem.innerHTML = element.innerHTML

    submenu.querySelector('.list').appendChild(subItem)
    element.parentNode.removeChild(element)
  }

  const getDropdownItem = (label) => {
    const items = document.querySelectorAll('.nav-item a[data-toggle="dropdown"]')
    return Array.prototype.find.call(items, (item) => 
      item.innerText.toLowerCase().includes(label)
    ).parentNode
  }

  const getSimpleItem = (label) => {
    return Array.prototype.find.call(
      document.querySelectorAll('.nav-item'),
      (item) => item.innerText.toLowerCase().includes(label)
    )
  }

  createSubmenu('Ofertas')

  const offers = getDropdownItem('ofertas')
  const solutions = getDropdownItem('soluções')
  const afterSale = getDropdownItem('pós-venda')
  const usedModels = getSimpleItem('seminovos')
  const consortia = getSimpleItem('consórcios')

  moveToSubmenu(usedModels, offers)
  moveToSubmenu(consortia, solutions)
  createSubItem('/servicos/revisao', 'Revisão programada', afterSale)
})()