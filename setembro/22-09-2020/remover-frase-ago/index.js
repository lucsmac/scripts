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


if(isThisPage({ urlPiece: 'seminovos' })) {
  addStyle({
    styles: `
      .list-pagination__result {
        opacity: 0;
      }

      @media screen and (max-width: 768px) {
        .list-pagination__result {
          display: none;
        }
      }
    `
  })
}