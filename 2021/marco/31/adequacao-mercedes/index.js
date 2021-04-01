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

  addStyle`
    .header__navbar > a {
      overflow: hidden;
      height: 56px;
      width: 207px;
      flex: 0 0 207px;
    }

    .header__navbar > a > img {
      
    }
  `
})()