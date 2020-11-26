const fixBrandLogo = () => {
  const otherBrands = document.querySelector('.enzo-other-brands')
  const brands = otherBrands.childNodes
  
  const applyThis = [].forEach.call(brands, (brand) => {
    const alt = brand.getAttribute('alt')
  
    if(!alt) {
      brand.setAttribute('alt', 'Chevrolet')
      brand.setAttribute('src', 'http://legado.autoforce.com.br/enzo/logo_brand_chevrolet2.webp')
    }
  })
}

fixBrandLogo()