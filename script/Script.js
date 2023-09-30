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



/*========skill html==========*/
    let numbera = document.getElementById("eight_zero");
        let countera = 0;
        setInterval(() => {
          if(countera == 80){
            clearInterval();
          }else{
          countera += 1;
          numbera.innerHTML = countera + "%";
          }
        },24.5);

        /*========skill css==========*/
    let numberb= document.getElementById("seven_five");
        let counterb = 0;
        setInterval(() => {
          if(counterb == 75){
            clearInterval();
          }else{
          counterb += 1;
          numberb.innerHTML = counterb + "%";
          }
        },23);

        /*========skill js==========*/
    let numberc = document.getElementById("six_five");
        let counterc = 0;
        setInterval(() => {
          if(counterc == 65){
            clearInterval();
          }else{
          counterc += 1;
          numberc.innerHTML = counterc + "%";
          }
        },26.7);

        /*========skill react==========*/
    let numberd = document.getElementById("five_zero");
        let counterd = 0;
        setInterval(() => {
          if(counterd == 50){
            clearInterval();
          }else{
          counterd += 1;
          numberd.innerHTML = counterd + "%";
          }
        },34.3);

        /*========skill tw==========*/
    let numbere = document.getElementById("five_five");
        let countere = 0;
        setInterval(() => {
          if(countere == 55){
            clearInterval();
          }else{
          countere += 1;
          numbere.innerHTML = countere + "%";
          }
        },32.3);


    /*backend */
    /*========skill php==========*/
    let numberf = document.getElementById("seven_zero");
        let counterf = 0;
        setInterval(() => {
          if(counterf == 70){
            clearInterval();
          }else{
          counterf += 1;
          numberf.innerHTML = counterf + "%";
          }
        },25.5);

        /*========skill node==========*/
    let numberg= document.getElementById("six_zero");
        let counterg = 0;
        setInterval(() => {
          if(counterg == 60){
            clearInterval();
          }else{
          counterg += 1;
          numberg.innerHTML = counterg + "%";
          }
        },29);

        /*========skill express==========*/
    let numberh = document.getElementById("five_six");
        let counterh = 0;
        setInterval(() => {
          if(counterh == 55){
            clearInterval();
          }else{
          counterh += 1;
          numberh.innerHTML = counterh + "%";
          }
        },32.7);

        /*========skill mongo==========*/
    let numberi = document.getElementById("six_six");
        let counteri = 0;
        setInterval(() => {
          if(counteri == 65){
            clearInterval();
          }else{
          counteri += 1;
          numberi.innerHTML = counteri + "%";
          }
        },27.2);

        /*========skill sql==========*/
    let numberj = document.getElementById("eight_one");
        let counterj = 0;
        setInterval(() => {
          if(counterj == 80){
            clearInterval();
          }else{
          counterj += 1;
          numberj.innerHTML = counterj + "%";
          }
        },24.5);    
    
        /*========skill java==========*/
    let numberk = document.getElementById("seven_one");
        let counterk = 0;
        setInterval(() => {
          if(counterk == 70){
            clearInterval();
          }else{
          counterk += 1;
          numberk.innerHTML = counterk + "%";
          }
        },27.2);

        /*========skill sql==========*/
    let numberl = document.getElementById("six_one");
        let counterl = 0;
        setInterval(() => {
          if(counterl == 60){
            clearInterval();
          }else{
          counterl += 1;
          numberl.innerHTML = counterl + "%";
          }
        },24.5); 
        
        
    /*=========open close ============*/
const skillsContent = document.getElementsByClassName('skills_content'),
        skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}
skillsHeader.forEach((eL) =>{
    eL.addEventListener('click',toggleSkills)
})




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

/*=============SHOW SCROLL UP============*/
// const scrollUp = () =>{
//   const scrollUp = document.getElementById('scroll-up')
//  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll')
//                   else scrollUp.classList.remove('show-scroll')
// }
// window.addEventListener('scroll', scrollUp)


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





