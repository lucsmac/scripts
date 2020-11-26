<link rel="stylesheet" media="screen" href="//legado.autoforce.com.br/mods/norpave/banners/banners.css?14092020">
<!-- Dependência para geração do banner na página de seminovos, comentado pois estava a gerar conflito com o carregamento de preços
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>  -->
<script src="//legado.autoforce.com.br/mods/norpave/banners/banners.js?14092020"></script>

<style>
    .card__badges::after {
        margin-bottom: 10px;
        text-transform: uppercase;
        -ms-flex-item-align: start;
        align-self: flex-start;
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 100px;
        content: "Vistoriado";
        color: white;
        background-color: hsl(var(--primary-hue),var(--primary-sat),var(--primary-light));
        text-align: center;
        border-radius: 50px;
        font-size: 12px;
    }

    .card__badges {
        pointer-events: none;
    }

    .veiculo__vistoriado i {
        margin: 0 5px 2px 0;
    }

    .used-vehicles-showcase .usedmodel-showcase__slide .veiculo__vistoriado {
        background: #ff7a00;
        font-size: 16px;
        top: 15px;
        position: absolute;
        z-index: 5;
        border-radius: 0 100px 100px 0;
        padding: 5px 10px;
    }

    .card__cta-used-model {
        background-color: #dd860e;
    }
</style>

<script>
    if(window.location.pathname.includes('ofertas/')){
        document.querySelector('.showcase-offer__conversion-whatsapp-box').remove();
        document.querySelector('.showcase-offer__ctas').remove();
    }
</script>

<!-- 07-04-20: Esconde itens da barra de navegação -->
<script>
    sol.onReady(function () {
        sol.selectAll('.nav-simple ul.nav > li')
        .contains(['Nova Resolução Banco', 'Trocas e Devoluções'])
        .hide();
    });
</script>

<!-- 07-04-20: Adiciona botão de whatsapp no canto inferior esquerdo -->
<script>
    sol.onReady(function () {
        sol.select('body')
        .render($comps.WhatsAppButton, {
            title: 'Fale conosco',
            message: 'Olá, tudo bem?',
            items: [
            { title: 'Novos', phone: '43999481600' },
            { title: 'Seminovos', phone: '43999462828' },
            ]
        }, null, true);
    });
</script>

<!-- 07-04-20: Remove collapses do botão de Telefones e adiciona um novo collapse, aberto por padrão -->
<script>
    sol.onReady(function () {
        var dropdown = document.getElementById('header-card-phones');
        var collapseClone = dropdown.querySelector('.header__card-phones-items').cloneNode(true);
        var collapseItemClone = collapseClone.querySelector('.header__card-phones-item').cloneNode(true);

// Changes dropdown name
var dropdownHeader = dropdown.querySelector('.card-collapse__header');
dropdownHeader.textContent = 'Norpave VW - Tiradentes';

// Removes all items from collapse clone
var collapseContainer = collapseClone.querySelector('.list--header-phones');
sol.select(collapseContainer).findAll('.header__card-phones-item').remove();

// Adds all items to collapse
var newItems = [
{ title: 'Novos: ', phone: '4333782860' },
{ title: 'Seminovos: ', phone: '4333782910' },
{ title: 'Pós-vendas: ', phone: '4333782884' },
{ title: 'Peças: ', phone: '4333782875' },
];

var newCollapseItems = newItems.forEach(function (item) {
    var itemClone = collapseItemClone.cloneNode(true);
    var itemLink = itemClone.querySelector('a');
    itemLink.href = 'tel: ' + item.phone;

    var itemTitle = itemClone.querySelector('strong');
    itemTitle.textContent = item.title;

    var itemPhone = itemClone.querySelector('.text-mask-phone');
    var phoneText = item.phone.replace(/^(\d{2})(\d)/g, "($1) $2");
    phoneText = phoneText.replace(/(\d)(\d{4})$/, "$1-$2");
    itemPhone.textContent = phoneText;

    collapseContainer.append(itemClone);
});

// Removes all collapses and appends new collapse to dropdown
sol.select(dropdown).findAll('.header__card-phones-items').remove();
sol.select(dropdown).append(collapseClone);
sol.select(collapseContainer.parentNode).addClass('show');
});
</script>

