const iconMenuEl = document.querySelector(".menu-icon");
const menuLinkEl = document.querySelectorAll(".header__link");

iconMenuEl.addEventListener("click", () => {
   document.body.classList.toggle("menu-open");
});

menuLinkEl.forEach((element) => {
   element.addEventListener("click", () => {
      if (document.body.classList.contains("menu-open")) {
         document.body.classList.remove("menu-open");
      }
   });
});