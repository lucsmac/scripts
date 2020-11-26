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
    page: 'vendas-diretas/pcd-pessoas-com-deficiencia',
    imgLink: 'url("https://legado.autoforce.com.br/granleste/dcc9f52be037-PCD_1500X550.jpg")'
  },
  {
    page: 'vendas-diretas/cnpj',
    imgLink: 'url("http://legado.autoforce.com.br/granleste/CNPJ_1500X550.jpg")'
  },
  {
    page: 'vendas-diretas/taxista',
    imgLink: 'url("http://legado.autoforce.com.br/granleste/TAXI_1500X550.png")'
  }
]

const changeBanners = (data) => {
  data.forEach(DataElement => {
    if(isThisPage({ urlPiece: DataElement.page })) {
      addStyle({
        styles: `
          .default-bg__new_vehicle {
            background-image: url("${DataElement.imgLink}");
          }
        `
      })
    }
  });
}

changeBanners(bannersData)