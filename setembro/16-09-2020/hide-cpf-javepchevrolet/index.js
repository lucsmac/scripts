const isThisPage = ({ urlPiece }) => {
  const fullURL = window.location.href
  const result = fullURL.includes(urlPiece)

  return result
}

const hideCPF = () => {
  const cpfInput = document.querySelector('[name="cpf"]')
  
  cpfInput.style.setProperty('display', 'none')
}

document.addEventListener("DOMContentLoaded", function(event) {
  if(!isThisPage({ urlPiece: 'financiamento'}))
    hideCPF()
});
