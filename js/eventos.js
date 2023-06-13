//-----===CARROSSEL===-----//
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

//-----===MODAL===-----//
// Adicione um evento de clique ao botão de fechar a janela modal
const closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", closeModal);

function openModal(content) {
    const modalContainer = document.querySelector(".modal-container");
    const modalContent = document.querySelector(".modal-content-inner");
    
    modalContent.innerHTML = content;
    modalContainer.style.display = "block";
}

function closeModal() {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.style.display = "none";
}

function handleItemClick(event) {
    const itemContent = event.currentTarget.innerHTML;
    openModal(itemContent);
}
