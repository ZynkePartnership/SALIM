//-----==Variáveis==-----//
const btnOpcaoGen = document.querySelectorAll(".opcoes button");

//-----==Eventos==-----//
btnOpcaoGen.forEach((btn) =>{
    const telaReferenciada = btn.getAttribute('href');

    btn.addEventListener("click", function(){
        if (telaReferenciada == "#login") {
            document.querySelector(".login").classList.add("show");
            document.querySelectorAll(".login").classList.remove("escondido");

            document.querySelector(".cadastro").classList.remove("show");
            document.querySelector(".cadastro").classList.add("escondido");
        }
        else {
            document.querySelector(".login").classList.remove("show");
            document.querySelector(".login").classList.add("escondido");

            document.querySelector(".cadastro").classList.add("show");
            document.querySelector(".cadastro").classList.remove("escondido");
        }
    });
});

//-----==Functions==-----//