
function submitToPage(){
   if (validateForm()){window.location="https://melow04.github.io/F6/login.html";} 
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

email.addEventListener("input", function() {
   removeEmptyClassIfNotEmpty(email);
 });

 username.addEventListener("input", function() {
   removeEmptyClassIfNotEmpty(username);
 });

 firstname.addEventListener("input", function() {
   removeEmptyClassIfNotEmpty(firstname);
 });

 lastname.addEventListener("input", function() {
   removeEmptyClassIfNotEmpty(lastname);
 });

 password.addEventListener('input', function() {
   removeEmptyClassIfNotEmpty(password);
 });

 confpassword.addEventListener('input', function() {
   if (confpassword.value === password.value) {
     confpassword.classList.remove("empty");
   }
 });


 submit.addEventListener('click', function(event) {
   event.preventDefault();

   addEmptyClassIfEmpty(email);
   addEmptyClassIfEmpty(username);
   addEmptyClassIfEmpty(firstname);
   addEmptyClassIfEmpty(lastname);
   addEmptyClassIfEmpty(password);

   if (confpassword.value !== password.value) {
     confpassword.classList.add("empty");
   }

   if (document.querySelectorAll('.empty').length === 0) {
     submitToPage();
   }
 });

 submit.addEventListener('mouseover', function() {
   submit.classList.add("button-mouse-over");
 });

 submit.addEventListener('mouseout', function() {
   submit.classList.remove("button-mouse-over");
 });
}

function removeEmptyClassIfNotEmpty(element) {
 if (element.value !== "") {
   element.classList.remove("empty");
 }
}

function addEmptyClassIfEmpty(element) {
 if (element.value === "") {
   element.classList.add("empty");
 }
}

document.addEventListener("DOMContentLoaded", function() {
 validateForm();
});