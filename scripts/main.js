function validateForm() {
        var un = document.loginform.usr.value;
        var pw = document.loginform.pword.value;
        var username = "admin"; 
        var password = "";
        if ((un == username) && (pw == password)) {
            return true;
        }
        else {
            alert ("Usuário ou senha incorretos");
            return false;
        }
  }

function sidenav_toggle(){
    var sidenav = document.getElementById("sidenav");
    if(sidenav.classList.contains("translate0")){
        sidenav.classList.remove("translate0");
        $("body").removeClass("sidenavopen");
    } else {
        sidenav.classList.add("translate0");
        $("body").addClass("sidenavopen");
    }
}

function avaliar(){
    window.location = "feedback.html";
}