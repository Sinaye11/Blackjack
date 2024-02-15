//BLACK JACK!!!!
let player = {
    name: "Per",
    chips: 145
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = " "
let messageEL = document.getElementById("message-el")       //Storing message-el in a variable 
let sumEl = document.getElementById("sum-el")               //Store sum paragraph  in variable called sumEL
let cardsEl = document.getElementById("cards-el")
let playerEL = document.getElementById("player-el") //  Grab ahold of the player-el paragraph and store it in a variable called playerEl
playerEL.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame () {
    cardsEl.textContent = "Cards: " 
    //Create for loop which renders out all the cards
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?" 
    }
    else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEL.textContent = message; //Print Message in the messageEl using messageEL.textContent
}

function newCard() {

    if  (isAlive === true && hasBlackJack ===false){ 
        let card = getRandomCard()
        sum += card
        cards.push(card) //Push card to  array
        renderGame()
    }
}

console.log(randomNumber)
