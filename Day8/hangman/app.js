const instance1 = new Hangman('car parts', 2);


document.querySelector('#gLtr').textContent = instance1.puzzle;
document.querySelector('#gRemain').textContent = instance1.statusMessage;

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    instance1.makeGusses(guess);
    document.querySelector('#gLtr').textContent = instance1.puzzle;
    document.querySelector('#gRemain').textContent = instance1.statusMessage;
});

// Making HTTP Requests

const country = new XMLHttpRequest();
const countryCode = 'IN';

country.addEventListener('readystatechange', (e) =>{
    if(e.target.readyState === 4 && e.target.status === 200){
        
        const data = JSON.parse(e.target.responseText);
        
        const countryName = data.forEach((item) =>{
            if(item.alpha2Code === countryCode){
                console.log(`Your country name is: ${item.name}`)
            };
        });
        // use find method
    }
    else if(e.target.readyState === 4){
        console.log('An error occured')
    }
    
})



country.open('GET', 'https://restcountries.eu/rest/v2/all')
country.send()