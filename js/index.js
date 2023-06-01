/*-----==Variáveis==-----*/
const carouselCategorias = document.querySelector(".carousel-categorias");
const previousItem = document.querySelector(".prvItem");
const nextItem = document.querySelector(".nxtItem");

/*-----==Eventos==-----*/
window.addEventListener("load", checkLastItem);
nextItem.addEventListener('click', () => {
    const currentPosition = parseInt(carouselCategorias.style.left) || 0;

    const newPosition = currentPosition - 160;

    carouselCategorias.style.left = newPosition + "px";
    
    checkLastItem();
});
previousItem.addEventListener('click', () => {
    const currentPosition = parseInt(carouselCategorias.style.left) || 0;

    const newPosition = currentPosition + 160;

    carouselCategorias.style.left = newPosition + "px";

    checkLastItem();
});

/*-----==Funções==-----*/

//CHATGPT

// Verifica se o carrossel está no último item
function checkLastItem() {
    const currentPosition = parseInt(carouselCategorias.style.left) || 0;
    const widthContainer = document.querySelector(".carousel-categorias-container").scrollWidth;
    const widthCarousel = carouselCategorias.offsetWidth;
    const lastVisibleItemPosition = widthContainer - widthCarousel;

    if(currentPosition < -lastVisibleItemPosition){
        nextItem.classList.add("disabledN");
        nextItem.disabled = true;
    }
    else{
        nextItem.classList.remove("disabledN");
        nextItem.disabled = false;
    }



    if(currentPosition >= 0){
        previousItem.classList.add("disabledP");
        previousItem.disabled = true;
    }
    else{
        previousItem.classList.remove("disabledP");
        previousItem.disabled = false;
    }
}