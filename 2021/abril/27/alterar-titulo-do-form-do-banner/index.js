(() => {
  if (document.querySelector('.page--home')) {
    const changeTexts = () => {
      const bannerTitles = Array.from(document.querySelectorAll('.page--home .conversion-step__header-title'))
      const btn = Array.from(document.querySelectorAll('.conversion-step__actions button'))
      bannerTitles.forEach(title => title.innerText = 'ESTOU INTERESSADO')
      btn.forEach(title => title.innerText = 'ENVIAR')
    }
    
    window.scheduleServiceBannerFormUpdate = () => {
      changeTexts()
    }
  
    document.addEventListener("DOMContentLoaded", function(event) {
      changeTexts()
    })
  }
})()