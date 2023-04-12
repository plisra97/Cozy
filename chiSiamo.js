
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

//  circle sezione chi siamo

// cattura opener
let opener = document.querySelector('.opener');

// cattura div moved
let movedDivs = document.querySelectorAll('.moved');

// variabile d'appoggio per far tornare indietro i moved

let conferma = false;

// array di oggetti, docenti

let teachers = [


    { name : 'Carlo', languages : ['Architetto', 'Artigiano'], url : './media/uomo1.jpg'},
    { name : 'Francesca', languages : ['Co-fondatore', 'Artigiano'], url : './media/donna2.jpg'},
    { name : 'Paolo', languages : ['Co-fondatore', 'SMM'], url : '././media/uomo2.jpg'},
    { name : 'Diana', languages : ['Lavorazioni in legno', 'Creazione di progetti personalizzati'], url : './media/donna1.jpg'},


]

// cattura cardWrapper
let cardWrapper = document.querySelector('#cardWrapper');


movedDivs.forEach((moved, i)=>{


    moved.style.backgroundImage = `url('${teachers[i].url}')`;

    // evento click per far apparire gli amici docenti

    moved.addEventListener('click', ()=>{


        // console.log(teachers[i]);

        cardWrapper.innerHTML = '';

        let div = document.createElement('div');
        
        div.classList.add('teacher-card');

        div.innerHTML = `
                    <p class="h3">${teachers[i].name}</p>
                    <p>${teachers[i].languages}</p>
        `;

        cardWrapper.appendChild(div);


        // catturo la singola card per cambiare immagine

        let card = document.querySelector('.teacher-card');
        
        card.style.backgroundImage=`url('${teachers[i].url}')`;


    })

})


// evento su opener

opener.addEventListener('click', ()=>{


    if(conferma == false){


        conferma = true;

        movedDivs.forEach( (moved, i)=>{

            let angle = (360 * i) / movedDivs.length;
    
            moved.style.transform = `rotate(${angle}deg) translate(200px) rotate(-${angle}deg)`;

            opener.innerHTML = `<i class="fa-solid fa-minus icone fa-5x"></i>`;
    
    
        })

    } else {

        conferma = false;

        cardWrapper.innerHTML = '';

        movedDivs.forEach( (moved)=>{

            // let angle = (360 * i) / movedDivs.length;
    
            moved.style.transform = `rotate(0deg) translate(0px)`;

            opener.innerHTML = `<i class="fa-solid fa-plus icone fa-5x"></i>`;
    
    
        })


    }

  


})