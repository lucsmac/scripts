(() => {
  const pecas = document.querySelector('a.card-collapse-deep__title[href="/pecas"]').parentNode
  pecas.classList.add('nav-item', 'nav-simple__item')
  
  const navItems = document.querySelectorAll('.nav-simple .nav li.nav-item')
  const selectedItem = Array.prototype.find.call(navItems, (item) => item.querySelector('a').innerHTML.includes('Pós-venda'))
  
  selectedItem.parentNode.insertBefore(pecas, selectedItem.nextSibling)
})()