(() => {
  const logo = '<a href="/"><img class="header__logo img-fluid" src="//legado.autoforce.com.br/mods/caminho/caminho-hyundai-logo.png" alt="logo" style="max-height: 50px;"></a>'
  const headerContainerDesktop = document.querySelector('.header .container .header-desktop .header__navbar')

  headerContainerDesktop.insertAdjacentHTML('beforeend', logo)
})()