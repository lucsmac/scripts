const isThisPage = ({ urlPiece }) => {
  const fullURL = window.location.href
  const result = fullURL.includes(urlPiece)

  return result
}

const changeRedirect = () => {
  const wppIcon = '<i class="icon icon-whatsapp"></i>'

  const btnTarget = document.querySelector('.btn.button.button--large.button--primary.showcase-services__panel-btn-schedule')
  
  const btnOldText = btnTarget.innerHTML
  btnTarget.innerHTML = `${wppIcon} ${btnOldText}`
  
  btnTarget.setAttribute('onclick', `location.href = 'https://api.whatsapp.com/send?phone=5516982710075&text=Ol%C3%A1!';`)
}

if(isThisPage({ urlPiece: 'servicos' }))
  changeRedirect()