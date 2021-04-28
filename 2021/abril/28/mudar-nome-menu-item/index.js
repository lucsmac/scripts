(() => {
  const getSimpleItem = (label) => {
    return Array.prototype.find.call(
      document.querySelectorAll('.nav-item'),
      (item) => item.innerText.toLowerCase().includes(label.toLowerCase())
    )
  }

  const getSimpleDropdownItem = (label) => {
    return Array.prototype.find.call(
      document.querySelectorAll('.nav .dropdown-menu li'),
      (item) => item.innerText.toLowerCase().trim() === label.toLowerCase()
    )
  }

  const afterSales = getSimpleItem('Pós-venda')
  const link = afterSales.querySelector('.nav-simple__link')
  link.innerHTML = link.innerHTML.replace('Pós-venda', 'Serviços')

  document.addEventListener("DOMContentLoaded", function(event) {
    const services = getSimpleDropdownItem('Serviços')
    const servicesLink = services.querySelector('.card-collapse-deep__title')
    servicesLink.innerHTML = servicesLink.innerHTML.replace('Serviços', 'Agendamento de serviços')
  })
})()