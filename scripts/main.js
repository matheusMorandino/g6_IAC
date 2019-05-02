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