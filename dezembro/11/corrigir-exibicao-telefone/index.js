(() => {
  document.addEventListener("DOMContentLoaded", function(event) {
    const phonesHeader = document.querySelectorAll('.header__card-phones-item span')
    Array.prototype.forEach.call(phonesHeader, (phone) => {
      phone.innerHTML = phone.innerHTML.replace('(08)', '0800')
    })

    const footerPhones = document.querySelectorAll('.footer-units__contents-block .list li .text-mask-phone')
    Array.prototype.forEach.call(footerPhones, (phone) => {
      phone.innerHTML = phone.innerHTML.replace('(08)', '0800')
    })
  })
})()