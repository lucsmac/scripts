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
    page: 'vendas-diretas/cnpj',
    imgLink: 'url("https://legado.autoforce.com.br/ago/Banner_AGO_Jeep_Empresa.jpg")'
  },
  {
    page: 'vendas-diretas/locadoras',
    imgLink: 'url("https://legado.autoforce.com.br/ago/Banner_AGO_Jeep_Locadora.jpg")'
  },
  {
    page: 'vendas-diretas/pcd',
    imgLink: 'url("https://legado.autoforce.com.br/ago/Banner_AGO_Jeep_PCD.jpg")'
  },
  {
    page: 'vendas-diretas/produtor-rural',
    imgLink: 'url("https://legado.autoforce.com.br/ago/Banner_AGO_Jeep_Produtor_Rural.jpg")'
  },
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