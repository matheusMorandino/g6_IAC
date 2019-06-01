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
        },
        {
            usuario: "Avaliador",
            senha: "Avaliador"
        }
    ];


//login apertando a tecla enter
document.addEventListener('keydown', event => {
    const code = (event.keyCode ? event.keyCode : event.which);
    if(code == 13 && document.getElementById("usuario").value != "" && document.getElementById("senha").value != "") validateUser();
});

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


function confirmaCadastro() {
    confirm("Deseja finalizar o cadastramento?");
}

function confirmaCadastro() {
    confirm("Deseja submeter a avaliação?");
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

//avaliar
function avaliar(text){
    window.location = "feedback.html";
}

//collapsible
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

//feedback checkbox mostrar todas
var checkb = document.getElementById("expand_all");
checkb.addEventListener("click", function (){
    var disp = "none";
    var content;
    if(checkb.checked){
        disp = "block";
    }
    for(i = 0; i < coll.length; i++){
        coll[i].classList.toggle("active");
        content = coll[i].nextElementSibling;
        content.style.display = disp;
    }
});


/*/relatorio checkbox selecionar todas
var trs = document.getElementsByTagName("tr");
var select_all = document.getElementById("show_all_reports");
select_all.addEventListener("click", function (){
    for(i = 0; i < trs.length; i++){
        trs[i].
    }
}*/
