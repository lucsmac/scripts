const removeOtherBrands = () => {
  const otherBrands = document.querySelector('#other_brands')
  otherBrands.parentNode.removeChild(otherBrands)
}

removeOtherBrands()