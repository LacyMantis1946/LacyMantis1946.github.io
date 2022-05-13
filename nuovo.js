//definire le variabili degli elementi da modificare o da monitorare

console.log ('Avvio file js')
//questo richiama la casella di input
const productNameInputElement= document.getElementById('cercaunnome')
console.log('id product time')
//questo richiama lo span dei caratteri rimasti
const remainingCharattElement= document.getElementById('caratteririmanenti')

//console.dir(productName)(InputElement);

const maxAllovedChars = productNameInputElement.maxLength

function updateRemainingCharacters(event) {
    console.log('Funzione chiamata')

    //testo digitato
    const enteredText = event.target.value;
    console.log(enteredText)
    //lunghezza del testo inserito
    const enteredTextLenght = enteredText.length;
    //Caratteri rimanenti = max di caratteri accettati - lunghezza del testo inserito
    const remainingCharacters = maxAllovedChars - enteredTextLenght;
    //
    remainingCharattElement.textContent = remainingCharacters
}

productNameInputElement.addEventListener('input', updateRemainingCharacters)
    //Cambia colore cella
    if (remainingCharacters===0) {
        remainingCharattElement.classList.add('error');
        productNameInputElement.classList.add ('error')
        remainingCharattElement.classList.remove ('warming')
        productNameInputElement.classList.remove ('warming')
    }else if (remainingCharacters <=10){
    remainingCharattElement.classList.remove('error')
    productNameInputElement.classList.remove('error')
    remainingCharattElement.classList.add('warming')
    productNameInputElement.classList.add('warming')
            
    }else{
        remainingCharattElement.classList.remove('error')
        productNameInputElement.classList.remove('error')
        remainingCharattElement.classList.remove('warming')
        productNameInputElement.classList.remove('warming')
        
    }
    
