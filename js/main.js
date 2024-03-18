let iconosFaq = document.querySelectorAll(".faq__card-icon")




for (let i = 0; i < iconosFaq.length; i++) {
    iconosFaq[i].addEventListener('click', function() {

        let card = iconosFaq[i].closest('.faq__card');
        let respuesta = card.querySelector('.faq__card-response');
  
      if (iconosFaq[i].classList.contains('fa-plus')) {

        iconosFaq[i].classList.remove('fa-plus');
        iconosFaq[i].classList.add('fa-minus');

        respuesta.classList.add('active');
      } else {
   
        iconosFaq[i].classList.remove('fa-minus');
        iconosFaq[i].classList.add('fa-plus');
        respuesta.classList.remove('active');
      }
    });
  }

  document.querySelector(".hamburger").addEventListener('click', ()=>{
    let menuDesplegable = document.querySelector(".header__nav")
    if(menuDesplegable.classList.contains('open')){

        menuDesplegable.classList.remove('open');
      } else {
        menuDesplegable.classList.add('open');
      }
  })