(() => {
  const getSectionTitleItem = (label) => {
    return Array.prototype.find.call(
      document.querySelectorAll('.section-component__title'),
      (item) => item.innerText.toLowerCase().includes(label.toLowerCase())
    )
  }
  
  const changeTitle = (textToReplace, newText) => {
    const title = getSectionTitleItem(textToReplace)
    title.innerHTML = title.innerHTML.replace(textToReplace, newText)
  }

  changeTitle('Consórcio', 'Sextou')
})()