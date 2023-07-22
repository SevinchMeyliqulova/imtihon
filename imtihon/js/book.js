
let { form } = document.forms

let btnMinus = document.querySelector('#minusBtn')
let btnPlus = document.querySelector('#plusBtn')
let counterSpan = document.querySelector('.counter span')
let count = 4;


btnMinus.addEventListener('click', () => {
   let count = parseInt(counterSpan.innerText)
   if (count - 1 <= 0) {
      return "AA"
   }
   counterSpan.innerText = --count + " people"
   localStorage.setItem("count", count + "")
})

btnPlus.addEventListener('click', () => {
   let count = parseInt(counterSpan.innerText)
   if (count + 1 > 15) {
      return "AA"
   }
   counterSpan.innerText = ++count + " people"
   localStorage.setItem("count", count + "")
})


const nameInput = document.querySelector('#name'),
emailInput = document.querySelector('#email')
const emailKeys = ["@" , '.' , 'com' , "ru" , 'gmail' , 'email']

nameInput.addEventListener('input', validateNameInp)
emailInput.addEventListener('input' , validatEmailInp)
let nameInputStatus = false,
   emailInputStatus = false

   form.addEventListener('submit', (event) => {
      event.preventDefault()
      validateNameInp()
      validatEmailInp()
      if (!nameInputStatus || !emailInputStatus) {
         return "AAA"
      } 
      const inputs = form.querySelectorAll('input')
      console.log(count);
      inputs.forEach(e => {
         const { name, value } = e;
         userData[name] = value;
      });
   
      console.log(userData);
   })   


   function validateNameInp() {
      if (nameInput.value.length < 3) {
         showError(nameInput.parentElement, nameInput.nextElementSibling , "This field is required")
         nameInputStatus = false
      } else if (!isNaN(+nameInput.value)) {
         showError(nameInput.parentElement, nameInput.nextElementSibling, "Wrong Format")
         nameInputStatus = false
      } 
      else {
         hideError(nameInput.parentElement, nameInput.nextElementSibling)
         nameInputStatus = true
      }
   }
   
   function validatEmailInp() {
      let emailKeyCount = 0
      emailKeys.forEach((e) => {
         emailKeyCount += emailInput.value.includes(e) ? 1 : 0
         if (emailKeyCount == 4) {
            return
         }
      })
   
      if (emailKeyCount !== 4) {
         showError(emailInput.parentElement, emailInput.nextElementSibling , "The email is wrong")
         emailInputStatus = false
      }else{
         hideError(emailInput.parentElement, emailInput.nextSibling)
         emailInputStatus = true
      }
   }
   
   function showError(parentElement, msgElement, message) {
      msgElement.textContent = message
      parentElement.classList.add('error')
   }
   
   function hideError(parentElement, msgElement) {
      msgElement.textContent = ""
      parentElement.classList.remove('error')
   }





