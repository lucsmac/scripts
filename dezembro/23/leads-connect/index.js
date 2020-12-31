(() => {
  const currForm = document.querySelector('.showcase-new__conversion-form')

  if(currForm) {
    currForm.innerHTML = `<iframe name="form-leads_connect" id="form-leads_connect" src="https://hondabrasil.secure.force.com/CapturaLeads/myHonda_DynamicLeadCaptureForm?id=MjAyMDA2MTYxNDE5NTR8fDAwMTYxMDAwMDBOck9OSkFBMw==" frameborder="0" width="100%" height="1100" allowfullscreen=""></iframe>`
  }
})()

(() => {
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


  addStyle({ styles: `
    .form-conversion__body fieldset, .form-conversion__body hr, .form-conversion__body footer {
      display: none;
    }
  `})
})()