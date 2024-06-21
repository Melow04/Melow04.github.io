
function submitToPage(){
   if (validateForm(true)){window.location="https://melow04.github.io/F6/login.html";} 
}


function validateForm(){
let username = document.getElementById("username");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confpassword = document.getElementById("confpassword");
let bdayInput = document.getElementById("birthday");
let submit = document.getElementById("submit");

bdayInput.addEventListener('change',function(){
    let bday = document.getElementById("birthday").value;
    let date = new Date();
    let age = date.getFullYear() - bday;

    document.getElementById("age").value = age;
});

email.addEventListener("keypress",function(){
   if(email.value != ""){
      email.classList.remove("empty");
  }
  if(username.value != ""){
      username.classList.remove("empty");
  }
  if(firstname.value != ""){
      firstname.classList.remove("empty");
  }
  if(lastname.value != ""){
      lastname.classList.remove("empty");
  }
});

password.addEventListener('input', function(){
   if (password.value != ""){
      password.classList.remove("empty");
   }
});

submit.addEventListener('click', function(){
   if(email.value == ""){
      email.classList.add("empty");
  }
  if(username.value == ""){
      username.classList.add("empty");
  }
  if(firstname.value == ""){
      firstname.classList.add("empty");
  }
  if(lastname.value == ""){
      lastname.classList.add("empty");
  }
  if(password.value == ""){
      password.classList.add("empty");
  }
  if(confpassword.value != password.value){
      confpassword.classList.add("empty");
  }
  if(document.querySelectorAll('.empty').length == 0){
   submitToPage();
}
});

submit.addEventListener('mouseover', function(){
    submit.setAttribute("class","btn btn-primary button-mouse-over");
});

submit.addEventListener('mouseout', function(){
    submit.setAttribute("class","btn btn-primary");
});
}

validateForm();
