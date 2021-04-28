(() => {
  const isThisPage = (urlPiece) => window.location.href.includes(urlPiece)

  const hideCPF = () => {
    const addStyle = (styles) => {
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

    addStyle`
      .form-control[name="cpf"] {
        display: none;
      }
    `
  }

  if(!isThisPage('/ofertas/') || !isThisPage('vendas-diretas/vendas-diretas-carros-pcd-pne') || !isThisPage('/vendas-diretas/vendas-diretas-cnpj'))
    hideCPF()
})()