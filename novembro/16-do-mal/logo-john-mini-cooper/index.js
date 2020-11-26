(() => {
  const isThisPage = ({ urlPiece }) => {
    const fullURL = window.location.href
    const result = fullURL.includes(urlPiece)

    return result
  }  
  
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

  const addLogo = () => {
    const card = document.querySelector('.card a[href="/novos/john-cooper-works-2020"]')
    if(card) {
      let parent = card.parentElement
      let count = 0
      while (!parent.classList.contains('card') && count < 5) {
        parent = parent.parentElement
        count++
      }
  
      const title = parent.querySelector('.card__content .card__title')
      title.innerHTML = ''
      title.classList.add('john-cooper-works')
  
      addStyle({
        styles: `
        .john-cooper-works {
          background-image: url(https://legado.autoforce.com.br/genius/images/john-cooper-works.png);
          height: 40px;
          background-size: cover;
          background-position: center;
        }
        `
      })
    }
  }
  
  document.addEventListener("DOMContentLoaded", function(event) {
    addLogo()
  })
})()

// backup

(() => {
  const isThisPage = ({ urlPiece }) => {
    const fullURL = window.location.href
    const result = fullURL.includes(urlPiece)

    return result
  }  
  
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

  const addLogo = () => {
    const card = document.querySelector('.card .card__header a[href="/novos/john-cooper-works-2020"]')
    let parent = card.parentElement
    let count = 0
    while (!parent.classList.contains('card') && count < 5) {
      parent = parent.parentElement
      count++
    }

    const title = parent.querySelector('.card__content .card__title')
    title.innerHTML = ''
    title.classList.add('john-cooper-works')

    addStyle({
      styles: `
      .john-cooper-works {
        background-image: url(https://legado.autoforce.com.br/genius/images/john-cooper-works.png);
        height: 40px;
        background-size: cover;
        background-position: center;
      }
      `
    })
  }
  
  document.addEventListener("DOMContentLoaded", function(event) {
    if(isThisPage({ urlPiece: '/novos' }))
      addLogo()
  })
})()