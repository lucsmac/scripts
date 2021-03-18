  (() => {
    const link = '#'
    const appointment = document.createElement('li')
    appointment.classList.add('nav-item', 'nav-simple__item')
    appointment.setAttribute('style', '--animation-index: 9')
    appointment.innerHTML = `<a href="${link}" class="nav-link nav-simple__link"> Agendar vídeo chamada </a>`

    const nav = document.querySelector('.nav.nav--accordion-mobile')
    nav.appendChild(appointment)
  })()

// Adicionar quando o menu está cheio

{/* 
<style>
  .nav-item.nav-simple__item {
    padding: 20px 10px;
  }

  .nav-item .nav-link {
    font-size: 0.8rem;
  }
</style>
*/}