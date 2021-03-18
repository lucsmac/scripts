(() => {
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

  const isMaintenance = window.location.href.includes('empresa/agende-sua-manutencao')
  const isParts = window.location.href.includes('empresa/pecas')
  const isBodyShop = window.location.href.includes('empresa/funilaria')
  const isAccessories = window.location.href.includes('empresa/acessorios-osten')

  if(isMaintenance || isParts || isBodyShop || isAccessories) {
    addStyle`
      .choices__item[data-value="osten-bmw-itapura-27064073-e126-40cf-8d3a-e20a90885e6e"],
      .choices__item[data-value="osten-bmw-sumare-perdizes"],
      .choices__item[data-value="osten-bmw-santos-1835d2ef-1c36-4745-8178-658eacd47d3a"],
      .choices__item[data-value="bmw-sao-jose-dos-campos"],
      .choices__item[data-value="osten-bmw-penha-tatuape"] {
        display: none;
      }
    `
  }
})()