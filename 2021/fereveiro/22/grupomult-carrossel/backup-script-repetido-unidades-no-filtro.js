setTimeout(function () {
    sol.onReady(function () {
        var brandMap = {
            'Cachoeiro de Itapemirim': 'Nissan',
            'Multicar Itapoã': 'Mitsubishi',
            'Multicar Lindenberg': 'Nissan',
        };

        sol.selectAll('#phones-main ul.accordion > li')
            .forEach(function (item) {
                var brandHeader = item.querySelector('.link');
                var unitItems = item.querySelectorAll('strong');

                var brandName = brandHeader.textContent.trim();
                unitItems.forEach(function (unitItem) {
                    var unitName = unitItem.textContent.trim();
                    brandMap[unitName] = brandName;
                });
            });

        function makeBrandedLabel(label) {
            var unitBrand = brandMap[label.textContent] || '';
            label.textContent = unitBrand + ' ' + label.textContent;
        }

        sol.selectAll('#filter-search #unit_units_')
            .closest('.SumoSelect')
            .findAll('.opt label')
            .forEach(makeBrandedLabel);

        sol.selectAll('#filter_search .form-accordion label')
            .contains('Lojas')
            .containsURL('/seminovos/resultado')
            .closest('.form-accordion')
            .findAll('.form-group label')
            .forEach(makeBrandedLabel);
    });
}, 1000);