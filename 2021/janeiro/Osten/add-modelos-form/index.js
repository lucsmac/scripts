(() => {
  document.addEventListener("DOMContentLoaded", function(event) {
    if(window.location.href.includes('test-ride')) {
      const model = document.querySelector('#modelo')
      if(model) {
        model.innerHTML = `<option value="">Escolha o modelo</option>
        <option value="Renegade">Renegade</option>
        <option value="Compass">Compass</option>
        <option value="Wrangler">Wrangler</option>
        <option value="Grand Cherokee">Grand Cherokee</option>`
      }
    }
  })
})()
