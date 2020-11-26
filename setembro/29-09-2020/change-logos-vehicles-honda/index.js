const cropLogo = () => {

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

  const isThisPage = ({ urlPiece }) => {
    const fullURL = window.location.href
    const result = fullURL.includes(urlPiece)

    return result
  }

  const dimensions = [
    {
      vehicle: 'fit',
      width: 120,
    },
    {
      vehicle: 'city',
      width: 144,
    },
    {
      vehicle: 'civic',
      width: 180
    },
    {
      vehicle: 'civic-si',
      width: 162,
    },
    {
      vehicle: 'wr-v',
      width: 158
    },
    {
      vehicle: 'hr-v',
      width: 150
    },
    {
      vehicle: 'accord',
      width: 157,
    },
    {
      vehicle: 'cr-v',
      width: 148
    }
  ]

  const title = document.querySelector('h1.showcase__title')
  if(title) {
    const targetImg = title.querySelector('img')

    const imgWrapper = document.createElement('div')
    imgWrapper.appendChild(targetImg)
    imgWrapper.classList.add('logo-vehicle-wrapper')
  
    const addStyleBasedOnModel = (data) => {
      data.forEach(model => {
        if(isThisPage({urlPiece: model.vehicle})) {
          addStyle({
            styles: `
            .showcase__title img { display: block; }

            .logo-vehicle-wrapper {
              width: ${model.width}px;
              overflow: hidden;
              display: flex;
              align-items: center;
            }
            `
          })
        }
      })
    }
  
    addStyleBasedOnModel(dimensions)
  
    title.appendChild(imgWrapper)
    imgWrapper.appendChild(targetImg)
  
    title.style.setProperty('display', 'flex')
  }
}

(function addStyle ({ styles }) {
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
})({styles: `.showcase__title img { display: none; }`})

document.addEventListener('readystatechange', event => { 
  if (event.target.readyState === "complete") {
    cropLogo()
  }
});