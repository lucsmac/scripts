(async () => {
  const footerUnits = Array.from(document.querySelectorAll('.footer-units__nav.nav-vertical .nav-vertical__item'))

  const byLinkInnerText = (text) => {
    return (el) => {
      const link = el.querySelector('.nav-vertical__link')
      return link.innerText.toLowerCase().trim() === text.toLowerCase()
    }
  }
  
  const getFilteredElements = (fn, elements) => elements.filter(fn)

  const serviceAppointments = getFilteredElements(byLinkInnerText('Agendamento de serviços'), footerUnits)
  serviceAppointments.forEach(appointment => appointment.style.setProperty('display', 'none'))
})()