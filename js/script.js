const header=document.querySelector('.header')
const headerView=header.offsetHeight;
window.addEventListener('scroll',()=>{
    if(window.scrollY >=headerView){
        header.classList.add('shadow-on')
    }else{
        header.classList.remove('shadow-on')
    }
})
///MENU TOOGLE
let logo=document.querySelector('.logo')
let menuToogle=document.querySelector(`.menu_on`);
let menu=document.querySelector(`.me-header`);
let qtd=0;
menuToogle.addEventListener("click",()=>{
    if(qtd==0){
        menuToogle.src="icon/icons8_delete_24px.png";
        menu.classList.add("on")
        header.classList.add('on')
        logo.classList.add('on')
        qtd++
    }else if(qtd==1){
        menuToogle.src="icon/icons8_menu_24px_1.png";
        logo.classList.remove('on')
        menu.classList.remove("on")
        header.classList.remove('on')
        qtd=0
    }
})
const links=document.querySelectorAll('a')

for(const link of links){
    link.addEventListener('click',()=>{
        menu.classList.remove('on')
        logo.classList.remove('on')
        header.classList.remove('on')
        menuToogle.src="icon/icons8_menu_24px_1.png";
    })
}
//SLIDER
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


window.sr=ScrollReveal({ reset: true });
sr.reveal('.start-information',{ delay: 1000 });
sr.reveal('.about',{ delay: 1000 });
sr.reveal('.services',{ delay: 1000 });
sr.reveal('.team-information',{ delay: 1000 });
sr.reveal('.cards',{ delay: 1000 });
sr.reveal('.contact', {delay:1000})
sr.reveal('.footer', {delay:1000})
