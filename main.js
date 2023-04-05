// CATTURA NAVBAR

let mainNavbar = document.querySelector('#mainNavbar');

// CATTURA LOGO

let logo = document.querySelector('#logo');


// evento NAVBAR

window.addEventListener('scroll', ()=>{

    if(window.scrollY > 1){

        mainNavbar.classList.remove('nav-cst')  ;
        mainNavbar.classList.add('bg-transparent');

        mainNavbar.style.height = '100px';

                

    } else {

        mainNavbar.classList.remove('bg-transparent');
        mainNavbar.classList.add('nav-cst');

        mainNavbar.style.height = '70px';

              

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

