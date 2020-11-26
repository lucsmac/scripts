document.addEventListener("DOMContentLoaded", function(event) {
  (() => {

    const isThisPage = ({ urlPiece }) => {
        const fullURL = window.location.href
        const result = fullURL.includes(urlPiece)
    
        return result
    }

    const getMenuElementByText = ({listOfElements, elementText, elementTag}) => {
        return [].find.call(listOfElements, (element) => {
            const currentElement = element.querySelector(elementTag) || element
            const currentElementText = currentElement.innerText.toUpperCase()
            
            return currentElementText.includes(elementText.toUpperCase())
        });
    }

    if(isThisPage({ urlPiece: '/servicos' })) {

      const form = document.querySelector('#schedule-service-conversion-form')
    
      const removeUnits = () => {
    
        const optionsList = form.querySelector('.conversion-form__control-label').parentNode
        const selectItems = optionsList.querySelectorAll('.choices__item.choices__item--choice')
        
        const units = [getMenuElementByText({
            listOfElements: selectItems,
            elementText: 'Caraigá Pós Vendas - VW',
            elementTag: 'div'
          }),
        ]
      
        units.forEach(unit => {
          if(unit && unit.parentNode)
            unit.parentNode.removeChild(unit)
        })
    
        optionsList.addEventListener('click', () => {
          removeUnits()
        })
      }

      removeUnits()
    
      const formGroups = form.querySelectorAll('.form-group')
      Array.prototype.forEach.call(formGroups, (group) => {
        group.addEventListener('click', () => {
          removeUnits()
        })
      })
    }

  })()
})