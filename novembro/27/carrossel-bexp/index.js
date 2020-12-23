(() => {
    document.addEventListener("DOMContentLoaded", function(event) {
        const carousel = document.querySelector('.carousel-brands')
        if(carousel)
            carousel.style.setProperty('background', '#111')
        
        const wrapper = document.querySelector('.header-carousel-brands .swiper-wrapper')
        if(wrapper) {
            wrapper.style.setProperty('display', 'flex')
            wrapper.style.setProperty('justify-content', 'space-around')
            wrapper.style.setProperty('transform', 'translate3d(0, 0, 0)')
    
            wrapper.innerHTML = `
            <div class="footer-carousel-brands__item carousel-brands__item carousel__item swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index="0" role="group" aria-label="1 / 9" style="width: 112.5px; margin-right: 30px;">
            <a class="footer-carousel-brands__item-link carousel-brands__item-link swiper-slide" target="_blank" href="http://audialphaville.com.br" style="height: 80px;"><img class="footer-carousel-brands__item-image carousel-brands__item-image" src="https://production.autoforce.com/uploads/brand/logo_white/8/logo_brand_thumb_comprar-audi_e2c80bbe11.png" alt="Seminovo"></a></div>
            <div class="footer-carousel-brands__item carousel-brands__item carousel__item swiper-slide swiper-slide-duplicate swiper-slide-active" data-swiper-slide-index="1" role="group" aria-label="2 / 9" style="width: 112.5px; margin-right: 30px;">
            <a class="footer-carousel-brands__item-link carousel-brands__item-link swiper-slide" target="_blank" href="#" style="height: 80px;"><img class="footer-carousel-brands__item-image carousel-brands__item-image" src="https://production.autoforce.com/uploads/brand/logo_white/18/logo_brand_thumb_logo_brand_jeep-branco_co_pia_74575a8da7.png" alt="Seminovo"></a></div>
            <div class="footer-carousel-brands__item carousel-brands__item carousel__item swiper-slide swiper-slide-duplicate swiper-slide-next" data-swiper-slide-index="2" role="group" aria-label="3 / 9" style="width: 112.5px; margin-right: 30px;">
            <a class="footer-carousel-brands__item-link carousel-brands__item-link swiper-slide" target="_blank" href="#" style="height: 80px;"><img class="footer-carousel-brands__item-image carousel-brands__item-image" src="http://legado.autoforce.com.br/mods/bexp/img/bexp_branca.png" alt="Seminovo"></a></div>
            `
        }
    })
})()

(() => {
    const footerCarousel = document.querySelector('.footer-carousel-brands.carousel-brands')
    if(footerCarousel)
        footerCarousel.parentNode.removeChild(footerCarousel)
})()