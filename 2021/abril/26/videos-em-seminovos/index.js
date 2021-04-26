(async () => {
  if(window.location.href.includes('/')) {
    const newVideo = (iframeCode, slug) => {
      return { iframeCode, slug }
    }
    
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

    const appendVideo = (target, videosList) => {
      if (!target || !videosList) return
      const currUrl = window.location.href
      const currentVideo = videosList.find((video) => currUrl.includes(video.slug))

      const video = document.createElement('div')
      video.innerHTML = currentVideo.iframeCode
      video.classList.add('used_models--video')
      addStyle`
        .used_models--video {
          overflow: hidden;
          position: relative;
          width:100%;
          margin-bottom: 3rem;
        }
        
        .used_models--video::after {
          padding-top: 56.25%;
          display: block;
          content: '';
        }
        
        .used_models--video iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `

      target.parentNode.insertBefore(video, target)
    }

    const response = await fetch(`https://spreadsheets.google.com/feeds/cells/178RsMlTokYViQ-UziABJwgYNN8MdBfGXTeg2FB6wAh4/1/public/full?alt=json`)
    const data = await response.json()
    const entries = data.feed.entry
    const videos = entries.reduce((acc, entry) => {
      const row = entry.gs$cell.row
      if (Number(row) === 1) return acc
      
      const col = entry.gs$cell.col
      const value = Number(col) === 1 ? { video: entry.content.$t } : { slug: entry.content.$t }

      const accValue = acc[row - 2]
      const finalObject = accValue ? Object.assign(accValue, value) : value
      acc[row - 2] = finalObject
      
      return acc
    }, [])

    const shareElement = document.querySelector('.social-sharer')
    appendVideo(shareElement, videos)
  }
})()