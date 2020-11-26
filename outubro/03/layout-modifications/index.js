const changeLayout = () => {

  const addStyle = ({ styles }) => {
    const css = styles,
          head = document.head || document.getElementsByTagName('head')[0],
          style = document.createElement('style');
    head.appendChild(style);
    style.setAttribute('type', 'text/css');
    if (style.styleSheet){
      // This is required for IE8 and below.
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  const getMenuElementByText = ({listOfElements, elementText, elementTag}) => {
    return [].find.call(listOfElements, (element) => {
        const currentElement = element.querySelector(elementTag)
        const currentElementText = currentElement.innerText.toUpperCase()
        
        return currentElementText.includes(elementText.toUpperCase())
    });
  }

  addStyle({styles: `
    header.header {
      background-color: #1d1d1d;
    }

    .nav-simple.nav-simple--accordion-mobile {
      background-color: #252525;
    }
    
    @media screen and (min-width: 768px) {
      .nav-link.nav-simple__link {
        color: #FFF;
      }
    }

    .carousel-brands:not(.footer-carousel-brands) {
      display: none;
    }

    button.button--primary, a.button--primary {
      background-color: #2A2A2A;
    }

    footer.footer {
      background-color: #161616;
    }

    a.footer-carousel-brands__item-link {
      height: 80px;
    }
  `})

  const seminovosMenuWrapper = getMenuElementByText({
    listOfElements: document.querySelectorAll('li.nav-item'),
    elementText: 'Seminovos',
    elementTag: 'a'
  })

  const seminovosMenuItem = seminovosMenuWrapper.querySelector('a')
  const oldSeminovosText = seminovosMenuItem.innerHTML

  seminovosMenuItem.innerHTML = oldSeminovosText.replace('Seminovos', 'Estoque')

  const changeCarousel = () => {
    const brandModel = (url) => {
      return `
    <a class="footer-carousel-brands__item-link carousel-brands__item-link swiper-slide" href="#" style="height: 80px;"><img class="footer-carousel-brands__item-image carousel-brands__item-image" src="https://legado.autoforce.com.br/genius/brasao-caminhoes/${url}" alt="Seminovo"></a>`
    }

    const urlImgs = [
      'Volkswagen.png', 'facchini.png', 'ford.png', 'guerra.png', 'ibipora.png', 'iveco.png', 'librelato.png', 'luna-amarelo.png', 'man.png', 'mercedes-benz-w.png', 'noma.png', 'randon.png', 'rodolinea.png', 'scania.png', 'schiffer.png', 'sinotruck.png', 'daf.png'
    ]
    
    const carouselWrapper = document.querySelector('.footer-carousel-brands.carousel-brands')
    const carousel = carouselWrapper.querySelector('.swiper-wrapper')
    
    carousel.innerHTML = ''

    urlImgs.forEach((url, index, urlArray) => {
      const wrapper = document.createElement('div')
      'footer-carousel-brands__item carousel-brands__item carousel__item swiper-slide'.split(' ').forEach(currClass => wrapper.classList.add(currClass))

      switch(index) {
        case 0:
          wrapper.classList.add('swiper-slide-active')
          break;
        case 1:
          wrapper.classList.add('swiper-slide-next')
          break;
        case index == (urlArray.length - 1):
          wrapper.classList.add('swiper-slide-prev')
          break;
        default:
          break
      }
      
      wrapper.style.width = '112.5px'
      wrapper.style.marginRight = '30px'
      wrapper.innerHTML = brandModel(url)
      
      carousel.appendChild(wrapper)
    })
  }

  changeCarousel()
}

changeLayout()

(() => {
  const getMenuElementByText = ({listOfElements, elementText, elementTag}) => {
    return [].find.call(listOfElements, (element) => {
        const currentElement = element.querySelector(elementTag)
        const currentElementText = currentElement.innerText.toUpperCase()
        console.log('currentElement', currentElement)
        console.log('currentElementText', currentElementText)
        
        return currentElementText.includes(elementText.toUpperCase())
    });
  }

  let time = 0

  const runVerification = () => {
    console.log('time:', time)
    time += 500

    if(time  > 5000) {
      clearInterval(run)
    }

    console.log('document.querySelectorAll("li.nav-item")', document.querySelectorAll('li.nav-item'))

    const FseminovosMenuWrapper = getMenuElementByText({
      listOfElements: document.querySelectorAll('li.nav-item'),
      elementText: 'Seminovos',
      elementTag: 'a'
    })

    console.log('FseminovosMenuWrapper', FseminovosMenuWrapper)
    const FseminovosMenuItem = FseminovosMenuWrapper.querySelector('a')
    const FoldSeminovosText = FseminovosMenuItem.innerHTML

    FseminovosMenuItem.innerHTML = FoldSeminovosText.replace('Seminovos', 'Estoque')

    console.log('FSeminovosMenuItem', FseminovosMenuItem)
  }
  
  const run = setInterval(runVerification, 500)
})()