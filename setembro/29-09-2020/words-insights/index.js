
const contentJSON = require('./csvjson.json')
const allResponses = JSON.parse(JSON.stringify(contentJSON))

const importantData = allResponses.map(data => {
  const currObjData = JSON.parse(JSON.stringify(data))
  const title = currObjData['Descreva brevemente o problema'].toLowerCase()
  const link = currObjData['Digite o link da pagina referente a solicitação.']
  return title
})

const serviceDeskJSON = require('./service-desk.json')
const allResponsesServiceDesk = JSON.parse(JSON.stringify(serviceDeskJSON))

const importantDataServiceDesk = allResponsesServiceDesk.map(data => {
  const currObjData = JSON.parse(JSON.stringify(data))
  const title = currObjData['Título'].toLowerCase()
  return title
})

const splitWords = (text) => {
  const allWords = []
  
  text.forEach(phrase => {
    const separatedWords = phrase.split(' ')
    separatedWords.forEach(defaultWord => {
      const word = defaultWord.toLowerCase()
      allWords.push(word)
    })
  })

  return allWords
}

const ordenatedList = (list) => {
  const ordenated = list.sort((a, b) => a[1] - b[1]).reverse()

  return ordenated
}

const wordsCounter = (text) => {
  const allWords = splitWords(text)
  const counter = []

  allWords.forEach((word) => {
    if(!(counter.filter(item => item[0] === word)).length) {
      const current = allWords.filter(allWordsItem => allWordsItem === word)
      counter.push([word, current.length])
    }
  })

  return ordenatedList(counter)
}

const specificWordsCounter = (text, keywords) => {
  const allWords = splitWords(text)
  const counter = []
  const cleanWords = allWords.filter(word => keywords.includes(word))
  
  cleanWords.forEach((word) => {
    if(!(counter.filter(item => item[0] === word)).length) {
      const current = cleanWords.filter(cleanWordsItem => cleanWordsItem === word)
      counter.push([word, current.length])
    }
  })

  return ordenatedList(counter)
}

const wordsCounterWithoutTheseWords = (text, wordsToRemove) => {
  const allWords = splitWords(text)
  const counter = []
  const cleanWords = allWords.filter(word => !wordsToRemove.includes(word))
  
  cleanWords.forEach((word) => {
    if(!(counter.filter(item => item[0] === word)).length) {
      const current = cleanWords.filter(cleanWordsItem => cleanWordsItem === word)
      counter.push([word, current.length])
    }
  })

  return ordenatedList(counter)
}

const getPhrasesWithThisWord = (phrases, word) => {
  const phrasesWithThisWord = phrases.filter(phrase => {
    return phrase.includes(word)
  })

  return phrasesWithThisWord
}

const data = [].concat(importantData)

const keywords = ['menu', 'banner', 'whatsapp', 'wpp', 'telefone', 'formulário', 'formulários', 'formulario', 'formularios', 'whats', 'botão', 'botao', 'logo', 'logomarca', 'logotipo', 'caltabiano', 'mobile', 'carrossel', 'link', 'links', 'erro', 'bug', 'titulo', 'rodape', 'footer', 'header', 'nav', 'unidade', 'cabeçalho', 'redirecionamento', 'telefones', 'banners', 'caltabiano:', 'legal', 'marcas' ,'seminovos', 'seminovo', 'integração', 'ssl', 'ofertas', 'lead', 'peças', 'peça', 'serviços', 'layout', 'bug', 'ordenação']

const removeTheseWords = ['é', 'que', 'tá', 'na', 'de', 'do', 'da', 'no', 'o', 'página', 'alterar', 'e', 'para', 'a', 'cliente', 'dos', 'em', 'com', 'não', 'está', 'vemdas', 'sites']

const insights = {
  counterAll: wordsCounter(data),
  cleanCounter: specificWordsCounter(data, keywords),
  counterWithoutSomeWords: wordsCounterWithoutTheseWords(data, removeTheseWords)
}

const buildString = (word, counter) => {
  const finalResponse = `
Solicitações com a palavra "${word}" (${getPhrasesWithThisWord(data, word)
  .reduce((output, phrase, index) => output + 1, 0)}):

${getPhrasesWithThisWord(data, word)
  .reduce((output, phrase, index) => output + (index + 1) + ' - ' + phrase + '\n', '')}
`

  return finalResponse
}

const buildFinalResponse = (insights) => {
  const importantWords = insights.cleanCounter.slice(0, 12)

  const response = importantWords.map(word => {
    return buildString(word[0], word[1])
  })

  return `
Análise das demandas do Genius

Palavras chave mais frequentes:
${insights.cleanCounter.join('\n').toString().replace(/,/g, ' - ')}

${response.join('\n\n')}


`
}

console.log(buildFinalResponse(insights))