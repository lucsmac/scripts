(() => {
  const videos = [
      {
          target: '#channel_918',
          video: 'https://production.autoforce.com/uploads/show/media/1704/Kia_-_Rio_2020.mp4'
      },
      {
          target: '#channel_916',
          video: 'https://production.autoforce.com/uploads/show/media/1833/2008_0001-0502.mp4'
      },
      {
          target: '#channel_917',
          video: 'https://production.autoforce.com/uploads/show/media/1104/Citroen_-_Aircross__2020_.mp4'
      },
  ]
  
  videos.forEach(({ target, video }) => {
      const targetVideo = document.querySelector(`${target}.base .image`)
      targetVideo.innerHTML = `
      <div
          class="bg-video"
          data-mp4="${video}"
          data-ogv=""
          data-webm=""
          data-poster="https://production.autoforce.com/uploads/show/media/1292/bg.jpg"
          style="position: relative;"
      >
          <div
              style="
                  position: absolute;
                  z-index: -1;
                  top: 0px;
                  left: 0px;
                  bottom: 0px;
                  right: 0px;
                  overflow: hidden;
                  background-size: cover;
                  background-color: transparent;
                  background-repeat: no-repeat;
                  background-position: 50% 50%;
                  background-image: none;
              "
          >
              <video autoplay="" loop="" muted="" style="margin: auto; position: absolute; z-index: -1; top: 50%; left: 50%; transform: translate(-50%, -50%); visibility: visible; opacity: 1; width: auto; height: 417px;">
                  <source src="${video}" type="video/mp4" />
              </video>
          </div>
      </div>
    `
  })
})()
