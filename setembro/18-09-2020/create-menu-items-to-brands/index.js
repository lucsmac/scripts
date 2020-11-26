const brandsContent = [
  {
    title: 'Jeep',
    target: 'jeep',
    titleLink: 'https://www.fipaljeep.com.br/',
    sublinks: [
      {
        link: 'https://www.fipaljeep.com.br/ofertas/novos',
        title: 'Ofertas'
      },
      {
        link: 'https://www.fipaljeep.com.br/outros-servicos',
        title: 'Serviços'
      },
    ]
  },
  {
    title: 'Dodge',
    target: 'dodge',
    titleLink: 'https://www.fipaljeep.com.br/',
    sublinks: [
      {
        link: 'https://www.fipaljeep.com.br/novos/detalhe/dodge-journey',
        title: 'Ofertas'
      },
      {
        link: 'https://www.fipaljeep.com.br/outros-servicos',
        title: 'Serviços'
      },
    ]
  },
  {
    title: 'Ram',
    target: 'ram',
    titleLink: 'https://www.fipaljeep.com.br/',
    sublinks: [
      {
        link: 'https://www.fipaljeep.com.br/novos/detalhe/ram-2500-laramie',
        title: 'Ofertas'
      },
      {
        link: 'https://www.fipaljeep.com.br/outros-servicos',
        title: 'Serviços'
      },
    ]
  },
  {
    title: 'Chrysler',
    target: 'chrysler',
    titleLink: 'https://www.fipaljeep.com.br/',
    sublinks: [
      {
        link: 'https://www.fipaljeep.com.br/outros-servicos',
        title: 'Serviços'
      },
    ]
  },
]

const copyElement = ({ elementPicker }) => {
  const elementToCopy = (typeof elementPicker) === 'string' ? document.querySelector(elementPicker) : elementPicker
  
  return elementToCopy.cloneNode(true)
}

const createMenuBrandsItems = () => {
  const menu = document.querySelector('.nav-wrapper-menu')
  const ul = menu.querySelector('.col-sm-2.dropdown-submenu')
  const father = ul.parentNode


  brandsContent.forEach((brand) => {
    const newUl = copyElement({ elementPicker: ul })
    const title = newUl.querySelector('.dropdown-submenu-title').querySelector('a')

    title.innerHTML = `<strong>${brand.title} <span class="fa fa-angle-right"></span></strong>`
    title.setAttribute('target', brand.target)
    title.setAttribute('href', brand.titleLink)
    
    const sublink = newUl.querySelector('li:not(.dropdown-submenu-title)')
    const oldSublinks = newUl.querySelectorAll('li:not(.dropdown-submenu-title)')
    
    const removeThisgroup = [].forEach.call(oldSublinks, (oldSublink) => oldSublink.parentNode.removeChild(oldSublink))
    
    brand.sublinks.forEach((sublink) => {
      const newLi = document.createElement('li')
      const newA = document.createElement('a')

      newA.setAttribute('href', sublink.link)
      newA.setAttribute('target', '_blank')
      newA.innerHTML = sublink.title

      newLi.appendChild(newA)
      newUl.appendChild(newLi)
    })
    
    father.appendChild(newUl)
  })
}

createMenuBrandsItems()