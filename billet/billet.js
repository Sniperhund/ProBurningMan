const checkout = document.getElementById("checkout")
const checkoutAmount = document.getElementById("checkout-amount")
const pay = document.getElementById("pay")
const info = document.getElementById("info")
const aside = document.getElementById("kurv")
const kurvTotal = document.getElementById("kurv-total")

const ticketAmount = document.getElementById("ticket-amount")
const survivalKitAmount = document.getElementById("survival-kit-amount")
const foodAndDrinksAmount = document.getElementById("food-and-drinks-amount")

const kurvTicketAmount = document.getElementById("kurv-ticket-amount")
const kurvSurvivalKitAmount = document.getElementById(
    "kurv-survival-kit-amount"
)
const kurvFoodAndDrinksAmount = document.getElementById(
    "kurv-food-and-drinks-amount"
)

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
    kurvTicketAmount.innerText = tickets
    kurvSurvivalKitAmount.innerText = survivalKit
    kurvFoodAndDrinksAmount.innerText = foodAndDrinks

    amount += tickets * 575
    amount += survivalKit * 89
    amount += foodAndDrinks * 149

    if (klima) amount += 5

    checkoutAmount.innerText = amount
    kurvTotal.innerText = amount
    pay.innerHTML = `Betal ${amount} <svg xmlns="http://www.w3.org/2000/svg" width="15.754" height="26.383" viewBox="0 0 15.754 26.383">
    <path id="Icon_feather-dollar-sign" data-name="Icon feather-dollar-sign" d="M15.377,1.5V24.883M20.692,5.751H12.72a3.72,3.72,0,0,0,0,7.44h5.314a3.72,3.72,0,0,1,0,7.44H9" transform="translate(-7.5)" fill="none" stroke="#f7e3ae" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
  </svg>
  `
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
        info.classList.add("deactive-pay")
        aside.classList.add("deactive-pay")
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

function checkoutBtn(event) {
    event.preventDefault()

    info.classList.remove("deactive-pay")
    aside.classList.remove("deactive-pay")
}
