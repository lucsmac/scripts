function appendWarningPopup(popupData, url) {
    
  const timeRange = (end) => {
    const start = new Date()
    
    const deltaTime = end - start
    const days = Math.floor(deltaTime / (1000 * 60 * 60 * 24))
    let rest = deltaTime % (1000 * 60 * 60 * 24)
    const hours = Math.floor(rest / (1000 * 60 * 60))
    rest = deltaTime % (1000 * 60 * 60)
    const minutes = Math.floor(rest / (1000 * 60))
    rest = deltaTime % (1000 * 60)
    const seconds = Math.floor(rest / (1000))

    return {
      days,
      hours,
      minutes,
      seconds
    }
  }

  const endOfURL = url
  
  if(window.location.href.endsWith('/') || window.location.href.endsWith('.com') || window.location.href.endsWith('.com.br') || window.location.href.endsWith(endOfURL) ) {

    const popup = document.createElement('div')

    const buildButtons = (buttons) => {
      const content = buttons.length >= 1 ? buttons.reduce(( prev, { buttonText, buttonLink }) => {
        return prev + (buttonText ? '<a class="btn btn-popup-in" href="' + buttonLink + '">' + buttonText + '</a>' : '')
      }, '') : ''

      return content
    }

    const buildPopupCode = ({ title, content, buttonText, buttonLink, extraButtons = [] }) => {
      const htmlButtons = buildButtons([{buttonText, buttonLink}, ...extraButtons])
      
      const contentParagraphs = content.reduce((prev, text, i) => {
        const paragraph = '<p>' + text + '</p>'
        return prev + paragraph
      }, ``)
      
      return `
      <div class="on-enter-popup-fancybox">
        <div class="popup-wrapper">
          <div class="popup-content">
            <h1>${title}</h1>
            ${contentParagraphs}
            <div class="black-friday-chronometer">
              <span id="black-friday-chronometer-days" class="black-friday-chronometer__item">2</span>
              <span id="black-friday-chronometer-hours" class="black-friday-chronometer__item">21</span>
              <span id="black-friday-chronometer-minutes" class="black-friday-chronometer__item">43</span>
              <span id="black-friday-chronometer-seconds" class="black-friday-chronometer__item">2</span>
            </div>
            ${htmlButtons}
          </div>
          <span class="popup-fancybox-btn-close">x</span>
        </div>
      </div>
    `
    }

    popup.innerHTML = buildPopupCode(popupData)

    popup.classList.add('popup-overlay')

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
        @import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');

        .popup-overlay {
          position: fixed;
          z-index: 999999;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: rgba(0, 0, 0, .95);
        }

        .on-enter-popup-fancybox {
          position: fixed;
          z-index: 999999;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          background-color: #000;
          box-shadow: -4px 1px 4px rgba(0, 0, 0, .6);
          min-width: 60vw;
          min-height: 70vh;
        }

        .on-enter-popup-fancybox .popup-wrapper {
          position: relative;
          padding: 80px;
        }

        .on-enter-popup-fancybox .popup-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #fff;
          max-width: 50vw;
        }

        .on-enter-popup-fancybox .popup-content h1 {
          text-transform: uppercase;
          padding-bottom: 64px;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: 'Monoton', cursive;
          font-size: 86px;
          line-height: 1;
          font-weight: bold;
        }

        .on-enter-popup-fancybox .popup-content h1 span {
          color: red;
        }

        .on-enter-popup-fancybox .popup-content h1::after {
          content: '';
          width: 30%;
          height: 2px;
          display: block;
          background-color: #fff;
          margin-top: 12px;
        }

        .on-enter-popup-fancybox .popup-content .btn-popup-in {
          padding: 12px 32px;
          border: 1px solid #fff;
          color: #fff;
          text-transform: uppercase;
          width: 100%;
          margin-top: 80px;
          background-color: #000;
          transition: all .3s ease;
        }

        .on-enter-popup-fancybox .popup-content .btn-popup-in + .btn-popup-in{
          margin-top: 15px;
        }

        .on-enter-popup-fancybox .popup-content .btn-popup-in:hover {
          color: #000;
          background-color: #fff;
          transition: all .3s ease;
        }

        .on-enter-popup-fancybox .popup-fancybox-btn-close {
          position: absolute;
          right: 15px;
          top: 15px;
          font-size: 1.5rem;
          color: #fff;
          font-family: sans-serif;
          cursor: pointer;
          width: 30px;
          height: 30px;
          text-align: center;
          border-radius: 50%;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .on-enter-popup-fancybox .popup-fancybox-btn-close:hover {
          color: red;
        }

        .black-friday-chronometer {
          display: grid;
          gap: 0 15px;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          margin-top: 24px;
        }

        .black-friday-chronometer__item {
          width: 60px;
          height: 60px;
          border-radius: 10px;
          background-color: red;
          color: aliceblue;
          font-size: 35px;
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .black-friday-chronometer__item::after {
          content: 'Dias';
          color: white;
          opacity: .8;
          font-size: 12px;
          font-weight: 300;
          position: absolute;
          top: 70px;
        }

        #black-friday-chronometer-days::after {
          content: 'Dias';
        }

        #black-friday-chronometer-hours::after {
          content: 'Horas';
        }

        #black-friday-chronometer-minutes::after {
          content: 'Minutos';
        }

        #black-friday-chronometer-seconds::after {
          content: 'Segundos';
        }

        @media screen and (max-width: 768px) {
          .on-enter-popup-fancybox .popup-fancybox img {
            max-width: 90vw;
          }

          .on-enter-popup-fancybox .popup-content h1 {
            font-size: 48px;
          }

          .on-enter-popup-fancybox .popup-content {
            padding: 10%;
            min-width: 100vw;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .black-friday-chronometer__item {
            width: 50px;
            height: 50px;
          }

          .black-friday-chronometer__item h1 {
            font-size: 30px
          }

          .black-friday-chronometer__item h1 span{
            top: 55px;
          }

          .on-enter-popup-fancybox .popup-fancybox-btn-close {
            top: 105px;
            right: 105px;
          }
        }
      `
    })

    document.body.appendChild(popup)
    localStorage.setItem('popup-in', 'opened')

    const btnClose = document.querySelector('.popup-fancybox-btn-close')
    btnClose.addEventListener('click', () => {
      document.body.removeChild(popup)
      localStorage.setItem('popup-in', 'closed')
    })

    const ctaClose = document.querySelector('.btn-popup-in')
    ctaClose && ctaClose.addEventListener('click', () => {
      document.body.removeChild(popup)
      localStorage.setItem('popup-in', 'closed')
    })


    // run chronometer

    let { seconds, minutes, hours, days } = timeRange(popupData.finalDate)
    const targetSeconds = document.querySelector('#black-friday-chronometer-seconds')
    const targetMinutes = document.querySelector('#black-friday-chronometer-minutes')
    const targetHours = document.querySelector('#black-friday-chronometer-hours')
    const targetDays = document.querySelector('#black-friday-chronometer-days')

    const updateChronometer = setInterval(() => {
      // let { seconds, minutes, hours, days } = initialState
      
      if(seconds === 0) {
        seconds = 59
        minutes = minutes === 0 ? 59 : minutes - 1
        targetMinutes.innerHTML = minutes
      } else {
        seconds -= 1
      }

      if(minutes === 0 && seconds === 0) {
        hours = hours === 0 ? 23 : hours - 1
        targetHours.innerHTML = hours
      }

      if(hours === 0 && minutes === 0 && seconds === 0) {
        days -= 1
        targetDays.innerHTML = days
      }
      
      targetSeconds.innerHTML = seconds
    }, 1000)

    if(days < 0 || hours < 0 || minutes < 0 || seconds < 0) {
      seconds = '00'
      minutes = '00'
      hours = '00'
      days = '00'

      console.log(seconds, minutes, hours, days)

      targetSeconds.innerHTML = seconds
      targetMinutes.innerHTML = minutes
      targetHours.innerHTML = hours
      targetDays.innerHTML = days
      
      clearInterval(updateChronometer)
    } else {
      targetSeconds.innerHTML = seconds
      targetMinutes.innerHTML = minutes
      targetHours.innerHTML = hours
      targetDays.innerHTML = days
    }

  }

}

const popupData = { 
  title: 'Black<br /><span>Friday</span>',
  content: [
    'Insira qualquer texto aqui',
    'Esse popup é super legal'
  ],
  buttonText: 'Confira as nossas ofertas',
  buttonLink: 'http://carmais.lvh.me:3000/jangadanissan/seminovos',
  extraButtons: [
    {
      buttonText: 'Mais uma oferta',
      buttonLink: 'http://carmais.lvh.me:3000/jangadanissan/seminovos',
    },
  ],
  finalDate: new Date(2020, 10, 24, 9, 51, 0, 0)
}

appendWarningPopup(popupData, 'jangadanissan/?force_cache_clear=123123123')