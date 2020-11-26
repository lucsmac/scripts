const hideWrongPrices = () => {
  const prices = document.querySelectorAll('.card__trigger-value')

  Array.prototype.forEach.call(prices, (price) => {
    if(price.innerText.includes('R$ 0')) {
      
      const trigger = price.parentNode.querySelector('.card__trigger')
      const title = price.parentNode.querySelector('.card__title')
      const wrapper = price.parentNode
      
      if(trigger)
        trigger.style.setProperty('display', 'none')
      title.style.setProperty('display', 'none')
      price.style.setProperty('display', 'none')

      wrapper.style.setProperty('height', 'auto')
      
    }
  })

  const priceIn = document.querySelector('.used-vehicles-showcase__price-value')

  if(priceIn && priceIn.innerText.includes('R$ 0')) {
    const priceInDisplay = document.querySelector('.used-vehicles-showcase__price')

    priceInDisplay.style.setProperty('display', 'none', 'important')
  }
}

document.addEventListener('readystatechange', event => { 

  // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
  if (event.target.readyState === "complete") {
    hideWrongPrices()
  }
});
