function validateLogin(event){
    event.preventDefault();
    let usr = document.getElementById("name");
    let pswd = document.getElementById("pswd");

    if(usr.value.trim() === ""){
        alert("The name field should be filled!");
        return false;
    }
    if(pswd.value.trim() === ""){
        alert("The password field should be filled!");
        return false;
    }
    if(usr.value == "admin" && pswd.value == "admin"){
        let redir = confirm("Correct login! The section is under construction. Return to the main page?");
        if(redir)
            window.location.href="main.html";
    }
}