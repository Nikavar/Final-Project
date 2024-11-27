// on | off burger / xMark visibility
let burger = document.querySelector(".header_burger_button");
let xMark = document.querySelector(".header_x_mark");
let mobileMenu = document.querySelector(".header_nav");

burger.addEventListener("click",() => {
    mobileMenu.style.left = "0px";
    xMark.style.display = "block";
    burger.style.display = "none";
});

xMark.addEventListener("click",()=>{
    mobileMenu.style.left = "-100%";
    xMark.style.display = "none";
    burger.style.display = "block";
})


// set a color: #D5906E for active page tab 
const navLinks = document.querySelectorAll('.header_li_a');

const currentPage = window.location.href;

navLinks.forEach(link => {
    if (link.href === currentPage) {
        link.classList.add('active'); 
    } else {
        link.classList.remove('active'); 
    }
});
