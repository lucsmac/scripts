(() => {
  const getNavSimpleItem = (label) => {
    return Array.prototype.find.call(
      document.querySelectorAll('.nav-item'),
      (item) => item.innerText.toLowerCase().includes(label.toLowerCase())
    )
  }
  const reorder = (before, after) => after.parentNode.insertBefore(before, after)

  const orders = [
    { before: 'Comprar', after: 'Pós-venda' },
    { before: 'Ofertas', after: 'Soluções' },
    { before: 'Pós-venda', after: 'Concessionária' }
  ]

  orders.forEach(({before, after}) => reorder(getNavSimpleItem(before), getNavSimpleItem(after)))
})()