<!-- 07-04-20: Move itens do dropdown de pós-venda para peças e acessórios -->
<script>
    sol.onReady(function () {
        var posVendaItem =
        sol.selectAll('.nav-simple ul.nav > li')
        .contains('Pós-venda');

        var pecasItem =
        sol.selectAll('.nav-simple ul.nav > li')
        .contains('Peças e');

        var pecasLinks = posVendaItem.ref()
        .findAll('.dropdown-menu ul > li')
        .contains(['Peças', 'Acessórios']);

        pecasItem.ref()
        .find('.dropdown-menu ul')
        .prepend(pecasLinks.nodes());

        posVendaItem.ref()
        .findAll('.dropdown-menu ul > li')
        .contains('Agendamento').hide();

        posVendaItem.ref()
        .findAll('.dropdown-menu ul > li a')
        .contains('Serviços')
        .setText('Serviços e Agendamento');
    });
</script>


<!-- 07-04-20: Adiciona botão de best-drive nas internas de novos -->
<script>

    sol.onReady(function () {
        if (document.location.pathname.includes('/novos/')) {
            var groupSlug = document.location.pathname
            .split('/')
            .filter(function (str) { return str; })
            .reverse().pop()

            function makeCTABox(title, sub, btnTitle) {
                var newBox = document.createElement('div');
                newBox.classList.add('cta-box', 'cta-box--vertical', 'text-center', 'mt-4');

                var boxTitle = document.createElement('div');
                boxTitle.classList.add('cta-box__title', 'text-uppercase');
                boxTitle.textContent = title;

                var boxSub = document.createElement('div');
                boxSub.classList.add('used-vehicles-showcase__cta-box-phrase', 'cta-box__phrase', 'text-center', 'justify-content-center');
                boxSub.textContent = sub;

                var boxLink = document.createElement('a');
//boxLink.href = '/' + groupSlug + '/empresa/agende-um-best-drive';
boxLink.href = '/empresa/agende-um-best-drive';

var boxBtn = document.createElement('button');
boxBtn.classList.add('btn', 'button', 'button--primary');
boxBtn.textContent = btnTitle;

boxLink.append(boxBtn);
newBox.append(boxTitle, boxSub, boxLink);

return newBox;
}

var testDriveBox = makeCTABox('Faça um Best-Drive!', 'Entre em contato conosco para fazer um agendamento.', 'AGENDAR BEST-DRIVE');
sol.select('.showcase__col-whatsapp-box .legal-text').containsURL('/novos/').after(testDriveBox);
}
});
</script>

<!-- 07-04-20: Adiciona menu com 'Nova Resolução' e 'Trocas e Devoluções' no footer -->
<script>
    sol.onReady(function () {
        function makeMenuLink(itemBase) {
            var menuLink = document.createElement('a');
            menuLink.classList.add('text-white', 'mr-3')
            menuLink.style = "font-size: 14px";
            menuLink.innerHTML = '<i class="icon icon icon-arrow-r" style="font-size: 10px;"></i>'+itemBase.textContent;
            menuLink.href = itemBase.href;

//var menuLinkP = document.createElement('p');
//menuLinkP.append(menuLink);
return menuLink;
}

var menuContainer = document.createElement('div');
menuContainer.classList.add('container', 'text-light', 'd-md-block', 'd-none');

var menuHeader = document.createElement('h6');
menuHeader.classList.add('mb-2');
menuHeader.style = "border-bottom: 2px solid; display: table; padding: 0 0 5px; margin-bottom: 20px  !important;"
menuHeader.textContent = 'OPÇÕES';
menuContainer.append(menuHeader);

var footerSeparator = sol.select('.footer__separator');
var footerSeparatorClone = footerSeparator.ref().clone(true);
footerSeparator.before(footerSeparatorClone);
footerSeparator.before(menuContainer);

sol.selectAll('.nav-simple ul.nav > li a')
.contains(['Nova Resolução', 'Trocas e Devo'])
.forEach(function (navLink) {
    menuContainer.append(makeMenuLink(navLink));
});
});
</script>

