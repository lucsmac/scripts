(() => {
  document.addEventListener("DOMContentLoaded", function(event) {
    const bannerService = document.querySelector('.showcase-simple__form[data-category="service"]')
    const steps = bannerService.querySelectorAll('.conversion-step__form')
    const step2 = steps[steps.length - 1]
    const form = step2
    runAppendBannersFormFields(form)
  });
})()