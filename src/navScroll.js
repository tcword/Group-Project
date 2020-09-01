const { Link } = require("react-router-dom");

window.onscroll = function () {
  const docScrollTop = document.documentElement.scrollTop;

  if (window.innerWidth > 991) {
    if (docScrollTop > 100) {
      document.querySelector("header").classList.add("fixed");
    } else {
      document.querySelector("header").classList.remove("fixed");
    }
  }
};

// Navbar Scrolling

// const navbar = document.querySelector(".navbar");
//     Link=navbar.querySelectorAll("Link");

//     Link.forEach(function(element){
//         element.addEventListener("click", function(){
//             for(let i=0; i<Link.length; i++){
//                 Link[i].classList.remove("active");
//             }
//             this.classList.add("active")
//             document.querySelector(".navbar").classList.toggle("show");
//         })
//     });

// Hamburger Icon

// const hamBurger=document.querySelector(".ham-burger");

// hamBurger.addEventListener("click", function(){
//     document.querySelector(".navbar").classList.toggle("show");
// })

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}