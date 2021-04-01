(() => {
  const phones = document.querySelector('#header-card-phones')
  const ura = `
  <div class="header__card-phones-items">
    <div data-parent="#header-card-phones" data-toggle="collapse" data-target="#phone-content-0" class="card-collapse__header" aria-expanded="true"> Central de atendimento</div>
    <div id="phone-content-0" class="card-collapse__content collapse show" style="" aria-expanded="true">
      <ul class="list list--header-phones list--border-bottom">
        <li class="header__card-phones-item"><a class="card-collapse__phone-link" href="tel:1131926085"><span><strong>Telefone:</strong><span class="text-nowrap text-mask-phone">(11) 3192-6085</span></span></a><i class="icon icon-phone"></i></li>
      </ul>
    </div>
  </div>
  `
  phones.innerHTML = ura
})()