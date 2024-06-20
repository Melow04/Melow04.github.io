
function submitToPage(){
    window.location="https://melow04.github.io/F6/login.html";
}


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
        email.setAttribute("class","form-control");
    }
});

submit.addEventListener('click', function(){
    // Check if email is empty
    if(email.value == ""){
        email.setAttribute("class","form-control empty");
    }
});

submit.addEventListener('mouseover', function(){
    submit.setAttribute("class","btn btn-primary button-mouse-over");
});

submit.addEventListener('mouseout', function(){
    submit.setAttribute("class","btn btn-primary");
});