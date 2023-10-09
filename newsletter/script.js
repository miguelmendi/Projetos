let input = document.querySelector(".input")

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

let button = document.querySelector('#button');



input.addEventListener("input", () => {
  
  if (input.value.length > 0) {
   
    button.disabled = false;
    button.style.cursor = "pointer"
  } else {
    
    button.disabled = true;
  }
});



