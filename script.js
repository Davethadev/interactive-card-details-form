const form = document.querySelector('form')
const completeState = document.querySelector('.complete-state')
// const completeStateContent = document.querySelector('.complete-state-content')
// console.log(completeState)
const confirmBtn = document.querySelector('.confirm-btn')

let cardHolderName = document.getElementById('card-holder-name')
let cardNumber = document.getElementById('card-number')
let expiryDateMonth = document.getElementById('month')
let expiryDateYear = document.getElementById('year')
let cvc = document.getElementById('cvc')
let card_Holder_Name = document.querySelector('.card--holder--name')
let expiry_Date_Month = document.querySelector('.month_')
let expiry_Date_Year = document.querySelector('.year_')
let card_Number = document.querySelector('.card--number')
let cvc_ = document.querySelector('.cvc-number')

// document.addEventListener('keyup', function(e) {
//     card_Holder_Name.innerText += e.key
//     expiry_Date_Month.innerText += e.key
//     expiry_Date_Year.innerText += e.key
//     card_Number.innerHTML += e.key
//     cvc_.innerText += e.key
// })

cardHolderName.addEventListener('keyup', function(e) {
    let char = e.key
    card_Holder_Name.innerText = ''
    // if(char == 'backspace') {
    //     card_Holder_Name.append('')
    // }
    card_Holder_Name.append(char)
})

cardNumber.addEventListener('keyup', function(e) {
    let char = e.key
    card_Number.innerText = ''
    card_Number.append(char)
})

expiryDateMonth.addEventListener('keyup', function(e) {
    let char = e.key
    expiry_Date_Month.innerText = ''
    expiry_Date_Month.append(char)
})

expiryDateYear.addEventListener('keyup', function(e) {
    let char = e.key
    expiry_Date_Year.innerText = ''
    expiry_Date_Year.append(char)
})

cvc.addEventListener('keyup', function(e) {
    let char = e.key
    cvc_.innerText = ''
    cvc_ .append(char)
})

confirmBtn.addEventListener('click', function() {
    form.innerHTML = `
        <div class="complete-state">
            <div class="complete-state-content">
                <div class="icon-complete">
                    <img src="./images/icon-complete.svg" alt="">
                </div>
                <h3>Thank you!</h3>
                <p>We've added your card details</p>
                <button>Continue</button>
            </div>
        </div>
    `
    // completeStateContent.style.width = '100%'
    // card_Holder_Name.innerText = `${cardHolderName.value}`
    // expiry_Date_Month.innerText = `${expiryDateMonth.value}`
    // expiry_Date_Year.innerText = `${expiryDateYear.value}`
    // card_Number.innerHTML = `${cardNumber.value}`
    // cvc_.innerText = `${cvc.value}`
    
    
    // completeState.style.display = 'block'
})
