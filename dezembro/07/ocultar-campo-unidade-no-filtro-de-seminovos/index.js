(() => {
  document.addEventListener("DOMContentLoaded", function(event) {
    if(window.location.href.includes('seminovos')) {
      // remover select de unidades no desktop
      const unitFilter = document.querySelector('.form-group select[name="q[unit_id_eq]"]')
      if(unitFilter) {
        let elementFather = unitFilter.parentNode
        while(!elementFather.classList.contains('col-sm-3')) {
          elementFather = elementFather.parentNode
        }
        elementFather.style.setProperty('display', 'none')
        elementFather.nextSibling.classList.remove('col-sm-3')
        elementFather.nextSibling.classList.add('col-sm-6')
      }
    
      // remover select de unidades no mobile
      const unitFilterMobile = document.querySelector('.advance-filter-modal__body select[name="q[unit_id_eq]"]')
      if(unitFilterMobile) {
        let elementFatherMobile = unitFilterMobile.parentNode
        while(!elementFatherMobile.classList.contains('col-sm-12')) {
          elementFatherMobile = elementFatherMobile.parentNode
        }
        elementFatherMobile.style.setProperty('display', 'none')
      }
    }
  })
})()