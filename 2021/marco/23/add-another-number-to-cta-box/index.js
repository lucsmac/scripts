(() => {
  if (window.location.href.includes('seminovos/')) {
    const addAnotherNumberToCTABox = (unit, tel) => {
      const unitTitle = document.querySelector('.used-vehicles-showcase__ctx-box-phone .cta-box__title')
      if (!unitTitle.toLowerCase === unit.toLowerCase()) {
        return
      }
  
      const telFormated = tel.replace('(', '').replace(') ', '').replace('-', '')
  
      const newNumber = `<div class="cta-box__info--primary"><a href="${telFormated}">${tel}</a></div>`
  
      const target = document.querySelector('.cta-box__info--primary')
      target.insertAdjacentHTML('afterend', newNumber)
    }
  
    addAnotherNumberToCTABox('Piracicaba', '(84) 99841-7660')
  }
})()