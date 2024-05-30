const checkout = document.getElementById("checkout")
const checkoutAmount = document.getElementById("checkout-amount")

const ticketAmount = document.getElementById("ticket-amount")
const survivalKitAmount = document.getElementById("survival-kit-amount")
const foodAndDrinksAmount = document.getElementById("food-and-drinks-amount")

Array.prototype.removeByValue = function (val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === val) {
            this.splice(i, 1)
            break // Exit the loop after removing the first match
        }
    }
    return this
}

let basket = []

let tickets = 0
let survivalKit = 0
let foodAndDrinks = 0
let klima = false

function computeNewPrice() {
    let amount = 0

    if (tickets <= 0) tickets = 0
    if (survivalKit <= 0) survivalKit = 0
    if (foodAndDrinks <= 0) foodAndDrinks = 0

    ticketAmount.innerText = tickets
    survivalKitAmount.innerText = survivalKit
    foodAndDrinksAmount.innerText = foodAndDrinks

    amount += tickets * 575
    amount += survivalKit * 89
    amount += foodAndDrinks * 149

    if (klima) amount += 5

    checkoutAmount.innerText = amount
}

function addTicket(event) {
    event.preventDefault()

    checkout.classList.remove("deactive")
    tickets++

    computeNewPrice()
}

function removeTicket(event) {
    event.preventDefault()

    tickets--

    if (tickets <= 0) {
        checkout.classList.add("deactive")
        tickets = 0
        survivalKit = 0
        foodAndDrinks = 0
    }

    computeNewPrice()
}

function addSurvivalKit(event) {
    event.preventDefault()

    survivalKit++

    computeNewPrice()
}

function removeSurvivalKit(event) {
    event.preventDefault()

    survivalKit--

    computeNewPrice()
}

function addFoodAndDrinks(event) {
    event.preventDefault()

    foodAndDrinks++

    computeNewPrice()
}

function removeFoodAndDrinks(event) {
    event.preventDefault()

    foodAndDrinks--

    computeNewPrice()
}

function toggleKlima(event) {
    event.preventDefault()

    klima = !klima

    computeNewPrice()
}
