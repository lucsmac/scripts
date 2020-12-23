  (() => {
    const addStyle = (styles ) => {
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
    
    const bannersData = #codecheat%banners_data
    
    const changeBanners = (data) => {
      data.forEach(DataElement => {
        if(window.location.href.includes(DataElement.page)) {
          addStyle`
              .default-bg__new_vehicle {
                background-image: url("${DataElement.img_link}");
              }
            `
        }
      });
    }

    changeBanners(bannersData)
  })()