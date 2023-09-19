const email = document.querySelector(".input").value

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const button = document.querySelector('#button');

const disableButton = () => {
    
    if(validateEmail != true) {
      button.disabled = true;
    } else {
      button.disabled = false
    }
};

console.log(validateEmail('texto@texto.com'))