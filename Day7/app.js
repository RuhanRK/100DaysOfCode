const Hangman = function(word, guessRemain){
    this.word = word,
    this.guessRemain = guessRemain,
    this.guessLetter = []
};

Hangman.prototype.getPuzzle = function(){
    const letters = this.word.toLowerCase().split('');
    const gLtter = this.guessLetter;
    return letters.map((letter) => gLtter.includes(letter) || letter === ' ' ? letter : '*').join('');

};

Hangman.prototype.makeGusses = function(guess){
    guess = guess.toLowerCase();

    const isUnique = !this.guessLetter.includes(guess);
    const inWord = !this.word.includes(guess);
    
    if(isUnique){
        this.guessLetter.push(guess);
        if(inWord){
            this.guessRemain--;
        }
    }
    
};

const instance1 = new Hangman('cat', 2);


console.log(instance1.guessLetter); // Output [ 'c', 'a', 'b' ]
console.log(instance1.getPuzzle());  // Output ca*
console.log(`You have ${instance1.guessRemain} remaining gusses`); //Output You have 1 remaining gusses

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    instance1.makeGusses(guess);
    console.log(instance1.getPuzzle()); 
    console.log(`You have ${instance1.guessRemain} remaining gusses`); 
});