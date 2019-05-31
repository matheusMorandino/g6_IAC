var loginData = [
        {
            usuario: "Emilio",
            senha: "Haro"
        },
        {
            usuario: "Amanda",
            senha: "Venturin"
        },
        {
            usuario: "Thais",
            senha: "Lasso"
        },
        {
            usuario: "Matheus",
            senha: "Morandino"
        },
        {
            usuario: "Naiara",
            senha: "Alflen"
        }
    ];

function validateUser() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    var i = 0;
    while (i < loginData.length) {
        if (loginData[i].usuario == usuario && loginData[i].senha == senha) {
            window.location = "dashboard.html";
            return true;
        }
        i++;
    }
    alert("Usuário ou senha incorretos");
    return false;
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