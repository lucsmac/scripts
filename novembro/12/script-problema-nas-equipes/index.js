sol.onReady(function () {
  function checkLocation(){
    if(window.location.pathname.includes("/pecas")){
      return "Part";
    } else if(window.location.pathname.includes("/acessorios")){
      return "Accessory";
    } else if(window.location.pathname.includes("/vendas-diretas")){
      return "DirectSale";
    } else if(window.location.pathname.includes("/seminovos")){
      return "UsedModel";
    } else if(window.location.pathname.includes("/servicos")){
      return "Service";
    } else {
      return "Clone";
    }
  }

    function findWppLinkProps(phone) {
        var phoneWppLinks = sol.selectAll('.header-desktop .header-mobile__whatsapp-link').nodes();
        var props = null;
        for (var i = 0; i < phoneWppLinks.length; i++) {
            var data = sol.select(phoneWppLinks[i]).getData();
            var phoneData = data.number.replace(/\D/g, '');
            if (phoneData === phone) props = data;
        }

        return props;
    }

    function bindOpenWppModal(wppLink) {
        var wppHref = wppLink.href;
        var paramString = wppHref.substring(wppHref.indexOf('?'), wppHref.length).replace('?', '');
        var paramDict = paramString.split('&').reduce(function (acc, nextVal) {
            var keyValue = nextVal.split('=');
            acc[keyValue[0]] = keyValue[1];
            return acc;
        }, {});

        var props = findWppLinkProps(paramDict['phone']);
        if (props) {
            wppLink.addEventListener('click', function (e) {
                e.preventDefault();
                sol.select('.header-conversion-form-whatsapp-modal')
                    .render(window.WhatsAppFormModal, Object.assign({}, props, {
                        open: true,
                        showUnits: JSON.parse(props.showUnits),
                        showCpf: !!JSON.parse(props.showCpf),
                        category: checkLocation()
                    }))
            });
        }
    }

    sol.select('#popup-whats > a').forEach(bindOpenWppModal);
    sol.select('a > #popup-whats').closest('a').forEach(bindOpenWppModal);
});