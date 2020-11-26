(() => {
  // colocar "Gostou? Então compartilhe" para o final da index
  const socialShare = document.querySelector('.social-share')
  const footer = document.querySelector('footer.footer')

  footer.parentNode.insertBefore(socialShare, footer)

  // ocultar Fale Conosco
  const faleConoscoItem = document.querySelector('.nav-item a[href="/euroamericas-seminovos/fale-conosco"]').parentNode
  const specialist = document.querySelector('.text-calls-chat-online')

  faleConoscoItem.parentNode.removeChild(faleConoscoItem)
  specialist.parentNode.removeChild(specialist)
})()