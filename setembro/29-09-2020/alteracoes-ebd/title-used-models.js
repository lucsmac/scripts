const changeTitleUsedModels = () => {
  const target = document.querySelector('.used-models__header.section-component__header.section-component__header--fill')
  if(target) {
    const title = target.querySelector('.section-component__title')
  
    title.innerHTML = "Confira ofertas de Seminovos:"
  }
}

changeTitleUsedModels()
