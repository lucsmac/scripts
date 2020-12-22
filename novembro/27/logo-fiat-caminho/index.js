(() => {
    const wrapper = document.querySelector('.carousel-brands')
    const fiatBrands = wrapper.querySelectorAll('.carousel-brands__item-link img[alt="Fiat"]')
    
    Array.prototype.forEach.call(fiatBrands, (fiatBrand) => {
        fiatBrand.setAttribute('src', 'https://trello-attachments.s3.amazonaws.com/5e79fbf9a27e8b36d54fb09a/5fc10cc324012b28029c3bad/8cb0c819f3c622f9b4e95b19d1f697b4/logo_brand_comprar-fiat_58068feb28.png')
    })
})()

(() => {
    const wrapper = document.querySelector('.carousel-brands')
    const fiatBrands = wrapper.querySelectorAll('.carousel-brands__item-link img[alt="Fiat"]')
    
    Array.prototype.forEach.call(fiatBrands, (fiatBrand) => {
        const brandWrapper = fiatBrand.parentNode.parentNode
        if(brandWrapper.classList.contains('carousel-brands__item'))
            brandWrapper.parentNode.removeChild(brandWrapper)
    })
})()