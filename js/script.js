let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  slides[n].classList.add('active');
  slides[n].classList.add('next');
  slides[currentSlide].classList.add('prev');
  currentSlide = n;
  setTimeout(() => {
    slides[currentSlide].classList.remove('prev');
    slides[n].classList.remove('next');
  }, 1000);
}

function nextSlide() {
  let next = currentSlide + 1;
  if (next >= slides.length) {
    next = 0;
  }
  showSlide(next);
}

setInterval(() => {
  nextSlide();
}, 5000);



function showSlides() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  slides.forEach(slide => slide.classList.remove('active'));
  slides[slideIndex].classList.add('active');
  setTimeout(showSlides, 3000);
}

showSlides();



const botoes = document.querySelectorAll("#botoes > button");
let botaoSelecionado = botoes[0];

for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function () {
    botaoSelecionado.classList.remove("selected");
    botaoSelecionado = this;
    botaoSelecionado.classList.add("selected");
  });
}



