//-----==Variáveis==-----//
const article = document.querySelector("article");

const linkLogin = document.querySelector(".link-login");
const submitLogin = document.querySelector(".submit-login");
const avisoErroLogin = document.querySelector(".email-senha");

const avisoUsuarioNExiste = document.querySelector(".usuario-inexistente");

const linkCadastro = document.querySelector(".link-cadastro");
const submitCadastro = document.querySelector(".submit-cadastro");
const avisoEmailRegistrado = document.querySelector(".email-registrado");
const avisoPreencha = document.querySelector(".preencha");

const adm = {
    email: "adm@adm",
    senha: "adm"
}

//-----==Eventos==-----//
linkCadastro.addEventListener("click", () => {
    article.classList.add("cadastro-ativo");
});
linkLogin.addEventListener("click", () => {
    article.classList.remove("cadastro-ativo");
});

submitLogin.addEventListener("click", (event) => {
    event.preventDefault();

    const emailL = document.getElementById("emailL").value;
    const senhaL = document.getElementById("senhaL").value;

    if(emailL !== adm.email){
        avisoUsuarioNExiste.classList.add("ativo");
        setTimeout(() => {
            avisoUsuarioNExiste.classList.remove("ativo");
        }, 1600);
    }
    else if(emailL === adm.email && senhaL !== adm.senha){
        avisoErroLogin.classList.add("ativo");
        setTimeout(() => {
            avisoErroLogin.classList.remove("ativo");
        }, 1600);
    }
    else{
        avisoErroLogin.classList.remove("ativo");
        avisoUsuarioNExiste.classList.remove("ativo");
        document.querySelector("main").style.opacity = ".7";
        setTimeout(() => {
            window.location.href="../index.html";
        }, 1600);
    }
});

submitCadastro.addEventListener("click", (event) => {
    event.preventDefault();

    const emailC = document.getElementById("emailC").value;
    const senhaC = document.getElementById("senhaC").value;
    const userC = document.getElementById("userC").value;

    if(emailC === adm.email){
        avisoEmailRegistrado.classList.add("ativo");
        setTimeout(() => {
            avisoEmailRegistrado.classList.remove("ativo");
        }, 1600);
    }
    else if(userC === "" | emailC === "" | senhaC === ""){
        avisoPreencha.classList.add("ativo");
        setTimeout(() => {
            avisoPreencha.classList.remove("ativo");
        }, 1600);
    }
    else{
        avisoErroLogin.classList.remove("ativo");
        avisoUsuarioNExiste.classList.remove("ativo");
        document.querySelector("main").style.opacity = ".7";
        setTimeout(() => {
            window.location.href="../index.html";
        }, 1600);
    }
});

//-----==Functions==-----//
