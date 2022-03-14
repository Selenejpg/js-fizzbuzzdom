
//Scrivi un programma che stampi in console i numeri da 1 a 100.
for(let i = 0; i <= 100; i++){  
    console.log (i);

    //Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
    //Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
    //Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
    if( i % 3 == 0 && i % 5 == 0){
        document.getElementById("contenitoreNumeri").innerHTML += `<div class="fizzbuzz-multipli-trecinque d-flex col-xl-2 fs-1 mx-2 my-2 justify-content-center align-items-center" style= "width: 150px; height: 150px;">Fizzbuzz</div>`;
    
    //Per i multipli di 3 stampi “Fizz” al posto del numero
    }else if ( i % 5 == 0){
        document.getElementById("contenitoreNumeri").innerHTML += `<div class="fizz-multipli-tre d-flex col-xl-2 fs-1 mx-2 my-2 justify-content-center align-items-center" style= "width: 150px; height: 150px;">Fizz</div>`;
    
    // Per i multipli di 5 stampi "Buzz" al posto del numero
    }else if ( i % 3 == 0 ){
        document.getElementById("contenitoreNumeri").innerHTML += `<div class="buzz-multipli-cinque d-flex col-xl-2 fs-1 mx-2 my-2 justify-content-center align-items-center" style= "width: 150px; height: 150px;">Buzz</div>`;
    
    }else {
        document.getElementById("contenitoreNumeri").innerHTML += `<div class="bg-color d-flex col-xl-2 fs-1 mx-2 my-2 justify-content-center align-items-center" style= "width: 150px; height: 150px;">${i}</div>`;
    } 
    
}

