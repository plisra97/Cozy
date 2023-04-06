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
    
    h1.classList.add('trackinginexpand');

   
})

test.addEventListener('mouseleave', ()=>{
    // setTimeout fa partire un'operazione dopo il tempo indicato dopo le graffe e dopo la virgola 
    setTimeout(()=>{

        h1.classList.remove('trackinginexpand');

    },2500)



})



// swiper

let reviews = [

    {name : 'Valerio', quote : `il sito più bello che abbia mai visto`, vote : 5},
    {name : 'Nicolae', quote : `il più bello del mondo`, vote : 4},
    {name : 'Sara', quote : `spedizioni rapide, palette pessime`, vote : 3},
    {name : 'Fabio', quote : `il mio falegname lo faceva meglio`, vote : 1},


];

// catturo lo swiper wrapper

let swiperWrapper = document.querySelector('.swiper-wrapper');

// per ogni elemento dell'array di oggetti reviews..

reviews.forEach( (recensione)=>{

  // mi creo il tag div, con createElement

  let div = document.createElement('div');

  // assegno le classi con classList.add al div creato

  div.classList.add('swiper-slide' , 'd-flex' , 'align-items-center' , 'justify-content-center');

  // riempio il div, con innerHTML
  // attenzione a modificare con la sintassi ${} con i parametri reali che ci serve visualizzare sul browser, prendendoli dall'array di oggetti.

  div.innerHTML = `
  
            <div class="card-custom">
              <h3>${recensione.name}</h3>
              <p class="text-center p-2">
                ${recensione.quote}
              </p>
              <div class="d-flex">
                ${createStars(recensione.vote)}
              </div>
            </div>
  
  `;

  // appendo il figlio div, al wrapper papà catturato precedentemente

  swiperWrapper.appendChild(div);


} )


// funzione crea stelline di Hokuto

function createStars(fullStars){


  let final = '';

  for(let i = 1; i <=5; i++){


    // senza decrementatore mettere fullStars >= i
    // con decrementatore mettere fullStars > 0
    if(fullStars >= i){


      final += `<i class="fa-solid fa-star"></i>`;


      // decrementatore
      // fullStars--


    } else {


      final += `<i class="fa-regular fa-star"></i>`;


    }


  }

  return final;

}


// inizializzazione swiper

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
              // spaceBetween: 20,
             },
      },

       // Autoplay
      autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      },
  

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    });


