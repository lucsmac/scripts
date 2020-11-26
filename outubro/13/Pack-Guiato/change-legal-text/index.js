const changeLegaLText = () => {
  const isThisPage = ({ urlPiece }) => {
      const fullURL = window.location.href
      const result = fullURL.includes(urlPiece)
  
      return result
  }
  
  if(isThisPage({ urlPiece: 'servicos/' })) {
    const target = document.querySelector('.legal-text.mt-4')
    target.innerHTML = 'Imagens meramente ilustrativas. Alguns itens apresentados poderão não estar disponíveis nas versões. Preço passível de confirmação no momento do agendamento do serviço.'
  }
}

changeLegaLText()