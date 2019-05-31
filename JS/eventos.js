var loginData = [
    {
        usuario: "emilio",
        senha: "emilio123"
    },
    {
        usuario: "amanda",
        senha: "amanda123"
    },
    {
        usuario: "thais",
        senha: "thais123"
    },
    {
        usuario: "matheus",
        senha: "matheus123"
    }
];

function confirmaCadastro() {
    confirm("Deseja finalizar o cadastramento?");
}

function confirmaCadastro() {
    confirm("Deseja submeter a avaliação?");
}

function validaUsuario() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    var i = 0;
    while (i < loginData.length) {
        if (loginData[i].usuario == usuario && loginData[i].senha == senha) {
            window.location.href = "../dashboard.html";
            return;
        }
        i++;
    }
    alert("Senha e/ou usuário errado(s).fsefse" + "|" + usuario + "|" + senha);
}