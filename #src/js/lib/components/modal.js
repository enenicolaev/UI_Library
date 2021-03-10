

import $ from "../core";

$.prototype.modal = function(created = false) {
   for (let i = 0; i < this.length; i++) {
      const target = this[i].getAttribute("data-target");

      $(this[i]).click((e) => {
         e.preventDefault();
         $(target).fadeIn(500);

         document.body.style.overflow = "hidden";

         function calcScrollIndent() {
            const div = document.createElement("div");
         
            div.style.width = "50px";
            div.style.height = "50px";
            div.style.overflowY = "scroll";
            div.style.visibility = "hidden";
         
            document.body.appendChild(div);
            let scroll = div.offsetWidth - div.clientWidth;
         
            div.remove();
      
            return scroll;
         }

         document.body.style.marginRight = `${calcScrollIndent}px`;
      })

      const closeElements = document.querySelectorAll(`${target} [data-close]`);
   
      closeElements.forEach(elem => {
         $(elem).click(() => {

            $(target).fadeOut(500);
            document.body.style.overflow = "";

            if (created) {
               document.querySelector(target).remove();
            }
         })
      });
      
      $(target).click((e) => {
         if (e.target.classList.contains("modal")) {
            
            $(target).fadeOut(500);
            document.body.style.overflow = "";
            if (created) {
               document.querySelector(target).remove();
            }
         }
      })
   };

}


$.prototype.createModal = function({text, btns} = {}) {
   for (let i = 0; i < this.length; i++) {
      
      let modal = document.createElement("div");

      modal.classList.add("modal");
      modal.setAttribute("id", this[i].getAttribute("data-target").slice(1));
      
      const buttons = [];

      for (let j = 0; j < btns.settings.length; j++) {

         let btnSettings = btns.settings[j];

         let btn = document.createElement("button");
         btn.classList.add("btn", ...btnSettings.classNames);
         btn.textContent = btnSettings.text;

         if (btnSettings.close) {
            btn.setAttribute("data-close", "true");
         };

         if (btnSettings.cb && typeof btnSettings.cb == "function") {
            btn.addEventListener("click", btnSettings.cb)
         };

         buttons.push(btn);
      }
      
      modal.innerHTML = `
       <div class="modal-dialog">
              <div class="modal-content">
                  <button class="close" data-close>
                      <span>&times;</span>
                  </button>
                  <div class="modal-header">
                      <div class="modal-title">
                        ${text.title}
                      </div>
                  </div>
                  <div class="modal-body">
                     ${text.body}
                  </div>
                  <div class="modal-footer">
                  </div>
              </div>
          </div>
      </div>`;

      modal.querySelector(".modal-footer").append(...buttons);
      document.body.appendChild(modal);
      $(this[i]).modal(true);
      $(this[i].getAttribute("data-target")).fadeIn(500);
   };
}



$("[data-toggle='modal']").modal();