<!-- 07-03-20: Reordena barra de navegação -->
<script>
    sol.onReady(function () {
        function beforePivot(itemName, pivotName) {
            var pivot = sol.selectAll('.nav-simple ul.nav > li > a').contains(pivotName).closest('li');
            var item = sol.selectAll('.nav-simple ul.nav > li > a').contains(itemName).closest('li');
            pivot.before(item);
        }

        beforePivot('Vendas diretas', 'Peças e');
        beforePivot('Peças e', 'Norpave');
    });
</script>

<!-- 07-04-20: Reordena dropdown de novos -->
<script>
    sol.onReady(function () {
        var novosDropdown = sol.selectAll('.nav-simple ul.nav > li').contains('Novos').find('.dropdown-menu ul');
        function afterPivot(itemName, pivotName) {
            var pivot = novosDropdown.ref().findAll('li').contains(pivotName);
            var item = novosDropdown.ref().findAll('li').contains(itemName);
            pivot.after(item);
        }

        afterPivot('Best', 'Veículos');
        afterPivot('Avalie', 'Best');
        afterPivot('Financiamento', 'Avalie');
        afterPivot('Seguro', 'Financiamento');
        afterPivot('Consórcios', 'Seguro');
    });
</script>

<!-- 15-04-20: Remove consórcios do menu e adiciona no dropdown de novos -->
<script>
    sol.onReady(function () {
        sol.selectAll('.nav-simple ul.nav > li').contains('Consórcios')
        .hide()
        .forEach(function (consorciosItem) {
            var novosDropdown = sol.selectAll('.nav-simple ul.nav > li').contains('Novos').find('.dropdown-menu ul');
            var dropdownItemClone = novosDropdown.ref().find('li').clone(true);
            var consorciosLink = consorciosItem.querySelector('a');

            novosDropdown.append(dropdownItemClone);
            dropdownItemClone.find('a').setText(consorciosItem.textContent).setAttribute('href', consorciosLink.href);
        });
    });
</script>

<!-- 09-04-20: Esconde unidades bugadas de seminovos do footer -->
<script>
    sol.onReady(function () {
        sol.selectAll('.footer-units__nav > li')
        .contains('Seminovos')
        .filter(function (item, idx) { return idx !== 0; })
        .hide();
    });
</script>

<!-- 20-04-20: Adiciona selo de premium na seção de ofertas premium da página de seminovos -->
<script>
    sol.onReady(function () {
        function makePremiumIcon() {
            var newIcon = document.createElement('div');
            newIcon.textContent = 'Premium'
            newIcon.classList.add('card__badge-item', 'badge', 'badge--pill', 'badge--card-used-model');
            newIcon.style.backgroundColor = 'hsl(var(--secondary-hue),var(--secondary-sat),var(--secondary-light))';
            return newIcon;
        }

        sol.select('.section-component__title.carousel-used-models-featured__title')
        .containsURL('/seminovos')
        .setText('Nossas Ofertas');

        sol.selectAll('.carousel-used-models-featured__carousel .carousel__item .card__badges .card__badge-item:nth-child(1)')
        .forEach(function (item) {
            item.after(makePremiumIcon());
        });
    });
</script>


<!-- 05-04-20: Renomeia header de serviços -->
<script>
    sol.onReady(function () {
        sol.select('.showcase-services .showcase-services__header')
        .setText('Serviços e Agendamento');
    });
</script>

