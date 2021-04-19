(() => {
  if(window.location.href.includes('empresa/taos')) {
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

    const changeBannerOnMobile = () => {
      addStyle`
        @media screen and (max-width: 768px) {
          .content--static-page .content__banner {
            height: 450px;
            background-image: url("http://legado.autoforce.com.br/mods/norpave/banner-taos-mobile.jpeg") !important;
          }
        }
      `
    }

    const uiAdjustments = () => {
      addStyle`
        .section-component__title-header-text {
          display: none;
        }
      `
    }

    changeBannerOnMobile()
    uiAdjustments()
  }
})()