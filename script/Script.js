/*===============MENU SHOW Y HIDDEN=================*/
const navMenu=document.getElementById('nav-menu'),
    navToggle=document.getElementById('nav-toggle'),
    navClose=document.getElementById('nav-close')

/*========show menu==========*/

if(navToggle){
    navToggle.addEventListener('click', () =>{
      
        navMenu.classList.add('show-menu')
    })
}

/*========show menu==========*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*========Remmove menu mobile==========*/
const navLink=document.querySelectorAll('.nav_link')

function linkAction(){
    const navmenu=document.getElementById('nav-menu')
    //when we click on each nav link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))


/*=============FOR SKILLS============*/
const progressBarElements = document.querySelectorAll('.container .progress-bar');
      const skills = document.querySelector('.skills');
      skills.addEventListener('mouseenter', () => {
        progressBarElements.forEach((progressBar) => {
          progressBar.style.display = 'block';
        });
      });

      skills.addEventListener('mouseleave', () =>  {
        progressBarElements.forEach((progressBar) => {
          progressBar.style.display = 'none';
        });
      });




/*=============SCROLL SECTION ACTIVE LINK============*/
const sections=document.querySelectorAll('section[id')

function scrollActive(){
  const scrollY=window.pageYoffset

  sections.forEach(current =>{
    const sectionHeight=current.offsetHeight 
    const sectionTop=current.offsetTop-50;
    sectionId=current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll',scrollActive)


/*=============CHANGE BACKGROND HEADER============*/
function scrollHeader(){
  const nav=document.getElementById('header')
  //when the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)


/*=============Dark lighter theme============*/
// if(dark){
//   dark.addEventListener('click', () =>{
//     alert("button was clicked");
//   })
// }
const body = document.querySelector("body");
const dark = document.getElementById('theme-button');
  dark.addEventListener('click', () =>{
    body.classList.toggle("dark-theme");
    dark.classList.toggle("uil-sun");
    body.style.transition = '1s';
  });

/*=============Scroll up============*/
const footer = document.getElementById("footer");
const scroll = document.getElementById("scroll-up");
footer.addEventListener('mouseenter',() => {
    scroll.classList.remove("scrolling");
})
footer.addEventListener('mouseleave',() => {
  scroll.classList.add("scrolling");
})
scroll.addEventListener('click',() => {
  scroll.classList.add("scrolling");
})





