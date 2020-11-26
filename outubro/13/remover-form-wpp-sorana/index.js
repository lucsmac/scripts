(function() {
  const btn = document.querySelector('.button--whatsapp.text-calls-chat-online__button.text-calls-chat-online__button-whatsapp')
  if(btn) {
    btn.parentNode.innerHTML = btn.parentNode.innerHTML
    const newBtn = document.querySelector('.button--whatsapp.text-calls-chat-online__button.text-calls-chat-online__button-whatsapp')
    newBtn.setAttribute('data-product', '')
    newBtn.setAttribute('data-channel', '')
    newBtn.setAttribute('data-category', '')
    newBtn.setAttribute('data-brand', '')
    newBtn.setAttribute('data-link', '')
    newBtn.setAttribute('data-units', '')
    newBtn.setAttribute('data-show-cpf', '')
    newBtn.setAttribute('data-show-units', '')
    newBtn.addEventListener('click', (e) => {
        e.preventDefault()
        window.open(
          'https://api.whatsapp.com/send?phone=551132300590',
          '_blank'
        );
      })
  }
})()