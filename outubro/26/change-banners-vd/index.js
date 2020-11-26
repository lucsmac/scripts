(() => {
  const isThisPage = ({ urlPiece }) => {
    const fullURL = window.location.href
    const result = fullURL.includes(urlPiece)
  
    return result
  }
  
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
  
  const bannersData = [
    {
      page: 'vendas-diretas/pcd',
      imgLink: 'https://legado.autoforce.com.br/genius/zevel/Banner_VDI.png'
    },
    {
      page: 'vendas-diretas/empresas-e-frotista',
      imgLink: 'https://legado.autoforce.com.br/genius/zevel/Banner_VDI.png'
    },
    {
      page: 'vendas-diretas/venda-direta',
      imgLink: 'https://legado.autoforce.com.br/genius/zevel/Banner_VDI.png'
    },
    {
      page: 'vendas-diretas/taxista',
      imgLink: 'https://legado.autoforce.com.br/genius/zevel/Banner_VDI.png'
    },
    {
      page: 'vendas-diretas/auto-escola',
      imgLink: 'https://legado.autoforce.com.br/genius/zevel/Banner_VDI.png'
    }
  ]
  
  const changeBanners = (data) => {
    data.forEach(DataElement => {
      if(isThisPage({ urlPiece: DataElement.page })) {
        addStyle({
          styles: `
            .default-bg__new_vehicle {
              background-image: url("${DataElement.imgLink}");
            }
          `
        })
      }
    });
  }

  changeBanners(bannersData)
})()

/*
Ocultar o ano do veículo nas imagens da interna. Pois o nome do veículo é a partir de uma imagem.

Retirar a exibição de selos dos seminovos

Criar página de política de privacidade no Portal Caltabiano

Alterar campos do formulário de serviços do banner em todos os sites Caltabiano (exceto p

Alterar carrossel de logos do topo do portal de smeinovos

Iserir botão de CTA para "Avalie seu usado" em destaque no topo site.

Cliente relata que não é enviado autoresponder

Portal Caltabiano: campo "Hora desejada" nos formulários de agendamento de serviços

Criar script para inclusão de bloco fixo na índex do layout FCA

Alterar logo da BMW e deixar igual ao site da montadora

Colocar setinha de navegação na versão mobile

set -> 11 - 2 = 9
out -> 40 - 10 = 30

Dunas Peugeot LP: erro de privacidade no safari

Euroville Go: banner mobile está desconfigurado

Aparentemente bugou dnv

Testando pela 2342 vez

Testando o bug, agora vai

Realizando mais um teste no bug da integração com o typeform via zapier

Teste 2 do bug

Testando o bug de duplicação de cards

terterterTESTE

Unidades não aparecem na versão mobile

Banner não tá funcionando direito

TESTE

Carrossel de Vendas Diretas só exibe ofertas PCD

Trocar tabelas de revisão

Alterar arquivos .pdf da tabela de revisão

Atualizar Tabela de Revisão - HMotors

62 - 16 = 46
set -> 11 - 2 = 9 + 46 = 55
out -> 40 - 10 = 30

*/