const open = document.querySelector("#open");
const close = document.querySelector("#close");
const wrapper = document.querySelector(".wrapper");
const modal = document.querySelector(".modal");

open.addEventListener("click", () => {
  wrapper.classList.add("active");
});

close.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
