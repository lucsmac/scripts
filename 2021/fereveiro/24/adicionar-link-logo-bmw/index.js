(() => {
  const addLink = (link, logo) => {
    const headerLogo = logo
    console.log(headerLogo)
    const father = headerLogo.parentElement
    const linkTag = document.createElement('a')
    linkTag.setAttribute('href', link)
    console.log(father)
    father.insertBefore(linkTag, headerLogo)
    linkTag.appendChild(headerLogo)
    console.log(linkTag)
  }

  const logos = document.querySelectorAll('.header__logo-container-image')
  Array.prototype.forEach.call(logos, logo => addLink('https://www.bmwosten.com.br/', logo))
})()