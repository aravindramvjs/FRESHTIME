let x = document.getElementById("login");
let y = document.getElementById("register");
let z = document.getElementById("btn");

function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}

let registerform = document.getElementById("register");

registerform.addEventListener('submit', e => {

e.preventDefault();

signup();
});

function signup(){

// geting and storing html data in a variable name
let username = document.getElementById("name").value;
let useremail = document.getElementById("email").value;
let userpassword = document.getElementById("password").value;

//creating an object to collect info and store in json file
let user_details={
    "name" : username,
    "email" : useremail,
    "password": userpassword,
}

//receing already stored data or creating new array
let userarray = JSON.parse(localStorage.getItem("userdata")) ?? [];


//checking the user exists or not 
let j = 0;  

for(let i =0; i < userarray.length; i++){
    if(userarray[i]["email"] === useremail){
        j = 1;
        break;
    }
}

if(j == 1){
    // alert("Email Id Already Exist");
    Notify.error("Email Id Already Exist");

}

//if new user pushing into local storage
else{
userarray.push(user_details);
localStorage.setItem("userdata",JSON.stringify (userarray));
// alert("Successfully Signed Up");
Notify.success("Successfully Signed Up");
}

}

let loginform = document.getElementById("login");

loginform.addEventListener('submit', e => {

e.preventDefault();

logincret();
});

function logincret() {
    
    let users = JSON.parse(localStorage.getItem('userdata'));

    let name = document.getElementById("emaillogin").value;
    let email = document.getElementById("emaillogin").value;
    let password = document.getElementById("passwordlogin").value;

    let j = 0; 
    for (let i=0; i < users.length; i++){
        if (users[i]["email"] == email || users[i]["name"] == name && users[i]["password"] == password) {
            j = 1;
            localStorage.setItem("userlogin",JSON.stringify(email))
            break;
        }
    }

    if(j==1){
        // alert("Logged In")
        Notify.success("Logged In");
        window.location.href = "/Pages/profile.html",true;
    }
    else{
        // alert("Invalid Credentials")
        Notify.error("Invalid Credentials");
        }
}