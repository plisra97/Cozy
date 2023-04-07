// CATTURA NAVBAR

let mainNavbar = document.querySelector('#mainNavbar');

// CATTURA LOGO

let logo = document.querySelector('#logo');


// evento NAVBAR

window.addEventListener('scroll', ()=>{

    if(window.scrollY > 1){

        mainNavbar.classList.remove('nav-cst')  ;
        mainNavbar.classList.add('bg-transparent');

        mainNavbar.style.padding = '20px 10px';

                

    } else {

        mainNavbar.classList.remove('bg-transparent');
        mainNavbar.classList.add('nav-cst');

        mainNavbar.style.padding = '20px 10px';

              

    }


})


// chiamata 

function createInterval(finalNumber, element){

    let counter = 0;

    let interval = setInterval( ()=>{


        if(counter < finalNumber){

            counter++
            element.innerHTML = counter;
            

        } else {

            clearInterval(interval);

        }

    }, 1)

}

let firstSpan = document.querySelector('#first-span');
let secondSpan = document.querySelector('#second-span');
let thirdSpan = document.querySelector('#third-span');

// createInterval(1250, firstSpan);
// createInterval(1110, secondSpan);
// createInterval(652, thirdSpan);


// do l'inizio della chiamata

let inizio = document.querySelector('#inizio');

// variabile d'appoggio per cessare l'incremento dei numeri
let intersectionCheck = true;

// funzione intersection observe

let observed = new IntersectionObserver(

    (entries)=>{

        entries.forEach( (entry)=>{

            if(entry.isIntersecting && intersectionCheck == true){

                createInterval(1250, firstSpan);
                createInterval(1110, secondSpan);
                createInterval(652, thirdSpan);

                intersectionCheck = false;

            }

        } )

    }

)  

observed.observe(inizio);



// cattura delle icone
let icone = document.querySelectorAll('.icone');

// cattura delle card
let colonne = document.querySelectorAll('.col-custom');

// variabile d'appoggio per far ritornare tutto alle origini
let columnsConfirm = false;

colonne.forEach( (colonna, i)=>{
    

    // alla singola colonna attacco l'evento mouseenter

        colonna.addEventListener('mouseenter', ()=>{

        
            icone[i].classList.remove('icone');            
            icone[i].classList.add('iconecolore2');

        
                 
    
        })

   

    // alla singola colonna attacco l'evento mouseleave

    colonna.addEventListener('mouseleave', ()=>{


        
            // esco e rimuove il bianco e da il marrone
            icone[i].classList.remove('iconecolore2');
            icone[i].classList.add('icone');

                 

    })


})


let h1 = document.querySelector('h1');

let test = document.querySelector('#test');

test.addEventListener('mouseenter', ()=>{
    setTimeout(()=>{

        h1.classList.add('trackinginexpand');

    },1250)
   

   
})

test.addEventListener('mouseleave', ()=>{
    // setTimeout fa partire un'operazione dopo il tempo indicato dopo le graffe e dopo la virgola 
    setTimeout(()=>{

        h1.classList.remove('trackinginexpand');

    },1500)
    



})






// swiper




  let reviews = [

    {name : 'John', quote : `"il sito più bello che abbia mai visto"`, vote : 5},
    {name : 'Kandy', quote : `"spedizioni veloci"`, vote : 5},
    {name : 'Tim', quote : `"arrivato pezzo danneggiato"`, vote : 3},
    {name : 'Kayl', quote : `"Pessimo"`, vote : 1},
    {name : 'Kim', quote : `"Consigliatissimo!"`, vote : 5},
    {name : 'Lily', quote : `"spedizioni veloci"`, vote : 4},
    {name : 'Ginny', quote : `"arrivato pezzo danneggiato"`, vote : 3},
    {name : 'Maya', quote : `"Pessimo"`, vote : 2},


];

// catturo lo swiper wrapper

let swiperWrapper = document.querySelector('.swiper-wrapper');

// per ogni elemento dell'array di oggetti reviews..

reviews.forEach( (recensione)=>{

  // mi creo il tag div, con createElement

  let div = document.createElement('div');

  // assegno le classi con classList.add al div creato

  div.classList.add('swiper-slide','d-flex', 'justify-content-center', 'align-items-center');

  // riempio il div, con innerHTML
  // attenzione a modificare con la sintassi ${} con i parametri reali che ci serve visualizzare sul browser, prendendoli dall'array di oggetti.

  div.innerHTML = `
  
            <div class="card-custom d-flex flex-column align-items-center justify-content-center">
                     
                    <h3 class= "fw-bold">${recensione.name}</h3>
                    <p class="text-center p-2">
                        ${recensione.quote}
                    </p>
                    <div class="d-flex align-items-center">
                        ${createStars(recensione.vote)}
                    </div>
                    
            </div>
  
  `;

  // appendo il figlio div, al wrapper papà catturato precedentemente

  swiperWrapper.appendChild(div);


} )


// funzione crea stelline 

function createStars(fullStars){


  let final = '';

  for(let i = 1; i <=5; i++){


    // senza decrementatore mettere fullStars >= i
    // con decrementatore mettere fullStars > 0
    if(fullStars >= i){


      final += `<i class="fa-solid fa-star icone"></i>`;


      // decrementatore
      // fullStars--


    } else {


      final += `<i class="fa-regular fa-star icone"></i>`;


    }


  }

  return final;

}


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // EFFECT
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
    },

    // breakpoints
    breakpoints: {
          640: {
            slidesPerView: 2,
             
           },
    },

     // Autoplay
    autoplay: {
    delay: 1800,
    disableOnInteraction: false,
    },
    

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

})
