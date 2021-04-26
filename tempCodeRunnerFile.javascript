(() => {
  const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.5, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.1, fragil: true },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: true },
    { nome: 'Tesoura', qtde: 1, preco: 19.2, fragil: true },
  ]

  const onlyFragily = (el) => el.fragil
  const mediaTotals = carrinho.filter(onlyFragily)
  console.log(mediaTotals)
})()