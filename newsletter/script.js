const email = document.querySelector(".input").value



function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const button = document.querySelector('#button');

const disableButton = () => {
    button.disabled = true;
};

button.addEventListener('click', disableButton);

console.log(validateEmail('texto@texto.com'))