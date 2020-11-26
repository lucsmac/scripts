// Selecionar um ou mais elementos a partir de uma lista de elementos, utilizando o texto e a tag do elemento
const getMenuElementByText = ({listOfElements, elementText, elementTag}) => {
    return [].filter.call(listOfElements, (element) => {
        const currentElement = element.querySelector(elementTag)
        const currentElementText = currentElement.innerText.toUpperCase()
        
        return currentElementText.includes(elementText.toUpperCase()) 
    });
}


const fixClubsCarousel = () => {

    // Substituir a imagem do card
    const changeImg = (elements, newImg) => {
        const applyThis = [].forEach.call(elements, (element) => {
            const target = element.querySelector('.clubs__club-content-body')
            target.style.backgroundImage = `url("${newImg}")`
            target.setAttribute('data-background-image', newImg)
        })
    }

    // Trocar https do link por http
    const httpsToHttp = (elements) => {
        const applyThis = [].forEach.call(elements, (element) => {
            const link = element.querySelector('.btn.btn-cta.btn-cta--transparent')
            const oldLink = link.getAttribute('href')
            link.setAttribute('href', oldLink.replace('https', 'http'))
        })
    }
    
    // Capturar o carrossel e a lista de cards
    const carousel = document.querySelector('.clubs__club-container.owl-carousel.owl-loaded')
    const cardList = carousel.querySelectorAll('div.owl-item')
    
    // Cada card possui 3 "réplicas", portanto aqui capturamos todos os 3 com a função auxiliar
    const cardsMini = getMenuElementByText({
        listOfElements: cardList,
        elementText: 'Mini Club',
        elementTag: 'div.clubs__club-title'
    })
    
    const cardsJeep = getMenuElementByText({
        listOfElements: cardList,
        elementText: 'Jeep Adventure',
        elementTag: 'div.clubs__club-title'
    })
    
    const cardsLand = getMenuElementByText({
        listOfElements: cardList,
        elementText: 'Land Club',
        elementTag: 'div.clubs__club-title'
    })
    
    const cardsBMW = getMenuElementByText({
        listOfElements: cardList,
        elementText: 'Moto Club',
        elementTag: 'div.clubs__club-title'
    })
    
    // Aplicação das modificações em cada card
    changeImg(cardsMini, 'https://assets.autoforce.com.br/mods/tmp/mini-club.png')
    changeImg(cardsJeep, 'https://assets.autoforce.com.br/mods/tmp/jeep-club.png')
    changeImg(cardsLand, 'https://assets.autoforce.com.br/mods/tmp/land-club.png')
    changeImg(cardsBMW, 'https://assets.autoforce.com.br/mods/tmp/bmw-club.png')

    httpsToHttp(cardsMini)
    httpsToHttp(cardsBMW)
    
}

fixClubsCarousel()