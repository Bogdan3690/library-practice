import { nanoid } from 'nanoid'

const id = nanoid(10)

console.log(id);

const list = [
  'JavaScript',
  'Node.js',
  'React',
  'View'
]

const markup = list.map(item => `<li data-id=${nanoid()}>${item}</li>`).join('')

document.querySelector('#app').innerHTML = markup
