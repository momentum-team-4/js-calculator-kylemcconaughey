const clear = document.querySelector(".clear-btn")
const display = document.querySelector(".display")
const uno = document.querySelector('#uno')
const dos = document.querySelector('#dos')
const tres = document.querySelector('#tres')
const quatro = document.querySelector('#quatro')
const cinco = document.querySelector('#cinco')
const seis = document.querySelector('#seis')
const siete = document.querySelector('#siete')
const ocho = document.querySelector('#ocho')
const nueve = document.querySelector('#nueve')
const cero = document.querySelector('#cero')
const mas = document.querySelector('#mas')
const menos = document.querySelector('#menos')
const equals = document.querySelector('#es')
const izquierda = document.querySelector('#izquierda')
const derecha = document.querySelector('#derecha')
const punto = document.querySelector('#punto')
const poder = document.querySelector('#poder')
const multi = document.querySelector('#multi')
const division = document.querySelector('#division')
const modulo = document.querySelector('#modulo')

const buttons = document.querySelectorAll('.btn')

function pushable(which) {
    for (let each of which) {
        each.addEventListener('click', function () {
            display.textContent += each.textContent
        })
    }
}


pushable(buttons)

clear.addEventListener("click", function () {
    display.textContent = ""
})

let power = document.querySelector(".power")
power.addEventListener("click", function () {
    display.textContent += "**"
})

equals.addEventListener('click', function () {
    let prop = display.innerText
    let answer = eval(prop)
    display.textContent = answer
})