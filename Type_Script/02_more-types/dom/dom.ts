const h1 = document.querySelector('h1')
console.log(h1?.textContent)

const a = document.querySelector('a')
console.log(a?.textContent)

const anchor = document.querySelector('.anchor') as HTMLAnchorElement;
console.log(anchor?.href)