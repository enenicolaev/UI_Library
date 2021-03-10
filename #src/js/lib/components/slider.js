

import $ from "../core";

$.prototype.slider = function() {
   for (let i = 0; i < this.length; i++) {

      const width = window.getComputedStyle(this[i].querySelector(".carousel-inner")).width,
            slides = this[i].querySelectorAll(".carousel-item"),
            slidesField = this[i].querySelector(".carousel-slides"),
            dots = this[i].querySelectorAll(".carousel-indicators > li");
      
      let offset = 0,
          activeSlideIndex = 0;


      slidesField.style.width = 100 * slides.length + "%";
      
      slides.forEach(slide => {
         slide.style.width = width;
      });

      function nextSlide() {
         if (offset == (+width.replace(/\D/g, "") * (slides.length - 1))) {
            offset = 0;
            activeSlideIndex = 0;
         } else {
            offset += +width.replace(/\D/g, "");
            activeSlideIndex++;
         };

         slidesField.style.transform = `translateX(-${offset}px)`;
      }

      function prevSlide() {
         if (offset == 0) {
            offset = +width.replace(/\D/g, "") * (slides.length - 1);
            activeSlideIndex = slides.length - 1;
         } else {
            offset -= +width.replace(/\D/g, "");
            activeSlideIndex--;
         };

         slidesField.style.transform = `translateX(-${offset}px)`;
      }

      $(this[i]).find("[data-slide='next']").click((e) => {
         e.preventDefault();
         nextSlide();
         setActiveDot();
      });


      $(this[i]).find("[data-slide='prev']").click((e) => {
         e.preventDefault();
         prevSlide();
         setActiveDot();
      });


      dots.forEach((dot, i) => {
         $(dot).click(() => {

            if (i == 0) {
               offset = 0;
               activeSlideIndex = 0;
            } else if (i == dots.length - 1) {
               offset = +width.replace(/\D/g, "") * (slides.length - 1);
               activeSlideIndex = slides.length - 1;
            } else {
               offset = +width.replace(/\D/g, "") * i;
               activeSlideIndex = i;
            }
   
            slidesField.style.transform = `translateX(-${offset}px)`;

            setActiveDot();
         })
      })

      function setActiveDot() {
         dots.forEach((dot, i)=> {
            if (i == activeSlideIndex) {
               dot.classList.add("active")
            } else {
               dot.classList.remove("active")
            }
         })
      }


   }
}

$(".carousel").slider();