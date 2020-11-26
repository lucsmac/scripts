
// <!-- 15/09/2020 - Solução do bug do recaptcha cobrindo o botão de carrossel -->
{/* <script> */}
const fixRecaptchaBug = () => {
  const recaptcha = document.querySelector('.grecaptcha-badge')
  recaptcha.style.setProperty('pointer-events', 'none', 'important');
}  

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
      fixRecaptchaBug()
  }
}
// </script>