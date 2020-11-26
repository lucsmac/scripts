const redirectLogo = () => {
  const logo = document.querySelector('.logo-client')
  const link = logo.querySelector('a')

  link.setAttribute('href', 'https://discasa.com.br/')
}

redirectLogo()