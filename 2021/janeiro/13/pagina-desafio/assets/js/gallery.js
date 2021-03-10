(() => {
  $('.images-gallery__nav').slick({
    infinite: true,
    variableWidth: true,
    draggable: false
  });

  const currentImage = document.querySelector('.images-gallery__current')
  const navItems = document.querySelectorAll('.images-gallery__nav-item')

  const galleryNavigation = (navItem, target) => {
    const imgLink = navItem.querySelector('img').getAttribute('src')
    target.setAttribute('src', imgLink)
    Array.prototype.forEach.call(navItems, item => {
      item.classList.remove('active')
    })
    navItem.classList.add('active')
  }
  
  Array.prototype.forEach.call(navItems, (navItem) => {
    navItem.addEventListener('click', () => {
      galleryNavigation(navItem, currentImage.querySelector('img'))
    })
  })
})()