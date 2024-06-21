document.addEventListener("DOMContentLoaded", function() {
   const birthdayInput = document.getElementById("birthday");
   const ageInput = document.getElementById("age");
   const submitButton = document.getElementById("submit");
   const form = document.forms.regForm;
 
   birthdayInput.addEventListener("input", function() {
     const birthYear = parseInt(birthdayInput.value);
     if (!isNaN(birthYear) && birthYear > 1900 && birthYear <= new Date().getFullYear()) {
       const age = new Date().getFullYear() - birthYear;
       ageInput.value = age;
     } else {
       ageInput.value = "";
     }
   });
 
   submitButton.addEventListener("click", function(event) {
     event.preventDefault();
     if (validateForm()) {window.location="https://melow04.github.io/F6/login.html";} 
   });
 
   //cutout whitespace when trim

   function validateForm() {
     const username = form.username.value.trim();
     const firstname = form.firstname.value.trim();
     const lastname = form.lastname.value.trim();
     const email = form.email.value.trim();
     const birthday = form.birthday.value.trim();
     const password = form.password.value.trim();
     const confpassword = form.confpassword.value.trim();
 
     if (username === "") {
       alert("Enter Username");
       return false;
     }
     if (username <5){
      alert("Please Enter Atleast 5 Characters")
     }
     if (firstname === "") {
       alert("Enter First Name");
       return false;
     }
     if (lastname === "") {
       alert("Enter Last Name");
       return false;
     }
     if (email === "") {
       alert("Please Enter your Email");
       return false;
     }
     if (!validateEmail(email)) {
       alert("Invalid email format");
       return false;
     }
     if (birthday === "") {
       alert("Enter you Birth Year");
       return false;
     }
     if (password === "") {
       alert("Enter a Password");
       return false;
     }
     if (confpassword === "") {
       alert("Please Confirm your Password");
       return false;
     }
     if (password !== confpassword) {
       alert("Entered Passwords Does not Match");
       return false;
     }
     return true;
   }

 //stackoverflow valid
   function validateEmail(email) {
     const re =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(email);
   }
 });

 