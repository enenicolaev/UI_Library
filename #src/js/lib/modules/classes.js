

import $ from "../core";


$.prototype.addClass = function(...classes) {

   for (let i = 0; i < this.length; i++) {

      if (this[i].classList) {
         this[i].classList.add(...classes);
      } else {
         continue;
      }
   }

   return this;
}

$.prototype.removeClass = function(...classes) {

   for (let i = 0; i < this.length; i++) {

      if (this[i].classList) {
         this[i].classList.remove(...classes);
      } else {
         continue;
      }
   }

   return this;
}

$.prototype.toggleClass = function(className) {

   for (let i = 0; i < this.length; i++) {

      if (this[i].classList) {
         this[i].classList.toggle(className);
      } else {
         continue;
      }
   }

   return this;
}


$.prototype.containsClass = function(className) {

   for (let i = 0; i < this.length; i++) {

      if (this[i].classList) {

         if (this[i].classList.contains(className)) {
            return true;
         } else {
            return false;
         }

      } else {
         continue;
      }
      
   }
}