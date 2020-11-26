const redirectBrandsLogo = () => {
  const brandItens = document.querySelectorAll('.carousel-brands .carousel-brands__item-link')

  const dataTarget = ['https://production.autoforce.com/uploads/brand/logo_regular/25/logo_brand_chrysler2.png', 'https://production.autoforce.com/uploads/brand/logo_white/18/logo_brand_thumb_logo_brand_jeep-branco_co_pia_74575a8da7.png', 'https://production.autoforce.com/uploads/brand/logo_regular/53/logo_brand_logo.png', 'https://production.autoforce.com/uploads/brand/logo_regular/52/logo_brand_logo.png', 'https://production.autoforce.com/uploads/brand/logo_regular/18/logo_brand_thumb_jeep_.png']
  
  Array.prototype.forEach.call(brandItens, (brand) => {
    const brandImg = brand.querySelector('img')
    const brandImgSrc = brandImg.getAttribute('src')
    if(dataTarget.includes(brandImgSrc))
      brand.setAttribute('href', 'https://ago.com.br/grupo-ago-jeep')
  })
}

redirectBrandsLogo()