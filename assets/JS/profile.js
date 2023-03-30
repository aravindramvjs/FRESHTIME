let users = JSON.parse(localStorage.getItem('userdata'));
let userlogin = JSON.parse(localStorage.getItem('userlogin'));

for (let i = 0; i <  users.length; i++) {
    if(userlogin == users[i].email  ||userlogin == users[i].name ){
    document.getElementById("name").value = users[i]["name"]; //users[1][name]
    document.getElementById("email").value = users[i]["email"];
    }
}
//  enable and disable input for edit and update operation
function enablename() {
document.getElementById("name").disabled = false;
}
function enablepassword() {
    document.getElementById("password").disabled = false;
}

function editprofile() {
    for(let i = 0 ; i < users.length; i++){
    if(document.getElementById("email").value == users[i]["email"]){
        users[i].name = document.getElementById("name").value;
        users[i].password = document.getElementById("password").value;
        }
    }

    if(document.getElementById("name").value != "" && document.getElementById("password").value != ""){
    localStorage.setItem('userdata',JSON.stringify(users))
    Notify.success("Successfully your profile updated")
    // alert("Successfully your profile updated")
    }
    else{
        // alert("Username or password field could not be empty")
        Notify.error("Username or password field could not be empty")
    }
}

// This code refer the delete function

function deleteprofile() {
    confirm("Are you sure want to delete your account?")

    for (let i = 0; i <  users.length; i++) {

    if(document.getElementById("email").value == users[i]["email"]){
        users.splice(i,1)//(2,1)
        localStorage.setItem("userdata", JSON.stringify(users));
        window.location.href = 'signup.html';
        Notify.error("Profile Deleted")
    }

    }
}