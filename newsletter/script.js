const email = document.querySelector(".input").value



function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

console.log(validateEmail('texto@texto.com'))