// import { nanoid } from 'nanoid'
// import iziToast from 'izitoast';
// import 'iziToast/dist/css/iziToast.css';

// const id = nanoid(10)

// console.log(id);

// const list = [
//   'JavaScript',
//   'Node.js',
//   'React',
//   'View'
// ]

// const markup = list.map(item => `<li data-id=${nanoid()}>${item}</li>`).join('')

// document.querySelector('#app').innerHTML = markup



// document.querySelector('button').addEventListener('click', () => {
// iziToast.show({
//     title: 'Hellooooooo',
//     message: 'What would you like to add?',
//     position: 'topRight',
//     color: 'red'
// });
// })




const myCanva = document.querySelector('#myChart')
const myChart = new Chart(myCanva, {
  type: 'line',
  data: {
    labels: ['Vasya', 'Katya', 'Dima', 'Bogdan', 'Kolyan'],
    datasets: [{
      label: 'Grades',
      data: ['3', '5', '4', '6', '1'],
      borderColor: 'rgb(0, 225, 255)',
      tension: 0
    }]
  }
})