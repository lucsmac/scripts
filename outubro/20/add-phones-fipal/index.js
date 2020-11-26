(() => {

  const dataToAppend = [
    {
      brandName: 'Jeep',
      stores: [
        {
          phone: '4539023000',
          name: 'FIPAL JEEP - CASCAVEL'
        },
        {
          phone: '4432196100',
          name: 'FIPAL JEEP - MARINGÁ'
        },
      ]
    },
    {
      brandName: 'Planovale',
      stores: [
        {
          phone: '4530366600',
          name: 'CASCAVEL'
        },
        {
          phone: '4436497440',
          name: 'MARINGÁ'
        },
      ]
    },
    {
      brandName: 'Fipal Shop',
      stores: [
        {
          phone: '4532181016',
          name: ''
        },
      ]
    },
  ]

  const accordionTarget = document.querySelector('#phones-main .accordion')
  accordionTarget.innerHTML = accordionTarget.innerHTML

  const appendDropdown = ({ brandName, stores }) => {
    const newItem = document.createElement('li')
    const title = document.createElement('div')
    title.classList.add('link')
    title.innerHTML = ` ${brandName}<i class="fa fa-chevron-down down"></i>`
    title.setAttribute('ga-on', 'click')
    title.setAttribute('ga-event-category', 'Menu de Telefones')
    title.setAttribute('ga-event-action', '0')
  
    newItem.appendChild(title)
  
    const dropdown = document.createElement('ul')
    dropdown.classList.add('submenu', 'submenu')
    dropdown.style.setProperty('display', 'none')
  
    const createPhoneItem = ({ phone, phoneText, name }) => {
      return `
      <li>
          <a href="tel: ${phone}" ga-on="click" ga-event-category="Menu de Telefones" ga-event-action="1" ga-event-label="0"><strong>${phoneText}</strong> ${name ? '|' : ''} ${name} </a>
      </li>
      `
    }

    const formatPhone = (phone) => {
      const part1 = phone.slice(0, 2)
      const part2 = phone.slice(2, 6)
      const part3 = phone.slice(6, 10)

      return {
        linkPhone: `${part1} ${part2}-${part3}`,
        formattedPhone: `(${part1}) ${part2}-${part3}`,
      }
    }
  
    const dropdownBody = (data) => {
      const content = data.reduce((currContent, currValue) => {
        const { linkPhone, formattedPhone } = formatPhone(currValue.phone)
        return currContent + createPhoneItem({
          phone: linkPhone,
          phoneText: formattedPhone,
          name: currValue.name
        })
      }, '')
      return content
    }

    const phonesContent = dropdownBody(stores)

    const innerContent = phonesContent

    dropdown.innerHTML = innerContent
    newItem.appendChild(dropdown)

    target.appendChild(newItem)
  }

  const target = document.querySelector('#phones-main .accordion')
  target.innerHTML = target.innerHTML

  dataToAppend.forEach(data => {
    appendDropdown(data)
  })

  Array.prototype.forEach.call(target.querySelectorAll('.accordion li'), (item) => {
    item.addEventListener('click', () => {
      const allEls = document.querySelectorAll('#phones-main .accordion .open')
      Array.prototype.forEach.call(allEls, (el) => {
        if (el != item)
          el.classList.remove('open')
      })

      item.classList.toggle('open')
      
      const elToShow = item.querySelector('.submenu')
      const displayProperty = item.classList.contains('open') ? 'block' : 'none'
      elToShow.style.setProperty('display', displayProperty)
    })
  })

  const addStyle = ({ styles }) => {
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

  addStyle({
    styles: `
      #phones-main .accordion .submenu {
        transition: max-height .5s;
        overflow: hidden !important;
        max-height: 0;
        display: block !important;
      }
      
      #phones-main .accordion li.open .submenu {
        max-height: 400px;
        transition: max-height 1s;
      }

      @media screen and (max-width: 768px) {
        #showcase header .showcase-slides .btn-dropdown-list .submenu,
        #phones-main .accordion .submenu {
          max-height: 0;
        }
        
        #showcase header .showcase-slides .btn-dropdown-list li.open .submenu,
        #phones-main .accordion li.open .submenu {
          max-height: 400px;
        }
      }
    `
  })
})()