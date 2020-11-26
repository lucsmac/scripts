(() => {
  const btnTourVirtual = document.createElement('a')
  const innerHTML = '<span>Tour Virtual</span>'
  btnTourVirtual.classList.add('btn', 'btn-default', 'menu-accordion-toggle')
  btnTourVirtual.style.setProperty('margin-right', '20px')
  btnTourVirtual.setAttribute('href', 'https://www.doutord.com.br/euromotors/index.html')
  btnTourVirtual.setAttribute('target', '_blank')
  btnTourVirtual.innerHTML = innerHTML

  const position = document.querySelector('#phones-main')

  position.insertBefore(btnTourVirtual, position.firstChild)
})()