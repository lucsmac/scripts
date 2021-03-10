(() => {
  document.addEventListener("DOMContentLoaded", function(event) {
    const model = document.querySelector('#modelo')
    model.innerHTML = `<option value="">Escolha o modelo</option>
    <option value="Mobi">Mobi</option>
    <option value="Argo">Argo</option>
    <option value="Cronos">Cronos</option>
    <option value="Nova Strada">Nova Strada</option>
    <option value="Toro">Toro</option>
    <option value="Grand Siena">Grand Siena</option>
    <option value="Uno">Uno</option>
    <option value="Doblò">Doblò</option>
    <option value="Doblò Cargo">Doblò Cargo</option>
    <option value="Fiorino">Fiorino</option>
    <option value="Ducato Chassi">Ducato Chassi</option>
    <option value="Ducato Cargo">Ducato Cargo</option>
    <option value="Ducato Multi">Ducato Multi</option>
    <option value="Ducato Minibus">Ducato Minibus</option>
    <option value="Strada">Strada</option>`
  })
})()