// ====== Movimiento de slides de galeria ======
const slides = document.querySelector(".slides_galeria");
const slideList = document.querySelectorAll(".slide");

slideList.length

let index = 0;

function moverSlide(direccion){

  index += direccion;

  if(index < 0){
    index = slideList.length - 1;
  }

  if(index >= slideList.length){
    index = 0;
  }

  slides.style.transform = `translateX(-${index * 100}%)`;
}