/*==================================================
        TURISMO A LA INDIA
        JAVASCRIPT
==================================================*/

/*=========================
        NAVBAR SCROLL
=========================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.classList.add("shadow");

        navbar.style.padding = "10px 0";

    }else{

        navbar.classList.remove("shadow");

        navbar.style.padding = "15px 0";

    }

});


/*=========================
        BOTÓN ARRIBA
=========================*/

const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        btnTop.style.opacity="1";

        btnTop.style.visibility="visible";

    }

    else{

        btnTop.style.opacity="0";

        btnTop.style.visibility="hidden";

    }

});

btnTop.addEventListener("click",(e)=>{

    e.preventDefault();

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================
        ANIMACIÓN TARJETAS
=========================*/

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.2

});

cards.forEach(card=>{

card.classList.add("hidden");

observer.observe(card);

});


/*=========================
        EFECTO IMÁGENES
=========================*/

const images=document.querySelectorAll(".card img");

images.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});


/*=========================
        ANIMACIÓN CONTADORES
=========================*/

const counters=document.querySelectorAll("h3");

counters.forEach(counter=>{

const updateCounter=()=>{

const target=counter.innerText;

const number=parseInt(target);

if(isNaN(number)) return;

let count=0;

const interval=setInterval(()=>{

count++;

counter.innerText=count+"+";

if(count>=number){

counter.innerText=target;

clearInterval(interval);

}

},20);

}

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

updateCounter();

observer.unobserve(counter);

}

});

});

observer.observe(counter);

});


/*=========================
        SCROLL SUAVE MENÚ
=========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const destino=document.querySelector(this.getAttribute("href"));

if(destino){

destino.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*=========================
        CARGA DE LA PÁGINA
=========================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


/*=========================
        AÑO AUTOMÁTICO
=========================*/

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}