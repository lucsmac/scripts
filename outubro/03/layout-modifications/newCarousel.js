const changeCarousel = () => {

  const brandModel = (url) => `
  <a class="footer-carousel-brands__item-link carousel-brands__item-link swiper-slide" href="#" style="height: 80px;"><img class="footer-carousel-brands__item-image carousel-brands__item-image" src="https://legado.autoforce.com.br/genius/brasao-caminhoes/${url}" alt="Seminovo"></a>`

  const urlImgs = [
    'Volkswagen.png', 'facchini.png', 'ford.png', 'guerra.png', 'ibipora.png', 'iveco.png', 'librelato.png', 'luna-amarelo.png', 'man.png', 'mercedes-benz-w.png', 'noma.png', 'randon.png', 'rodolinea.png', 'scania.png', 'schiffer.png', 'sinotruck.png', 'daf.png'
  ]

  // ===========================================================================================
  
  const carousel = document.createElement('div')
  const carouselWrapper = document.createElement('div')

  carousel.classList.add('swiper-container', 'footer-carousel-brands__carousel')
  carouselWrapper.classList.add('swiper-wrapper')

  urlImgs.forEach((url, index) => {
    const slide = document.createElement('div')
    'footer-carousel-brands__item carousel-brands__item carousel__item swiper-slide'
      .split(' ')
      .forEach(currClass => slide.classList.add(currClass))

    const slideContent = brandModel(url)
    slide.innerHTML = slideContent

    carouselWrapper.appendChild(slide)
  })

  carousel.appendChild(carouselWrapper)

  const target = document.querySelector('.footer-carousel-brands.carousel-brands')
  target.classList.remove('swiper-container-initialized', 'swiper-container-horizontal')
  target.innerHTML = ''
  target.appendChild(carousel)

  const footerBrandsSwiper = new Swiper('.footer-carousel-brands__carousel', {
    loop: true,
    autoplay: true,
    slidesPerView: 4.5,
    spaceBetween: 5,
    breakpoints: {
      576: {
        slidesPerView: 5.5,
        spaceBetween: 10
      },
      767: {
        slidesPerView: 6.5,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 8,
        spaceBetween: 30
      }
    }
  })
}

changeCarousel()