// document.addEventListener("DOMContentLoaded", function () {
//   let templatePart = document.querySelector(".wp-block-template-part");

//   function updateBackground() {
//     if (window.scrollY > 0) {
//       templatePart.classList.add("black-background");
//     } else {
//       templatePart.classList.remove("black-background");
//     }
//   }

//   window.addEventListener("scroll", updateBackground);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   var groupElement = document.querySelector(
//     ".wp-block-cover__inner-container .wp-block-group"
//   );

//   function updateBackground() {
//     if (window.scrollY > 0) {
//       groupElement.style.backgroundColor = "black";
//     } else {
//       groupElement.style.backgroundColor = "";
//     }
//   }

//   window.addEventListener("scroll", updateBackground);
// });

document.addEventListener("DOMContentLoaded", function () {
  let templatePart = document.querySelector(".wp-block-template-part");

  function updateBackground() {
    if (window.scrollY > 0) {
      templatePart.classList.add("black-background");
    } else {
      templatePart.classList.remove("black-background");
    }
  }

  window.addEventListener("scroll", updateBackground);

  var groupElement = document.querySelector(
    ".wp-block-cover__inner-container .wp-block-group"
  );

  function updateGroupBackground() {
    if (window.scrollY > 0) {
      groupElement.style.backgroundColor =
        "var(--wp--preset--color--contrast-2)";
    } else {
      groupElement.style.backgroundColor = "";
    }
  }

  window.addEventListener("scroll", updateGroupBackground);
});
