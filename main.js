
/*===================Toggle icon navbar==================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*===================scroll section active link ======================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset =sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top>= offset && top<offset+height){
            navLinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        };
    
    });
    /*=====================sticky Nav bar ==========================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    /*=====================remove toggle icon and navbar ========================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*=====================scroll reveal ========================*/
ScrollReveal({ 
    distance:'80px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, heading', {origin:'top'});
ScrollReveal().reveal('.home-img,.experience-container,.project-box,.contact form',{origin:'button'});
ScrollReveal().reveal('.home-contact h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-contact p',{origin:'right'})

/*=====================typed JS ========================*/
const typed = new Typed('.multiple-text',{
    strings:['a Salesforce Developer','a salesforce Admin','a Software Engineer','an Android Developer','a Web Designer','an Artist'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
});

/*=====================download PDF ========================*/
let button = document.querySelector("body a");
button.addEventListener("click",()=>{
    const span = document.querySelector("a span");
    button.computedStyleMap.paddingRight = '10px';
    span.computedStyleMap.visibility='visible';
    setTimeout(()=>{
        span.visibility="hidden;";
        button.computedStyleMap.paddingRight ="0px";
    })
});
/*========================Form to excel data ==============================*/

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzt37g4MPtG3KJxwFNOHA2FIGAp0HLb2meLZKXzFP6-z-ryHkmB0NFBl9GG_ny5_HF4/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response)),
      setTimeout(function(){
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  });

  /*===========================Clear fields================================*/
  function clearField(){
    document.getElementById('.input-').value ='';
  }