<!-- Remove modal de whatsapp do botão de whatsapp da barra de navegação -->
<script>
    sol.onReady(function () {
        function makeWhatsAppLink(phoneText) {
            var cleanPhone = phoneText.replace(/\D/g, '');
            return 'https://api.whatsapp.com/send?phone=' + cleanPhone + '&text=Olá,%20tudo%20bem?'
        }

        function setWhatsAppLink(link) {
            var phoneText = link.querySelector('.text-mask-phone');
            var newWppLink = makeWhatsAppLink(phoneText.textContent);
            link.href = newWppLink;
        }

        $('.header-mobile__whatsapp-link').unbind('click');
        sol.selectAll('.header-mobile__whatsapp-link').forEach(setWhatsAppLink)
    });
</script>

<!-- Remove modal de whatsapp do botão da seção de novos na index -->
<script>
    sol.onReady(function () {
        $('.vehicles-new__button-whatsapp').unbind('click');

        var newSectionWppBtn = document.querySelector('.vehicles-new__button-whatsapp');
        if (newSectionWppBtn) {
            var btnHTML = newSectionWppBtn.outerHTML;
            btnHTML = btnHTML.replace('<button', '<a');
            btnHTML = btnHTML.replace('</button', '</a');
            newSectionWppBtn.outerHTML = btnHTML;

// Seleciona o botão novamente, após HTML ser reconstruído
newSectionWppBtn = document.querySelector('.vehicles-new__button-whatsapp');
newSectionWppBtn.href = sol.select(newSectionWppBtn).getData().link;
}
});
</script>


<!-- Remove modal do botão de whatsapp da interna de novos -->
<script>
    sol.onReady(function () {

        function removeWhatsAppModal(wppBtn, btnQuery, mobileBtnQuery) {
            var wppBtnClone = wppBtn.cloneNode(true);
            var wppBtnHTML = wppBtnClone.outerHTML;

// Substitui tag de botão por 
wppBtnHTML = wppBtnHTML.replace('<button', '<a');
wppBtnHTML = wppBtnHTML.replace('</button', '</a');

// Substitui botão antigo por clone transformado em link
wppBtn.before(wppBtnClone);
wppBtn.remove();

// Seleciona CTA antes de substituir o HTML
var btnCTABox = wppBtnClone.closest('[data-link]');
wppBtnClone.outerHTML = wppBtnHTML;

// Usa url da CTA para o novo link
wppBtnClone = btnCTABox.querySelector(btnQuery);
wppBtnClone.href = sol.select(btnCTABox).getData().link;

// Adiciona evento pra versão mobile
sol.select(mobileBtnQuery)
.setData('proxyEvent', 'click@'.concat(btnQuery))
.addEvent('click', function () {
    wppBtnClone.click();
});
}

sol.select('#new-vehicles-showcase_cta-box-button')
.containsURL('/novos/')
.forEach(function (wppBtn) {
    removeWhatsAppModal(wppBtn, '#new-vehicles-showcase_cta-box-button', '.button--whatsapp[data-proxy-event]');
});

sol.select('#used-vehicles-showcase_cta-box-button')
.containsURL(['/seminovos/', '/ofertas-unicas/'])
.forEach(function (wppBtn) {
    removeWhatsAppModal(wppBtn, '#used-vehicles-showcase_cta-box-button', '.button--whatsapp[data-proxy-event]');
});
});
</script>

<!-- 28-05-20: Ajusta menu e desloca texto legal -->
<script>
    document.querySelector('[href="https://tradein.autoavaliar.com.br/group/norpave-seminovos/3372zPgwwd/1072zPBMCd"]').setAttribute('target', '_blank');
    document.querySelector('[href="https://eshops.mercadolivre.com.br/VWNORPAVEVEICULOS"]').setAttribute('target', '_blank');

    sol.onReady(function () {
        if(window.location.pathname.includes('novos/')){
            document.querySelector('.showcase__col-whatsapp-box').insertBefore(document.querySelector('.cta-box--vertical'), document.querySelector('.legal-text'));
            document.querySelector('.legal-text').classList.add('mt-3');
        }
    })
</script>

