
    // SUBSTITUA A DATA DESEJADA NO CAMPO ABAIXO COM ASPAS
    var data = $(".legal-text b, .accessories-showcase__info b, .parts-showcase__info b").text();
    var conteudo = "*Promoção válida até <b>" +data+ "</b> ou enquanto durar o estoque. Valor para pagamento à vista. No caso de oferta vinculada a financiamento bancário, verificar a instituição bancária participante da campanha. Cadastro sujeito a análise de crédito pela instituição financeira participante da campanha para aprovação. Demais veículos e opções de pagamentos sujeitos a outras modalidades de financiamento. Oferta não cumulativa com outras ofertas vigentes. Imagem meramente ilustrativa. A Concessionária reserva-se o direito de corrigir possíveis erros gráficos, bem como alterar as especificações de seus produtos, ou mesmo descontinuá-los, independente de aviso ou comunicação e sem incorrer em obrigações ou responsabilidades de qualquer espécie. Consulte e confirme todas as informações na respectiva loja anunciante." 
    document.querySelector('.legal-text') ? document.querySelector('.legal-text').innerHTML = conteudo : "";
    document.querySelector('.parts-showcase__info') ? document.querySelector('.parts-showcase__info').innerHTML = conteudo : "";
    document.querySelector('.accessories-showcase__info') ? document.querySelector('.accessories-showcase__info').innerHTML = conteudo : "";


(() => {
  const legalTextEl = document.querySelector('.legal-text')
  const lastDayOfMonth = () => { 
    const addZero = (number) => String(number).length == 1 ? `0${0}` : number

    const today = new Date()
    const lastDayDirtyTemplate = new Date(today.getFullYear(), today.getMonth() + 1, 0)
    const day = addZero(lastDayDirtyTemplate.getDate())
    const month = addZero(lastDayDirtyTemplate.getMonth() + 1)
    const year = lastDayDirtyTemplate.getFullYear()
    const lastDay = `${day}/${month}/${year}`
    return lastDay
  }

  const newLegalText = `<p>*Promoção válida até <b>${lastDayOfMonth()}</b> ou enquanto durar o estoque. Valor para pagamento à vista. No caso de oferta vinculada a financiamento bancário, verificar a instituição bancária participante da campanha. Cadastro sujeito a análise de crédito pela instituição financeira participante da campanha para aprovação. Demais veículos e opções de pagamentos sujeitos a outras modalidades de financiamento. Oferta não cumulativa com outras ofertas vigentes. Imagem meramente ilustrativa. A Concessionária reserva-se o direito de corrigir possíveis erros gráficos, bem como alterar as especificações de seus produtos, ou mesmo descontinuá-los, independente de aviso ou comunicação e sem incorrer em obrigações ou responsabilidades de qualquer espécie. Consulte e confirme todas as informações na respectiva loja anunciante.</p>`
  
  legalTextEl.innerHTML = newLegalText
})()