(() => {
  const nav = document.querySelectorAll('.technical-table__car-data .car-data--header-item')
  const contents = document.querySelectorAll('.car-data--content-item')
  
  const changeContent = (navItems, navItem, contentItems) => {
    Array.prototype.forEach.call(navItems, (item) => {
      item.classList.remove('active')
    })
    
    navItem.classList.add('active')
    
    const ref = navItem.getAttribute('data-technical-ref')
    Array.prototype.forEach.call(contentItems, (item) => {
      item.classList.remove('active')
      if(item.classList.contains(ref))
        item.classList.add('active')
    })
  }
  
  Array.prototype.forEach.call(nav, (navItem) => {
    navItem.addEventListener('click', (e) => {
      changeContent(nav, navItem, contents)
    })
  })
})()