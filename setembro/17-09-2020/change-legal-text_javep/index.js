const changeLegalText = () => {
  const newText = `Esta Concessionária Javep Veículos, Peças e Serviços Ltda, atua como Concessionária de Veículos devidamente cadastrada junto à Rede de Concessionários Chevrolet, na condição de Correspondente no País do Banco GM S.A., conhecida no mercado como Chevrolet Serviços Financeiros, nos termos da Resolução n.º 3954 do Banco Central do Brasil, desenvolvendo atividades de atendimento a clientes e usuários, executando serviços de recepção e encaminhamento de propostas. Produtos Ofertados: 1) Financiamento (FDU); 2) Arrendamento Mercantil (Leasing). Tarifas Máximas – Serviços Bancários Pessoa Física e Jurídica: 1) Confecção de Cadastro R$ 729,00; 2) Avaliação, Reavaliação e Substituição de Bens em Garantia R$ 660,00. Vigência a partir de 01/10/2019.

  SITE <a href="https://www.chevroletsf.com.br/Pages/default.aspx" target="_blank" style="color: rgba(255, 255, 255, .5);">www.chevroletsf.com.br</a> | FALE CONOSCO faleconosco.financiamento@gmfinancial.com.
  
  Central de Relacionamento com o Cliente 0800 728 0613 | De 2ª a 6ª feira, das 8h às 20h | Atendimento Eletrônico 24h.
  
  SAC 0800 721 5394 | Deficientes Auditivos 0800 727 0640 (Para informações sobre nossos produtos e serviços, reclamações, cancelamentos ou elogios).
  
  OUVIDORIA 0800 722 6022 | E-mail ouvidoria@gmfinancial.com (Necessário contato prévio na Central de Relacionamento com o Cliente ou SAC, será solicitado protocolo).
  
  Guia de Crédito Consciente (dicas para que você tenha uma vida financeira saudável e organizada) - <a href="https://www.chevroletsf.com.br/guia-de-cr%C3%A9dito-consciente/introdu%C3%A7%C3%A3o/Pages/default.aspx" target="_blank" style="color: rgba(255, 255, 255, .5);">www.chevroletsf.com.br/guia-de-crédito-consciente/introdução</a>.`
  const legalTextWrapper = document.querySelector('.my-3')
  const legalTextParagraph = legalTextWrapper.querySelector('p')

  legalTextParagraph.innerHTML = newText
}

if(isThisPage({ urlPiece: 'ofertas' }) || isThisPage({ urlPiece: 'seminovos' }))
  changeLegalText()