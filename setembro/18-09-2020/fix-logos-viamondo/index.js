
var css = `
@media (min-width: 767px) {
  #showcase .container-fluid header .brands ul li *:not(script) {
    width: 75px !important;
  }
}
`,
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
if (style.styleSheet){
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}