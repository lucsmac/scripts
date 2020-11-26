const removeBrandsLinks = () => {
  const brandsWrapper = document.querySelector('.enzo-other-brands')

  const brands = brandsWrapper.childNodes
  const applyThis = [].forEach.call(brands, (brand) => {
    const innerImg = brand.querySelector('img')
    
    const image = document.createElement('img')
    const imgSrc = innerImg.getAttribute('src')
    const imgAlt = innerImg.getAttribute('alt')
    
    image.setAttribute('src', imgSrc)
    image.setAttribute('alt', imgAlt)
    
    const father = brand.parentNode
  
    father.replaceChild(image, brand)
  })
}

removeBrandsLinks()