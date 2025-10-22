const slides = document.querySelectorAll('.carrusel .slide');
  const btnPrev = document.querySelector('.carrusel .anterior');
  const btnNext = document.querySelector('.carrusel .siguiente');
  let index = 0;

  function mostrarSlide(nuevoIndex) {
    slides.forEach((s, i) => s.classList.toggle('activo', i === nuevoIndex));
  }

  btnNext.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    mostrarSlide(index);
  });

  btnPrev.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    mostrarSlide(index);
  });