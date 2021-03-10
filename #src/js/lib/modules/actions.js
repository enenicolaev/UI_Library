
import $ from "../core";


$.prototype.html = function(content) {

   for (let i = 0; i < this.length; i++) {

      if (content) {
         this[i].innerHTML = content;
      } else {
         return this[i].innerHTML;
      }
   }
   return this;
}


$.prototype.eq = function(index) {

   const swap = this[index];
   const objLength = Object.keys(this).length;

   for (let i = 0; i < objLength; i++) {
      delete this[i];
   }

   this[0] = swap;
   this.length = 1;
   return this;
}



// возвращаент индекс элемента среди своих соседей с таким же селектором
$.prototype.index = function() {

   const parent = this[0].parentNode,
         childs = [...parent.children];

   const findMyElem = (elem) => {
      return elem == this[0];
   };
   
   return childs.findIndex(findMyElem)
}


$.prototype.find = function(selector) {

   let numberOfItems = 0;
   let counter = 0;

   const copyObj = Object.assign({} ,this);

   for (let i = 0; i < this.length; i++) {
      const arr = copyObj[i].querySelectorAll(selector);

      if (arr.length == 0) {
         continue;
      }

      for (let j = 0; j < arr.length; j++) {
         this[counter] = arr[j];
         counter++;
      }

      numberOfItems += arr.length;
   }

   this.length = numberOfItems;

   const objLength = Object.keys(this).length;

   for (; numberOfItems < objLength; numberOfItems++) {
      delete this[numberOfItems + 1]
   }

   return this;
}



$.prototype.closest = function(selector) {

   let counter = 0;

   for (let i = 0; i < this.length; i++) {
      this[i] = this[i].closest(selector);
      counter++;
   };

   const objLength = Object.keys(this).length;

   for (; counter < objLength; counter++) {
      delete this[counter];
   }

   let finalLength = objLength;

   for (let i = 0; i < objLength; i++) {
      if (this[i] == null) {
         delete this[i];
         finalLength--;
      }
   }

   this.length = finalLength;
   
   if (this.length == 0) {
      return false
   }

   return this;
}



$.prototype.siblings = function() {

   let numberOfItems = 0;
   let counter = 0;

   const copyObj = Object.assign({} ,this);

   for (let i = 0; i < copyObj.length; i++) {
      const childs = copyObj[i].parentNode.children;

      for (let j = 0; j < childs.length; j++) {

         if (copyObj[i] === childs[j]) {
            continue;
         }

         this[counter] = childs[j];
         counter++;
      }

      numberOfItems += childs.length - 1;
   }

   this.length = numberOfItems;

   const objLength = Object.keys(this).length;

   for (; numberOfItems < objLength; numberOfItems++) {
      delete this[numberOfItems + 1]
   }

   return this;
}