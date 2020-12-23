(() => {
  const slugs = [["300c", "Chrysler"], ["town-country", "Chrysler"], ["journey", "Dodge"], ["durango", "Dodge"], ["journey", "Dodge"], ["renegade", "Jeep"], ["compass", "Jeep"], ["wrangler", "Jeep"], ["grand-cherokee", "Jeep"], ["renegade", "Jeep"], ["renegade", "Jeep"], ["renegade-pcd", "Jeep"], ["renegade", "Jeep"], ["compass", "Jeep"], ["compass", "Jeep"], ["compass", "Jeep"], ["wrangler", "Jeep"], ["wrangler", "Jeep"], ["wrangler", "Jeep"], ["cherokee", "Jeep"], ["grand-cherokee", "Jeep"], ["1500", "Ram"], ["2500", "Ram"], ["2500", "Ram"], ["2500", "Ram"], ["2500", "Ram"]]

  const url = window.location.href
  
  slugs.find(([slug, brand]) => {
    if(url.includes(slug)) {
      const breadcrumbs = document.querySelectorAll('.breadcrumb')
      const title = document.querySelector('.showcase__title')
      const detailsTitle = document.querySelector('.vehicle-details .section-component__title')

      Array.prototype.forEach.call(breadcrumbs, (breadcrumb) => {
        breadcrumb.innerHTML = breadcrumb.innerHTML.replace('Chrysler Jeep Dodge Ram', brand)
      })
      title.innerHTML = title.innerHTML.replace('Chrysler Jeep Dodge Ram', brand)
      detailsTitle.innerHTML = detailsTitle.innerHTML.replace('Chrysler Jeep Dodge Ram', brand)
    }
    return url.includes(slug)
  })
})()