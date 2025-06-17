let cookiesClose = document.querySelector(".use-of-cookies__close-btn");
let cookiesAgree = document.querySelector(".use-of-cookies__agree-btn");
let cookiesWindow = document.querySelector(".use-of-cookies");

cookiesClose.onclick = function () {
  cookiesWindow.classList.add("use-of-cookies--closed");
};

cookiesAgree.onclick = function () {
  cookiesWindow.classList.add("use-of-cookies--closed");
};