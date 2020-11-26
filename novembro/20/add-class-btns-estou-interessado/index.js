(() => {
  const btnsEstouInteressado = document.querySelectorAll('.page.page--home .btn.card__cta')
  Array.prototype.forEach.call(btnsEstouInteressado, (btn) => {
   if(btn.innerText === 'ESTOU INTERESSADO')
    btn.classList.add('btn-card-cta__index')
  })
})()