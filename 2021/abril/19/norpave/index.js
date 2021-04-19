(() => {
  if(window.location.href.includes('empresa/taos-teste')) {
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

    const gallery = document.querySelector('.section-component.gallery-with-thumbs')
    const ctaTitle = document.querySelector('.taos-cta').previousElementSibling

    ctaTitle.parentNode.insertBefore(gallery, ctaTitle)

    addStyle`
      .content--static-page .content__container-banner {
        display: none;
      }
    
      .content--static-page .content__container {
        flex-direction: column-reverse;
      }
    
      .content__form {
        max-width: 33.3%;
        margin-left: auto;
      }

      .content--static-page .content__container p, .content--static-page .content__container h2 {
        text-align: center;
      }

      .content--static-page .content__container h2 {
        margin-top: 1rem;
        margin-bottom: 1rem;
      }

      .content--static-page .content__container img {
        margin: 1rem auto;
        width: 100%;
      }

      .taos-cta {
        display: flex;
      }

      .taos-cta img {
        max-width: 300px;
      }

      .section-component__title {
        color: #666 !important;
      }

      .content--static-page .content__container .gallery-with-thumbs img {
        margin: 0;
      }

      @media screen and (max-width: 768px) {
        .content__form {
          max-width: 100%;
          margin-left: auto;
        }

        .content__form .static-conversion-form.content__form-with-banner {
          margin-top: 0 !important;
        }
      }
    `
  }
})()