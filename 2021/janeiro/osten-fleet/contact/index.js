(() => {
  const isAssignPage = window.location.href.endsWith('/contato') || window.location.href.endsWith('/contato/')

  if (isAssignPage) {
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
      #content .container-fluid {
        display: none;
      }
  
      .contact {
        position: relative;
      }
  
      .contact::before {
        content: "";
        display: block;
        width: 500px;
        height: 500px;
        border-radius: 300px;
        border: 90px solid #EDB713;
        position: absolute;
        z-index: -1;
        bottom: 0;
        right: 0;
        transform: translate3d(50%, 50%, 0);
      }
  
      .contact-text {
        background: #EDB713;
      }

      .contact__content {
        display: grid;
        grid-template-columns: 2fr 3fr;
        padding: 10rem 0;
      }

      .contact__title h3 {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.2rem;
        display: flex;
        flex-direction: column;
        color: #000;
        margin-top: 0;
      }

      .contact__title h3::after {
        content: "";
        display: block;
        width: 60px;
        height: 4px;
        background-color: #EDB713;
        margin-top: 15px;
      }
  
      .contact__title h1 {
        font-size: 4rem;
        margin-top: 15px;
        line-height: 1.2;
        margin: 0;
        margin-bottom: 2rem;
        color: #000;
      }

      .container-form header {
        display: none;
      }

      #content .form-module {
        background: transparent;
        border: none;
      }

      #content .product-box-action .form-toggle {
        padding: 0;
      }

      .fieldsWrapper input, .form-group textarea {
        border: 2px solid #000 !important;
        border-radius: 0 !important;
        padding: 25px 10px !important;
        margin-bottom: 10px;
      }

      .footerFields {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
      }

      .footerFields .form-group button[type="submit"] {
        border-radius: 0 !important;
      }
    `
    const form = document.querySelector('.product-box-action')
    form.classList.remove('col-xs-12', 'col-sm-5')

    const contact = document.createElement('section')
    contact.classList.add('contact')
    contact.innerHTML = `
    <div class="container">
      <div class="contact__content">
        <div class="contact__title">
          <h3>Contato</h3>
          <h1>Solicite um orçamento</h1>
        </div>
      </div>
    </div>`

    contact.querySelector('.contact__content').appendChild(form)

    const target = document.querySelector('#content')
    target.appendChild(contact)

    const nameField = document.querySelector('#form-79-name').parentNode
    const emailField = document.querySelector('#form-79-email').parentNode
    const phoneField = document.querySelector('#form-79-phone').parentNode
    const msgField = document.querySelector('.form-group textarea[name="message"]').parentNode
    const contactOptions = document.querySelector('.form-group .check-list').parentNode
    const btnSend = document.querySelector('.form-group button[type="submit"]').parentNode

    const allFieldsWrapper = phoneField.parentNode

    const fieldsWrapper = document.createElement('div')
    fieldsWrapper.classList.add('fieldsWrapper')
    allFieldsWrapper.insertBefore(fieldsWrapper, phoneField.nextSibling)
    fieldsWrapper.appendChild(nameField)
    fieldsWrapper.appendChild(emailField)
    fieldsWrapper.appendChild(phoneField)

    const footerFields = document.createElement('div')
    footerFields.classList.add('footerFields')
    allFieldsWrapper.insertBefore(footerFields, contactOptions.nextSibling)
    footerFields.appendChild(contactOptions)
    footerFields.appendChild(btnSend)

    // adicionando labels

    const nameLabel = document.createElement('label')
    nameLabel.setAttribute('for', 'name')
    nameLabel.innerHTML = 'Nome:'
    nameField.insertBefore(nameLabel, nameField.firstChild)

    const emailLabel = document.createElement('label')
    emailLabel.setAttribute('for', 'email')
    emailLabel.innerHTML = 'E-mail:'
    emailField.insertBefore(emailLabel, emailField.firstChild)

    const phoneLabel = document.createElement('label')
    phoneLabel.setAttribute('for', 'phone')
    phoneLabel.innerHTML = 'Telefone:'
    phoneField.insertBefore(phoneLabel, phoneField.firstChild)

    const messageLabel = document.createElement('label')
    messageLabel.setAttribute('for', 'message')
    messageLabel.innerHTML = 'Mensagem:'
    msgField.insertBefore(messageLabel, msgField.firstChild)
  }
})()