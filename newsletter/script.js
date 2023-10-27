let input = document.querySelector(".input")
let close = document.querySelector(".close")
const email =document.querySelector("#email")

close.addEventListener("click", () => {
  aside.classList.remove("active")
})

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

let button = document.querySelector('#button');
let aside = document.querySelector(".aside")
const dismiss = document.querySelector("#dismiss")

dismiss.addEventListener("click", () => {
  aside.classList.add("active") 
})

button.addEventListener("click", () => {
  aside.classList.add("active")
  inputValue = input.value
  email.innerHTML = inputValue
})



input.addEventListener("input", () => {
  
  if (input.value.length > 0) {
   
    button.disabled = false;
    button.style.cursor = "pointer"
  } else {
    
    button.disabled = true;
  }
});



