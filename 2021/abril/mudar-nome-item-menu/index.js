(() => {
  const getSimpleItem = (label) => {
    return Array.prototype.find.call(
      document.querySelectorAll('.nav-item'),
      (item) => item.innerText.toLowerCase().includes(label.toLowerCase())
    )
  }

  const changeMenuItemName = (item, newName) => {
    const menuItem = getSimpleItem(item)
    if (!menuItem) return
    menuItem.querySelector('a').innerText = newName
  }

  changeMenuItemName('consórcios', 'teta' )
})()