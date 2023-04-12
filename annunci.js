
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
    
// ANNUNCI

fetch('./annunci.json').then( (response)=> response.json() ).then( (data)=> {

    // cattura wrapper radio buttons
    
    let categoryWrapper = document.querySelector('#categoryWrapper');
    
    // cattura wrapper delle cards annunci
    
    let cardsWrapper = document.querySelector('#cardsWrapper');
    
    
    // funzione che crea i radio buttons
    
    function setCategoryFilters(){
    
    let categories = data.map( (annuncio)=> annuncio.category );
    
    // ho bisogno di un array con le categorie che non si ripetono, quindi.
    
    let uniqueCategories = [];
    
    categories.forEach( (category)=>{
    
        if( !uniqueCategories.includes(category)){
    
            uniqueCategories.push(category)
    
            }
    
    
        } )
    
    
        uniqueCategories.forEach( (category)=>{
    
    
            let div = document.createElement('div');
    
            div.classList.add('form-check');
    
            div.innerHTML = `
            
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="${category}">
                        <label class="form-check-label" for="${category}">
                        ${category}
                        </label>        
            
            `;
    
    
            categoryWrapper.appendChild(div);
    
    
    
            } )
    
    
    
        }
    
    setCategoryFilters();
    
    
    // funzione mostra cards
    
    function showCards(array){
    
        // svuotamento wrapper
        cardsWrapper.innerHTML = '';
    
        // metto le card in ordine crescente
        
        array.sort((a, b) => Number(a.price - b.price));
    
    
        array.forEach( (element)=>{
    
    
            let div = document.createElement('div');
    
            div.classList.add('col-6' ,'col-lg-3','my-5');
    
            div.innerHTML = `
            
                            <div class="announcement-card">

                                <p class="h3 text-center">${element.name}</p>
                                <h3>${element.category}</h3>
                                <h3>${element.price} €</h3>
                            </div>
            
            `;
    
    
            cardsWrapper.appendChild(div);
    
    
    
        } )
    
        }
    
        showCards(data);
    
    
        // funzione filtra per categoria, mostra cards (al click sul radio button)
    
        function filterbyCategory(categoria){
    
    
            if(categoria != 'All'){
    
                let filtered = data.filter( (annuncio)=> annuncio.category == categoria );
    
                showCards(filtered);
    
            } else {
    
                showCards(data);
    
            }
    
            
    
        }
    
            // cattura radio buttons
    
        let checkInputs = document.querySelectorAll('.form-check-input')
    
        checkInputs.forEach( (checkInput)=>{
    
    
            checkInput.addEventListener('click', ()=>{
    
                filterbyCategory(checkInput.id);
    
            })
    
    
        })
    
    
        // cattura range input and number
    
        let inputPrice = document.querySelector('#inputPrice');
    
        let incrementNumber = document.querySelector('#incrementNumber');
    
        // funzione settaggio valore input price massimo
    
        function setInputPrice(){
    
            let prices = data.map( (annuncio)=> Number(annuncio.price) );
    
            let maxPrice = Math.max(...prices);
    
            inputPrice.max = Math.ceil(maxPrice);
    
            inputPrice.value = Math.ceil(maxPrice);
    
            incrementNumber.innerHTML = Math.ceil(maxPrice);
    
    
        }
    
        setInputPrice();
    
        // funzione che filtra per prezzo
    
        function filterbyPrice(prezzo){
            
            let filtered = data.filter( (annuncio)=>  annuncio.price <= Number(prezzo) );        
            
            showCards(filtered);
    
        }
    
        //  evento al cambio dell'input range
    
        inputPrice.addEventListener('input', ()=>{
    
            filterbyPrice(inputPrice.value);
    
            incrementNumber.innerHTML = inputPrice.value;
    
    
        } )
    
        // cattura word input per filtro per parola
    
        let wordInput = document.querySelector('#wordInput');
    
        // funzione filtra per parola
    
        function filterbyWord(nome){
    
            let filtered = data.filter ( (annuncio)=> annuncio.name.toLowerCase().includes(nome.toLowerCase()) );
    
            showCards(filtered);
    
        }
    
        // evento digitazione parola sull'input
       
        wordInput.addEventListener('input', ()=>{
    
            filterbyWord(wordInput.value);
    
        })
    
    } )