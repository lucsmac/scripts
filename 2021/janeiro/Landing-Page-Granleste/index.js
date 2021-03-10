(() => {
  if(window.location.href.includes('/novo-xc40/recharge')) {
    const highlightsBgImage = 'https://cdn.discordapp.com/attachments/750695916994035742/801513359093661756/unknown.png'
    const highlightsTitle = 'XC40 Recharge<br />O híbrido Volvo'
    const highlightsText = 'O XC40 Recharge totalmente elétrico permite uma experiência de condução sem emissões de carbono, mas poderosa. Feito para você e para o mundo que compartilhamos. Um SUV urbano de verdade. Perfeitamente conectado. Adaptado ao seu estilo de vida. É um XC40, recarregado para fornecer sua experiência de condução mais pessoal. Experimente um SUV totalmente elétrico e compacto que transporta e ajuda a proteger o que é mais importante para você. Com mais segurança, você pode aproveitar o passeio'

    const chargersBgImage = 'https://cdn.discordapp.com/attachments/750695916994035742/801523256238145536/landscape-2_final_a.png'
    const chargersTitle = 'Texto institucional'
    const chargersText = 'O XC40 Recharge totalmente elétrico permite uma experiência de condução sem emissões de carbono, mas poderosa. Feito para você e para o mundo que compartilhamos. Um SUV urbano de verdade. Perfeitamente conectado. Adaptado ao seu estilo de vida. É um XC40, recarregado para fornecer sua experiência de condução mais pessoal.'
    const chargersButtonText = 'Onde recarregar meu XC40'
    const chargersButtonLink = 'https://developer.plugshare.com/docs/'
    
    highlightContent({
      bgImage: highlightsBgImage,
      title: highlightsTitle,
      text: highlightsText
    })

    customContent({
      bgImage: chargersBgImage,
      title: chargersTitle,
      text: chargersText,
      buttonText: chargersButtonText,
      buttonLink: chargersButtonLink,
    })
  }
})