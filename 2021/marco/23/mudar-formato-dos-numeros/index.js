(() => {
  document.addEventListener("DOMContentLoaded", function(event) {
    const changeWppText = ({ textToMatch, textToChange, textToInsert }) => {
      const wppPhonesList = document.querySelectorAll('#header-card-whatsapp .list.list--header-phones .header-mobile__whatsapp-number')
      const wppPhonesListMobile = document.querySelectorAll('#wpp-content-mobile-0 ul .header-mobile__whatsapp-number')

      const targetsDesktop = Array.prototype.filter.call(wppPhonesList, (wpp) => {
        return wpp.innerHTML.includes(textToMatch)
      })

      const targetsMobile = Array.prototype.filter.call(wppPhonesListMobile, (wpp) => {
        return wpp.innerHTML.includes(textToMatch)
      })

      const targets = targetsDesktop.concat(targetsMobile)

      Array.prototype.find.call(targets, target => {
        target.innerText = target.innerText.replace(textToChange, textToInsert)
      })
    }

    changeWppText({
      textToMatch: '(67)',
      textToChange: '+55 (67) ',
      textToInsert: ''
    })
  })
})()