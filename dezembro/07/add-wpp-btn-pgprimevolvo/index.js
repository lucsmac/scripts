(() => {
  const btnsTarget = document.querySelectorAll('#channel-list .cta')
  
  Array.prototype.forEach.call(btnsTarget, (btn, index) => {
    const newBtnWpp = document.createElement('a')
    newBtnWpp.setAttribute('href', 'https://api.whatsapp.com/send?phone=5584991156600&text=Ol%C3%A1!%20gostaria%20de%20saber%20mais%20sobre%20as%20ofertas%20da%20PG%20Prime!')
    newBtnWpp.setAttribute('target', '_blank')
    newBtnWpp.innerHTML = '<img src="//legado.autoforce.com.br/mods/plugins/WhatsApp/img/whatsapp-icon.png" width="40px"></i>'

    newBtnWpp.style.setProperty('position', 'absolute')
    newBtnWpp.style.setProperty('bottom', '0px')
    newBtnWpp.style.setProperty('left', '50px')

    btn.parentNode.insertBefore(newBtnWpp, btn)
    
    const newBtnTel = document.createElement('a')
    newBtnTel.setAttribute('href', 'tel:5584991156600')
    newBtnTel.innerHTML = '<img src="//legado.autoforce.com.br/mods/plugins/phone/phone-icon.png" width="40px"></i>'

    newBtnTel.style.setProperty('position', 'absolute')
    newBtnTel.style.setProperty('bottom', '0px')
    newBtnTel.style.setProperty('left', '0px')

    btn.parentNode.insertBefore(newBtnTel, btn)
  })
})()