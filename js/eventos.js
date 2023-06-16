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
    const descricaoData = card.querySelector(".data").textContent;
    const descricaoNome = card.querySelector(".nome").textContent;
    const descricaoLocal = card.querySelector(".local").textContent;

    popularModal(descricaoData, descricaoNome, descricaoLocal);

    modal.classList.add("show");
  });
});

fechaModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

/*---=POPULAR MODAL=---*/
function popularModal(data, nome, local) {
  const modalConteudoCabecalho = document.querySelector(
    ".modal-conteudo-descricao-titulo"
  );
  const ingressosContainer = document.querySelector(
    ".modal-conteudo-ingressos"
  );

  // Limpar conteúdo anterior
  modalConteudoCabecalho.textContent = "";
  ingressosContainer.innerHTML = "<h1>INGRESSOS</h1>";

  // Definir o cabeçalho do modal
  const cabecalho = document.createElement("div");
  cabecalho.classList.add("cabecalho");

  const cabecalhoData = document.createElement("span");
  cabecalhoData.textContent = data;
  cabecalho.appendChild(cabecalhoData);

  const cabecalhoNome = document.createElement("h1");
  cabecalhoNome.textContent = nome;
  cabecalho.appendChild(cabecalhoNome);

  const cabecalhoLocal = document.createElement("span");
  cabecalhoLocal.textContent = local;
  cabecalho.appendChild(cabecalhoLocal);

  modalConteudoCabecalho.appendChild(cabecalho);

  // Gerar ingressos
  const totalDias = Math.floor(Math.random() * 5) + 2;

  for (let i = 0; i < totalDias; i++) {
    const diaContainer = document.createElement("div");
    diaContainer.classList.add(`dia${i}`);

    const diaCabecalho = document.createElement("div");
    diaCabecalho.classList.add("dia-cabecalho");
    diaCabecalho.textContent = `${i + 1}° Dia`;
    diaContainer.appendChild(diaCabecalho);

    const diaLista = document.createElement("ul");
    diaContainer.appendChild(diaLista);

    // Gerar horários
    const totalIngressos = Math.floor(Math.random() * 4) + 1;

    for (let j = 0; j < totalIngressos; j++) {
      const horario = randomTime();

      const liIngresso = document.createElement("li");
      liIngresso.textContent = horario;
      diaLista.appendChild(liIngresso);
    }

    ingressosContainer.appendChild(diaContainer);

    // Adicionar evento de expansão ao clicar no cabeçalho do dia
    diaCabecalho.addEventListener("click", () => {
      diaLista.classList.toggle("show");
    });
  }

  // Definir as constantes após a criação dos dias
  const diaCabecalhos = document.querySelectorAll(".dia-cabecalho");
  const ingressosListas = document.querySelectorAll(".modal-conteudo-ingressos ul");
  // Adicionar evento de expansão ao clicar no cabeçalho do dia
  diaCabecalhos.forEach((cabecalho, index) => {
    cabecalho.addEventListener("click", () => {
      // Remover a classe "show" de todos os cabeçalhos e listas
      diaCabecalhos.forEach((element) => {
        element.classList.remove("show");
      });
      ingressosListas.forEach((lista) => {
        lista.classList.remove("show");
        lista.querySelectorAll("li").forEach((li) => {
          li.classList.remove("show");
        });
      });
      // Adicionar a classe "show" ao cabeçalho e à lista correspondentes
      cabecalho.classList.add("show");
      ingressosListas[index].classList.add("show");
      ingressosListas[index].querySelectorAll("li").forEach((li) => {
        li.classList.add("show");
      });
    });
  });
}

function randomTime() {
  const hours = Math.floor(Math.random() * 14) + 10; // Horas entre 10 e 23
  return `${hours.toString().padStart(2, "0")}:00`;
}