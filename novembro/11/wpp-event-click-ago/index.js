(() => {
  const wppHeader = document.querySelector('.button--whatsapp')

  wppHeader.onclick = () => {
    const wppBtn = document.querySelectorAll('.header__card-whatsapp-items')

    wppBtn.forEach(button => {
      button.addEventListener('click', () => {
        gtag_report_conversion()
      })
    })
  }
  document.addEventListener('readystatechange', event => { 

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {

      const wppButtons = ['#st-1 > div.st-btn.st-last']
      wppButtons.forEach(button => {
        const wppBtn = document.querySelector(button)

        if(wppBtn) {
          wppBtn.addEventListener('click', () => {
            gtag_report_conversion()
          })
        }
      })

    }
  })
})()