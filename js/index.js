const carouselVisible = document.querySelector(".carousel-visible");
const carousel = carouselVisible.querySelector(".carousel");
const prevButton = document.querySelector(".prvItem");
const nextButton = document.querySelector(".nxtItem");
const itemWidth = carousel.querySelector(".carousel-item").offsetWidth;
const maxIndex = Math.floor(carousel.scrollWidth / itemWidth) - 1;

let currentIndex = 0;

function moveToNextItem() {
  if (currentIndex < maxIndex) {
    currentIndex++;
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
  checkLastItem();
}

function moveToPrevItem() {
  if (currentIndex > 0) {
    currentIndex--;
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
  checkLastItem();
}

function checkLastItem() {
    const containerWidth = carouselVisible.offsetWidth;
    const visibleItems = Math.floor(containerWidth / itemWidth);
    const maxVisibleIndex = Math.floor(carousel.scrollWidth / itemWidth) - visibleItems;
  
    if (currentIndex >= maxVisibleIndex) {
      nextButton.classList.add("disabled");
      nextButton.disabled = true;
    } else {
      nextButton.classList.remove("disabled");
      nextButton.disabled = false;
    }
  
    if (currentIndex === 0) {
      prevButton.classList.add("disabled");
      prevButton.disabled = true;
    } else {
      prevButton.classList.remove("disabled");
      prevButton.disabled = false;
    }
  }
  

nextButton.addEventListener("click", moveToNextItem);
prevButton.addEventListener("click", moveToPrevItem);

// Verificar estado inicial do carrossel
checkLastItem();
