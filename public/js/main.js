const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu")
const mclick = document.querySelectorAll(".menu a")

hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
  menu.classList.toggle("is-active");

});

// mclick.map(item => item.addEventListener(
//   "click", console.log("helo")
// ))

mclick.forEach(element => {
  element.addEventListener("click" , function(){
    menu.classList.remove("is-active")
    hamburger.classList.remove("is-active")
  })
});