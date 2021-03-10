(() => {
  document.addEventListener("DOMContentLoaded", function(event) {
    const vehiclesMenu = document.createElement('li')
    vehiclesMenu.classList.add('nav-item', 'nav-simple__item')
    vehiclesMenu.id = 'vehicles-custom-menu'
    vehiclesMenu.innerHTML = `<a href="/osten-bmw#" class="nav-link nav-simple__link" data-toggle="dropdown"> Veículos <i class="icon icon-dropdown icon-arrow-d"></i></a>
  <div class="nav-simple-sub card-collapse-deep dropdown-menu">
    <ul class="list list--border-bottom">
      
    </ul>
  </div>`

    const nav = document.querySelector('.nav-simple .nav')
    const secondChild = nav.firstChild.nextSibling
    nav.insertBefore(vehiclesMenu, secondChild)

    const createDropdownSubitemsList = (items) => {
      const target = document.querySelector('#vehicles-custom-menu ul.list')

      items.forEach(item => {
        item.classList.remove('nav-item', 'nav-simple__item')
        item.querySelector('a').classList.remove('nav-link', 'nav-simple__link')
        item.querySelector('a').classList.add('card-collapse-deep__title')
        target.appendChild(item)
      })
    }

    const navItems = document.querySelectorAll('.nav-simple .nav li.nav-item')
    const keyTexts = ['Novos', 'Blindados', 'Seminovos']

    const selectedItems = Array.prototype.filter.call(navItems, (item) => {
      const link  = item.querySelector('a')
      let isSelected = keyTexts.find(key => link.innerHTML.includes(key))
      
      return isSelected
    })
    
    createDropdownSubitemsList([...selectedItems])

    const dropdownCard = vehiclesMenu.querySelector('.dropdown-menu')
    vehiclesMenu.addEventListener('click', () => {
      vehiclesMenu.classList.toggle('show')
      dropdownCard.classList.toggle('show')
    })
  })
})()