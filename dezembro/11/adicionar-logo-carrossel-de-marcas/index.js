
(() => {
  const elementHTML = `
  <a
    target="_blank"
    alt="Euro Motors Seminovos"
    class="lozad"
    data-background-image="https://legado.autoforce.com.br/genius/images/pg-prime-selection.png"
    href="https://pgprimeselection.com/"
    data-loaded="true"
    style="background-image: url('https://legado.autoforce.com.br/genius/images/pg-prime-selection.png');"
  >
    PG Prime Selection
  </a>
  `

  const newBrand = document.createElement('li')
  newBrand.classList.add('item')
  newBrand.innerHTML = elementHTML

  const refCarousel = document.querySelector('.mini-brands-carousel.owl-carousel')
  refCarousel.appendChild(newBrand)
})()

