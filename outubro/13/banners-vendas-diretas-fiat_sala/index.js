const runChangeBanners = () => {
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
  
  const bannersData = [
    {
      page: 'empresa/cnpj-microempresarios',
      imgLink: 'https://legado.autoforce.com.br/static/fiat-sala/cnpj.jpg'
    },
    {
      page: 'empresa/produtores-rurais',
      imgLink: 'https://legado.autoforce.com.br/static/fiat-sala/produtor-rural.jpg'
    }
  ]
  
  const changeBanners = (data) => {
    data.forEach(DataElement => {
      if(isThisPage({ urlPiece: DataElement.page })) {
        addStyle({
          styles: `
            .content-simple__banner {
              background-image: url("${DataElement.imgLink}");
            }
          `
        })
      }
    });
  }

  changeBanners(bannersData)
}

runChangeBanners()
