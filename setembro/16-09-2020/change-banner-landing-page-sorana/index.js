const appendSeloLive = () => {
  const context = document.querySelector('#showcase')
  const target = context.querySelector('.info-content')

  const seloWrapper = document.createElement('div')
  seloWrapper.classList.add('selo-live-wrapper')
  const image = document.createElement('img')
  image.setAttribute('src', 'http://legado.autoforce.com.br/genius/selo-live.png')
  image.setAttribute('alt', 'Live de lançamento 23 de setembro 19h')
  seloWrapper.appendChild(image)

  target.parentNode.insertBefore(seloWrapper, target.nextSibling)
}

appendSeloLive()

var css = `
#showcase-img img {
  display: none;
}

#main div.bg-bottom-fixed {
  background-image: url(http://legado.autoforce.com.br/genius/KV-1-VW-Nivus.jpg) !important;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
}

.selo-live-wrapper {
  display: flex;
  justify-content: flex-end;
}

.selo-live-wrapper img {
  max-width: 250px;

}
`,
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
if (style.styleSheet){
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}