
function submitToPage(){
    window.location="https://melow04.github.io/F6/login.html";
}

let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let fullname = document.getElementById("fullname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confpassword = document.getElementById("confpassword");
let bdayInput = document.getElementById("birthday");
let submit = document.getElementById("submit");

function updateFullName(){
    fullname.value = firstname.value + " " + lastname.value;
}

firstname.addEventListener('input',updateFullName);
lastname.addEventListener('input', updateFullName);

bdayInput.addEventListener('change',function(){
    let bday = document.getElementById("birthday").value;
    let date = new Date();
    let age = date.getFullYear() - bday;

    document.getElementById("age").value = age;
});

email.addEventListener("keypress",function(){
    if(email.value != ""){
        email.setAttribute("class","form-control");
    }
    if(password.value != ""){
        password.setAttribute("class","form-control");
    }
    submitToPage();
});

submit.addEventListener('click', function(){
    // Check if email is empty
    if(email.value == ""){
        email.setAttribute("class","form-control empty");
        return;
    }
    if(password.value == ""){
        password.setAttribute("class","form-control empty");
    }
});

submit.addEventListener('mouseover', function(){
    submit.setAttribute("class","btn btn-primary button-mouse-over");
});

submit.addEventListener('mouseout', function(){
    submit.setAttribute("class","btn btn-primary");
});