(() => {
  const texts = document.querySelectorAll('h2, h1, p')
  Array.prototype.forEach.call(texts, (text) => {
    if(text.innerHTML.toLowerCase().includes('osten bmw')) 
      text.innerHTML = text.innerHTML.replace('Osten BMW', 'BMW Osten')
  })
})()
