//----------======|||CARROSSEL|||======----------//
// Chame a função para ativar os carrosséis
activateCarousels();

function activateCarousels() {
    const carouselContainers = document.querySelectorAll(".carousel-container");
    
    carouselContainers.forEach((container) => {
        const carousel = container.querySelector(".carousel");
        const carouselVisible = container.querySelector(".carousel-visible");
        const prevBtn = container.querySelector(".prevBtn");
        const nextBtn = container.querySelector(".nxtBtn");
        
        let currentPosition = 0;
        const totalSlides = carousel.children.length;
        const slideWidth = carouselVisible.offsetWidth * 0.25; // Largura de um item (25% do carrossel visível)
        const visibleSlides = Math.floor(carouselVisible.offsetWidth / slideWidth);
        const maxPosition = Math.min(0, -(totalSlides - visibleSlides) * slideWidth);
        
        function moveCarousel(position) {
            carousel.style.transform = `translateX(${position}px)`;
        }

        function nextSlide() {
            const nextPosition = currentPosition - slideWidth;
            if (nextPosition >= maxPosition) {
                currentPosition = nextPosition;
                moveCarousel(currentPosition);
            }
            
            updateButtonState();
        }
        
        function prevSlide() {
            const prevPosition = currentPosition + slideWidth;
            if (prevPosition <= 0) {
                currentPosition = prevPosition;
                moveCarousel(currentPosition);
            }

            updateButtonState();
        }
        
        function updateButtonState() {
            nextBtn.classList.toggle("desativado", currentPosition <= maxPosition);
            prevBtn.classList.toggle("desativado", currentPosition >= 0);
        }

        nextBtn.addEventListener("click", nextSlide);
        prevBtn.addEventListener("click", prevSlide);
        
        updateButtonState();
    });
}

//----------======|||MODAL|||======----------//
/*---=ABRIR INGRESSOS=---*/
const cardsGen = document.querySelectorAll(".carousel-item");
const modal = document.querySelector(".modal");
const fechaModal = document.querySelector(".close-button");

cardsGen.forEach((card) => {
    card.addEventListener("click", () => {
        const descricaoData = document.querySelector(".item-descricao > span:first-of-type");
        const descricaoNome = document.querySelector(".item-descricao > h2");
        const descricaoLocal = document.querySelector(".item-descricao > span:nth-of-type(2)");

        popularModal(descricaoData, descricaoNome, descricaoLocal);

        modal.classList.add("show");
    });
});

fechaModal.addEventListener("click", () => {
    modal.classList.remove("show");
});

/*---=POPULAR MODAL=---*/
function popularModal(data, nome, local){
    const modalConteudoCabecalho = document.querySelector(".modal-conteudo-descricao-titulo");
    
    modalConteudoCabecalho.textContent = nome;
}