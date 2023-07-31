let parrafoClase = document.getElementsByClassName('parrafo')
let parrafoId = document.getElementById('newParrafo')
let inputAlgo = document.getElementById('algo')
const h1 = document.querySelector('h1')
const lastItem = document.querySelector('ul li:nth-last-child(1)')
const nuevoParrafo = document.querySelector('p.nuevoParrafo')
const nuevoParrafo2 = document.getElementsByClassName('nuevoParrafo')
const form = document.getElementById('form')

let valorA = document.getElementById('valorA')
let valorB = document.getElementById('valorB')

h1.innerHTML = 'Manipulación del DOM'
console.log(h1.getAttributeNames())
h1.setAttribute('color', 'verde')
console.log(h1.classList.value.split(' '))

function getValue() {
  console.log(inputAlgo.value)
}

parrafoId.addEventListener('mouseover', () => {
  parrafoId.setAttribute('style', 'color: red; cursor: pointer')
})

parrafoId.addEventListener('mouseleave', () => {
  parrafoId.setAttribute('style', '')
})

function calcularSuma() {
  event.preventDefault()
  console.log(Number(valorA.value) + Number(valorB.value))
}

form.addEventListener('submit', calcularSuma)
