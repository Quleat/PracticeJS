window.onload = function() {
    let name = prompt("Enter your name: ");
    document.getElementById("welkommen").innerText = "Your name is: " + name;
    if(confirm("Начать заново?")){
        if(confirm("Не надоело?")){
            onload();
        }
        else{
            alert("Ну и правильно!");
        }
    }
}