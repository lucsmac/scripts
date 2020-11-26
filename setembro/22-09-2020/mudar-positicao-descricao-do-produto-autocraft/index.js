const isThisPage = ({ urlPiece }) => {
  const fullURL = window.location.href
  const result = fullURL.includes(urlPiece)

  return result
}

const changeDescriptionOrder = () => {
  const description = document.querySelector('.fragment-info-extra')
  const contact = document.querySelector('.showcase-new__whatsapp-box')

  if(!description || !contact)
    return console.log('não existe esse campo')
  
  contact.parentNode.insertBefore(description, contact)
  
  const css = `
  .fragment-info-extra {
    margin-top: 0 !important;
  }

  .fragment-info-extra .container {
    padding: 0 !important;
  }

  .fragment-info-extra__container {
    margin: 0 !important;
  }

  .showcase__col-whatsapp-box {
    
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
}

if(isThisPage({ urlPiece: 'novos/' }))
  changeDescriptionOrder()