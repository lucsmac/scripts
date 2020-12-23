(() => {
  const btnTarget = document.querySelector('.load-more')
  if(btnTarget) {
    const newBtn = document.createElement('a')
    newBtn.classList.add('btn')
    newBtn.style.setProperty('justify-self', 'start')
    newBtn.style.setProperty('margin', '20px 0 0 20px')
    newBtn.innerText = 'Ver ofertas premium'
    newBtn.setAttribute('href', 'https://consorcio.sorana.com.br/empresa/simulador-autos')

    const firstChild = btnTarget.firstChild
    firstChild.style.setProperty('justify-self', 'end')
    firstChild.style.setProperty('margin', '20px 20px 0 0')

    btnTarget.style.setProperty('display', 'grid')
    btnTarget.style.setProperty('grid-template-columns', '1fr 1fr')
    btnTarget.appendChild(newBtn)
  }
})()