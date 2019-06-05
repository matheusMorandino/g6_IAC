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


function show_reports(source) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 1; i < checkboxes.length; i++) {
        if (checkboxes[i] != source && checkboxes[i])
            checkboxes[i].checked = source.checked;
    }
}

function select_report(row){
    var checkbox = row.getElementsByTagName('input')[0];
    checkbox.checked = !checkbox.checked;
}


function confirmaCadastro(){
    var print;
    print = document.getElementById("relatorio");
    if(print.checked) window.print();
    else notify_success();
}

function update_print_helper(textarea){
    var text = textarea.innerText;
    var t = document.createTextNode(text);
    document.getElementById("test_helper").appendChild(t);
}
/*
function search_by_name(){
    var input, textValue, names;
    input = document.getElementById("search_name").value;
    names = document.getElementsByClassName("employee_name");

    add_tag(input);
    input = input.toLowerCase();
    for(i = 0; i < names.length()){
        textValue = names[i].innerText || names[i].textContent;
        if(textValue.toLowerCase() != input && !is_tag(textValue)) names[i].parentElement.style.display = "none";
    }
}

function add_tag(text){
    const content, childElement, parentElement;
    parentElement = document.getElementsByClassName('wrapper_tags')[0];
    childElement = document.createElement("div").addClass("search_tag");
    content = document.createTextNode(text);
    childElement.appendChild(content);
    parentElement.appendChild(childElement);
}

function is_tag(text){
    var tags, content;
    tags = document.getElementsByClassName("search_tag");
    for(i = 0; i < tags.length; i++){
        content = tags[i].innerText || tags[i].textContent;
        if(content == text) return true;
    }
    return false;
}
*/

/*/relatorio checkbox selecionar todas
var trs = document.getElementsByTagName("tr");
var select_all = document.getElementById("show_all_reports");
select_all.addEventListener("click", function (){
    for(i = 0; i < trs.length; i++){
        trs[i].
    }
}*/
