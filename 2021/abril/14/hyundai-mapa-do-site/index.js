(() => {
  const footer = document.querySelector('.footer')
  const navItems = document.querySelector('')

  const createMenuCollumn = ({ title, items }) => {
    return `
      <li>
        <strong>${title}</strong>
        <ul>
          ${items.map(item => '<li>' + item + '</li>'})}
        <ul>
      </li>
    `
  }

  const createMap = (navItems) => {
    const map = document.createElement('div')
    map.innerHTML = `
      <ul>
        ${navItems.map(navItem => '<li>' + createMenuCollumn(navItem) + '</li>')}
      </ul>
    `
  }
})()
