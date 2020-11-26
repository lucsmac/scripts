const addNewFont = () => {
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

  addStyle({
    styles: `
    @font-face{
      font-family: 'Louis';
        src: url('https://legado.autoforce.com.br/static/guiauto/Louis/louisregular.otf') format("opentype");
        font-weight: normal;
        font-style: normal; 
    }

    @font-face{
      font-family: 'Louis';
        src: url('https://legado.autoforce.com.br/static/guiauto/Louis/louisitalic.otf') format("opentype");
        font-weight: normal;
        font-style: italic; 
    }

    @font-face{
      font-family: 'Louis';
        src: url('https://legado.autoforce.com.br/static/guiauto/Louis/louisbold.otf') format("opentype");
        font-weight: bold;
        font-style: normal; 
    }

    @font-face{
      font-family: 'Louis';
        src: url('https://legado.autoforce.com.br/static/guiauto/Louis/louisheavy.otf') format("opentype");
        font-weight: bolder;
        font-style: normal; 
    }

    .btn {
      font-family: 'Louis';
    }
    `
  })
}

addNewFont()
