const appendSeminovosBrand = () => {
  const data = { target: 'seminovos', title: 'Seminovos', href: 'https://viamondo.autoforce.com.br/via-mondo-seminovos',
  img: 'http://legado.autoforce.com.br/mods/viamondo/logos/branca/seminovos.png' }

  const li = document.createElement('li')
  li.classList.add('item')

  const a = document.createElement('a')
  a.setAttribute('target', data.target)
  a.setAttribute('alt', data.title)
  a.classList.add('lozad', 'viamondo-seminovos-logo')
  a.style.setProperty('background-image', `url(${data.img})`)
  a.style.setProperty('opacity', `0`)
  a.style.setProperty('width', `80px`)
  a.style.setProperty('height', `30px`)
  a.setAttribute('href', data.href)
  a.setAttribute('data-loaded', 'true')
  a.setAttribute('data-background-image', data.img)
  a.innerText = data.title

  li.appendChild(a)
  console.log(li)

  const target = document.querySelector('.mini-brands-carousel.owl-carousel')
  target.appendChild(li)

  setTimeout(() => {
    a.style.setProperty('opacity', `1`)
  }, 1000);

  var css = `
  @media screen and (max-width: 762px) {
    .viamondo-seminovos-logo {
      height: 24px !important;
      width: 64px !important;
    }
  }
  `,
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');
  head.appendChild(style);
  style.type = 'text/css';
  if (style.styleSheet){
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

appendSeminovosBrand()