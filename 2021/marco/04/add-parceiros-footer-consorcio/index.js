(() => {
  const rowInfos = document.querySelector('footer .row.infos')
  const md5 = rowInfos.querySelector('.col-md-5')
  const md4 = rowInfos.querySelector('.col-md-4')
  const infosItems = rowInfos.querySelectorAll('.break-point > div')
  const followUs = Array.prototype.find.call(infosItems, item => {
    return item.querySelector('.title').innerText.toLowerCase().includes('siga-nos')
  })
  md4.classList.remove('col-md-4')
  md5.classList.remove('col-md-5')
  md4.classList.add('col-md-3')
  md5.classList.add('col-md-3')

  const partners = document.createElement('div')
  partners.classList.add('col-md-3')
  partners.innerHTML = `
  <div class="title">Parceiros</div>
  <img src="http://legado.autoforce.com.br/static/via-seguros/images/logo_grupo-caminho.png" alt="Grupo Caminho" />`
  followUs.parentNode.appendChild(partners)
})()