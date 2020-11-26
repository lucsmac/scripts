
const isThisPage = ({ urlPiece }) => {
  const fullURL = window.location.href
  const result = fullURL.includes(urlPiece)

  return result
}

const hideMap = () => {
  const map = document.querySelector('.fragment-map-units')

  map.style.setProperty('display', 'none')
}

if(isThisPage({ urlPiece: 'automaia-veiculos/seminovos'}))
  hideMap()