<script>
  (() => {
    document.addEventListener("DOMContentLoaded", function(event) {
      const isValidCpf = (cpf) => {
        cpf = cpf.replace(/\D/g, '');

        const lengthIsWrong = cpf.toString().length != 11
        const fullSameDigit = /^(\d)\1{10}$/.test(cpf)
        if(lengthIsWrong || fullSameDigit) return false;

        let result = true;

        [9,10].forEach(function(j){
          let soma = 0, r;
          cpf.split(/(?=)/).splice(0,j).forEach(function(e, i) {
            soma += parseInt(e) * ((j+2) - (i+1));
          });
          r = soma % 11;
          r = (r < 2) ? 0 : 11 - r;
          if(r != cpf.substring(j, j+1)) result = false;
        });

        return result;
      }

      const showAlertInvalidCpf = (alert, shouldShow) => shouldShow ? alert.style.setProperty('display', 'block') : alert.style.setProperty('display', 'none')
      
      const alertInvalidCpf = (target, condition) => {
        const alert = document.createElement('div')
        alert.classList.add('invalid-feedback')
        alert.setAttribute('id', 'invalid-cpf-value')
        alert.innerHTML = "CPF inválido."

        const buildedInvalidCpfAlert = document.querySelector('#invalid-cpf-value')
        
        if(!buildedInvalidCpfAlert)
          target.parentNode.appendChild(alert)
        else
          showAlertInvalidCpf(buildedInvalidCpfAlert, condition)
      }

      const validate = (e, form) => {
        const value = e.target.value
        const length = !(value.split('').length < 14)
        const btnSend = form.querySelector('button')
        if(length) {
          if(!isValidCpf(value)) {
            alertInvalidCpf(e.target, true)
            btnSend.style.setProperty('pointer-events', 'none')
            btnSend.style.setProperty('filter', 'grayscale(100)')
          }
          else {
            alertInvalidCpf(e.target, false)
            btnSend.style.setProperty('pointer-events', 'initial')
            btnSend.style.setProperty('filter', 'initial')
          }
        }
      }
      
      const forms = document.querySelectorAll('form')

      forms && Array.prototype.forEach.call(forms, (form) => {
        const cpfInput = form.querySelector('input[name="cpf"]')
        if(cpfInput) {
          cpfInput.addEventListener('keypress', (e) => validate(e, form))
          cpfInput.addEventListener('keyup', (e) => validate(e, form))
        }
      })
    })
  })()
</script>