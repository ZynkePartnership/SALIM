//-----==Variáveis==-----//
const article = document.querySelector("article");
const linkLogin = document.querySelector(".link-login");
const linkCadastro = document.querySelector(".link-cadastro");

//-----==Eventos==-----//
linkCadastro.addEventListener("click", () => {
    article.classList.add("cadastro-ativo");
});

linkLogin.addEventListener("click", () => {
    article.classList.remove("cadastro-ativo");
});

//-----==Functions==-----//