import "./webpdetection";
import "./lib/lib";
import $ from "./lib/lib";



$("button").on("click", () => {
   $(".findme").fadeToggle(300);
});


// dynamic modal
$("#trigger").click(() => {
   $("#trigger").createModal({
      text: {
         title: "MODSL TITLE",
         body: "BODY BODY BOODY",
      },
      btns: {
         settings: [
            {
               text: "close",
               classNames: ["btn-danger", "mr-10"],
               close: true,
            },
            {
               text: "Save Changes",
               classNames: ["btn-success"],
               close: false,
               cb: () => {
                  alert("Заебумба")
               },
            },
            {
               text: "another btn",
               classNames: ["btn-warning", "ml-10"],
               close: false,
               cb: () => {
                  alert("опасный заебумба")
               },
            },
         ],
      }
   });
});




