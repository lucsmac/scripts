(() => {
  const hideUnits = () => {
    const unitBlock = document.querySelector('.used-vehicles-showcase__ctx-box-phone')
    if(unitBlock)
      unitBlock.parentElement.removeChild(unitBlock)
  }

  if( window.location.href.includes('seminovos'))
    hideUnits()
})()

(() => {
  const overdeliveringSection = document.querySelector('section[data-id="3"]')
  const buttons = overdeliveringSection.querySelector('.buttons')
  buttons.parentElement.removeChild(buttons)
})()

(() => {
 const weAreAutotechSection = document.querySelector('section[data-id="2"]')
 const text = weAreAutotechSection.querySelector('.col-1')
 const mockup = weAreAutotechSection.querySelector('.col-2')
 text.classList.remove('col-md-6')
 mockup.classList.remove('col-md-6')
 text.classList.add('col-md-5')
 mockup.classList.add('col-md-7')
 const title = text.querySelector('h2')
 title.style.setProperty('color', '#001C3D')
})()

(() => {
  const benefitsSection = document.querySelector('section[data-id="5"]')
  const imgs = benefitsSection.querySelectorAll('img')
  const titles = benefitsSection.querySelectorAll('strong')
  const paragraphs = benefitsSection.querySelectorAll('p')
  Array.prototype.forEach.call(imgs, (img) => {
    img.style.setProperty('width', '75px')
  })
  Array.prototype.forEach.call(titles, (title) => {
    title.style.setProperty('color', 'rgb(255, 185, 0)')
  })
  Array.prototype.forEach.call(paragraphs, (paragraph) => {
    paragraph.style.setProperty('color', '#FFF')
  })
})()

(() => {
  const heroSection = document.querySelector('section[data-id="1"]')
  const buttonsWrapper = heroSection.querySelector('.buttons')
  const vagasBtn = heroSection.querySelector('a[href="#vagas"]')
  buttonsWrapper.style.setProperty('text-align', 'left')
  vagasBtn.parentElement.removeChild(vagasBtn)
  const firstBtn = buttonsWrapper.firstChild
  firstBtn.style.setProperty('margin-left', '0')
})()

`
<style>
@media screen and (max-width: 768px) {
    .section-featured .darkness .wrap .buttons .btn-play {
        display: block;
        margin: 10px 0 20px 0;
    }
    .section-featured .darkness .wrap .buttons .btn[href="#sobre"] {
        margin: 10px 0 20px 20px;
    }
}
</style>
`

(() => {

})()