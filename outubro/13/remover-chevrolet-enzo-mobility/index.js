const removeChevrolet = () => {
  const targets = [document.querySelector('.showcase-offer__title span.text-primary'), document.querySelector('.vehicle-details .section-component__title span')]
  
  targets.forEach(target => {
    target.innerHTML = target.innerHTML.replace('Chevrolet', '')
  })
}

removeChevrolet()