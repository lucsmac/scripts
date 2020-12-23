(() => {
  document.addEventListener('readystatechange', event => { 

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
      const boxesData = [
        {
          link: 'https://kiadunas.autoforce.com.br/dunas-citroen',
          script: '',
          id: 'channel_919-a',
          logo: 'https://production.autoforce.com/uploads/brand/logo_white/33/logo_brand_kia_branco.png',
          href: '/kia-dunas/seminovos',
          title: 'Seminovos',
          video: 'https://production.autoforce.com/uploads/show/media/1704/Kia_-_Rio_2020.mp4'
        }
      ]

      const target = document.querySelector('#channel-list > .channel-container')

      boxesData.forEach(({ link, video, id, logo, href, title }) => {
          const boxWrapper = document.createElement('a')
          boxWrapper.setAttribute('href', link)
          boxWrapper.innerHTML = boxHTML
          target.appendChild(boxWrapper)
          const boxHTML = `
              <div class="">
                <div class="landing">
                    <div id="${id}" class="base overlay">
                    <div class="image">
                        <div
                        class="bg-video"
                        data-mp4="${video}"
                        data-ogv=""
                        data-webm=""
                        data-poster="https://production.autoforce.com/uploads/show/media/1292/bg.jpg"
                        style="position: relative;"
                        >
                          <div style="position: absolute; z-index: -1; inset: 0px; overflow: hidden; background-size: cover; background-color: transparent; background-repeat: no-repeat; background-position: 50% 50%; background-image: none;">
                              <video autoplay="" loop="" muted="" style="margin: auto; position: absolute; z-index: -1; top: 50%; left: 50%; transform: translate(-50%, -50%); visibility: visible; opacity: 1; width: auto; height: 417px;">
                              <source src="${video}" type="video/mp4" />
                              </video>
                          </div>
                          <div style="position: absolute; z-index: -1; top: 0px; left: 0px; bottom: 0px; right: 0px; overflow: hidden; background-size: cover; background-color: transparent; background-repeat: no-repeat; background-position: 50% 50%; background-image: none; "
                          >
                              <video autoplay="" loop="" muted="" style="margin: auto; position: absolute; z-index: -1; top: 50%; left: 50%; transform: translate(-50%, -50%); visibility: visible; opacity: 1; width: auto; height: 417px;">
                              <source src="${video}" type="video/mp4" />
                              </video>
                          </div>
                        </div>
                    </div>
                    <div class="copy">
                        <div class="logo">
                            <a href="${href}" style="background-image: url('${logo}')">${title}</a>
                        </div>
                    </div>
                    </div>
                    <div class="delimiter"></div>
                </div>
              </div>
          `
      })
    }
  })
})()