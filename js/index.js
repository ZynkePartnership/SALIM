/*-----==Variáveis==-----*/
const carouselCategorias = document.querySelector(".carousel-categorias");
const previousItem = document.querySelector(".prvItem");
const nextItem = document.querySelector(".nxtItem");

/*-----==Eventos==-----*/
previousItem.addEventListener("click", function(){
    carouselCategorias.style.left = "-170px";
});
nextItem.addEventListener("click", function () {
    carouselCategorias.style.left = "170px";
});

/*-----==Funções==-----*/