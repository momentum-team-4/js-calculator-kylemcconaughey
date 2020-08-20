let display = document.querySelector(".display")

let clear = document.querySelector(".clear-btn")

clear.addEventListener("click", function () {
    display.innerText = ""
})

let one = document.querySelector(".one")
one.addEventListener("click", function () {
    display.innerText += "1"
})
let two = document.querySelector(".two")
two.addEventListener("click", function () {
    display.innerText += "2"
})
let three = document.querySelector(".three")
three.addEventListener("click", function () {
    display.innerText += "3"
})
let four = document.querySelector(".four")
four.addEventListener("click", function () {
    display.innerText += "4"
})
let five = document.querySelector(".five")
five.addEventListener("click", function () {
    display.innerText += "5"
})
let six = document.querySelector(".six")
six.addEventListener("click", function () {
    display.innerText += "6"
})
let seven = document.querySelector(".seven")
seven.addEventListener("click", function () {
    display.innerText += "7"
})
let eight = document.querySelector(".eight")
eight.addEventListener("click", function () {
    display.innerText += "8"
})
let nine = document.querySelector(".nine")
nine.addEventListener("click", function () {
    display.innerText += "9"
})
let zero = document.querySelector(".zero")
zero.addEventListener("click", function () {
    display.innerText += "0"
})

let plus = document.querySelector(".plus")
plus.addEventListener("click", function () {
    display.innerText += "+"
})

let times = document.querySelector(".times")
times.addEventListener("click", function () {
    display.innerText += "*"
})

let minus = document.querySelector(".minus")
minus.addEventListener("click", function () {
    display.innerText += "-"
})

let divide = document.querySelector(".divide")
divide.addEventListener("click", function () {
    display.innerText += "/"
})

let dot = document.querySelector(".dot")
dot.addEventListener("click", function () {
    display.innerText += "."
})

let rightpar = document.querySelector(".rightpar")
rightpar.addEventListener("click", function () {
    display.innerText += ")"
})

let leftpar = document.querySelector(".leftpar")
leftpar.addEventListener("click", function () {
    display.innerText += "("
})

let power = document.querySelector(".power")
power.addEventListener("click", function () {
    display.innerText += "**"
})

let modulo = document.querySelector(".modulo")
modulo.addEventListener("click", function () {
    display.innerText += "%"
})
let equals = document.querySelector(".equals")
equals.addEventListener("click", function () {
    let prop = display.innerText
    let answer = eval(prop)
    display.innerText = answer
})