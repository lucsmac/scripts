(() => {

  const isThisPage = ({ urlPiece }) => {
      const fullURL = window.location.href
      const result = fullURL.includes(urlPiece)
  
      return result
  }

  if(isThisPage({ urlPiece: 'compramos-seu-usado' })) {

    // Ajustando responsividade
    const wrapper = document.querySelector('.showcase__col-whatsapp-box')
    wrapper.classList.remove('col-md-6', 'col-lg-8')
    wrapper.classList.add('col-lg-12')
  
    // Removendo botão que aparece no mobile
    const btn = document.querySelector('.showcase__buttons')
    btn.parentNode.removeChild(btn)

  }
})()