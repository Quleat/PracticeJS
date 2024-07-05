function validateReg(event){
    event.preventDefault();
    let usr = document.getElementById("name");
    let pswd = document.getElementById("pswd");
    let rptpswd = document.getElementById("confpswd");
    let email = document.getElementById("email");

    if(usr.value.trim() === ""){
        alert("The name field should be filled!");
        return false;
    }
    if(pswd.value.trim() === ""){
        alert("The password field should be filled!");
        return false;
    }
    if (pswd.value.length <= 4) {
        alert("The password should be longer than 4 characters!");
        return false;
    }
    if(pswd.value !== rptpswd.value){
        alert("The passwords are different!");
        return false;
    }
    if(!email.value.includes("@")){
        alert("The email should be valid!");
        return false;
    }
    if(usr.value === "admin"){
        alert("The name 'admin' is already taken, try 'admin1'");
        return false;
    }
    alert("The registration is successful! Returningn to the main page...");
    setTimeout(function(){
        window.location.href="main.html";
    }, 2000);
}