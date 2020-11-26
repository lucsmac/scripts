(() => {
  const elementHTML = `
  <a
    target="_blank"
    alt="Euro Motors Seminovos"
    class="lozad"
    data-background-image="https://legado.autoforce.com.br/static/euromotors-white.png"
    href="https://euromotorsseminovos.com.br/"
    data-loaded="true"
    style="background-image: url('https://legado.autoforce.com.br/static/euromotors-white.png');"
  >
    Land Rover
  </a>
  `

  const newBrand = document.createElement('li')
  newBrand.classList.add('item')
  newBrand.innerHTML = elementHTML

  const refCarousel = document.querySelector('.mini-brands-carousel.owl-carousel')
  refCarousel.appendChild(newBrand)
})()