const hidePhoneBtn = () => {
  const nav = document.querySelector('.nav-header')
  const btn = nav.querySelector('.btn-group')
  
  btn.style.setProperty('display', 'none')
}

hidePhoneBtn()