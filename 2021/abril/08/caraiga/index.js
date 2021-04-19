(() => {
  document.addEventListener('readystatechange', event => { 
    if (event.target.readyState === "complete") {
      const cards = Array.from(document.querySelectorAll('.channel-container > a'))
      const audiCard = cards.find(card => !!card.querySelector('#channel_846'))
      const audiLogoLink = audiCard.querySelector('.logo a')
      audiCard.href = 'https://audicentermorumbi.com.br/'
      audiLogoLink.href = 'https://audicentermorumbi.com.br/'
    }
  });
})()