<!-- 25-05-20: Adiciona botões em ofertas e novos  -->
<script>
    sol.onReady(function () {
        $(".conversion-step__actions .btn").text("Enviar");
        function makeButton(title, url, variant, icon, classStyle, removeClass) {
            classStyle = classStyle || 'btn'
            var newBtn = document.createElement('a');
            newBtn.classList.add('btn', 'button', 'w-100', 'd-flex', 'align-items-center', 'justify-content-center', 'mb-2', variant, classStyle);
            newBtn.id = 'btn--set'
            newBtn.style.height = '50px';
            newBtn.target = '_blank';
            newBtn.textContent = title;
            newBtn.href = url;

            if (icon) {
                var newIcon = document.createElement('i');
                newIcon.classList.add('icon', icon, 'mr-2');
                newBtn.prepend(newIcon);
            }

            if (removeClass) {
                newBtn.classList.remove(removeClass)
            }

            return newBtn;
        }

        var newBtn = makeButton('Negocie Online', 'https://api.whatsapp.com/send?phone=5543999481600&text=', 'button--whatsapp', 'icon-whatsapp', 'new-btn');        
        var dealBtn = makeButton('Negocie Online', 'https://api.whatsapp.com/send?phone=554399462828&text=', 'button--whatsapp', 'icon-whatsapp', 'used-btn');
        var usedBtn = makeButton('Avalie Seu Usado', 'https://tradein.autoavaliar.com.br/group/norpave-seminovos/3372zPgwwd/1072zPBMCd', 'button--primary');
        var dealMblBtn = makeButton('Negocie Online', 'https://api.whatsapp.com/send?phone=554399462828&text=', 'button--whatsapp', 'icon-whatsapp');
        var servicesBtn = makeButton('Consultor Online', 'https://api.whatsapp.com/send?phone=5543999414290&text=', 'button--whatsapp', '','mt-2','w-100');
        var servicesInnerBtn = makeButton('Negocie pelo Whatsapp', 'https://api.whatsapp.com/send?phone=5543999414290&text=', 'button--whatsapp');
        var accBtn = makeButton('Negocie pelo Whatsapp', 'https://api.whatsapp.com/send?phone=5543999922828&text=', 'button--whatsapp');
        var pecasBtn = makeButton('Negocie pelo Whatsapp', 'https://api.whatsapp.com/send?phone=5543999414290 &text=', 'button--whatsapp');
        var directInnerBtn = makeButton('Negocie pelo Whatsapp', 'https://api.whatsapp.com/send?phone=554399947541&text=', 'button--whatsapp');

        sol.select('.showcase-new__conversion-form')
        .containsURL('/novos/')
        .setStyle('margin-bottom', '1rem')
        .after([usedBtn]); 

        sol.select('.used-vehicles-showcase__conversion-form')
        .containsURL('/seminovos/')
        .setStyle('margin-bottom', '1rem')
        .before([dealBtn, usedBtn]);

        sol.select('[data-scroll-to=".used-vehicles-showcase__conversion-form"]')
        .containsURL('/seminovos/')
        .before([dealMblBtn]);

        sol.select('.showcase-offer__conversion-form')
        .containsURL('/ofertas/')
        .setStyle('margin-bottom', '1rem')
        .before([newBtn, usedBtn]);

        sol.select('.showcase-services__panel-btn-schedule')
        .containsURL('/servicos')
        .after([servicesBtn]);

        sol.select('.showcase-service__conversion-form')
        .containsURL('/oferta-servico/')
        .before([servicesInnerBtn]);

        sol.select('.showcase-offer__conversion-form')
        .containsURL('/vendas-diretas/')
        .before([directInnerBtn]);

        sol.select('.parts-showcase__conversion-form')
        .containsURL('/pecas/')
        .before([pecasBtn]);

        sol.select('.accessories-showcase__conversion-form')
        .containsURL('/acessorios/')
        .before([accBtn]);

//Remove botão em novos e seminovos no mobile
if(window.location.pathname.includes('/novos/')){
    document.getElementById('btn--set').classList.add('btn-novos')
}
});
</script>