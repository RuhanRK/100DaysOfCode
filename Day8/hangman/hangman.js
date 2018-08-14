const Hangman = function(word, guessRemain){
    this.word = word.toLowerCase().split(''),
    this.guessRemain = guessRemain,
    this.guessLetter = [],
    this.status = 'Playing'
};

    
Hangman.prototype.getStatus = function(){
    
//    const unguessed = this.word.filter((letter) => !this.guessLetter.includes(letter));
//    
//    const finished = unguessed.length < 1
    
    const finished = this.word.every((letter) => this.guessLetter.includes(letter));
//    let finished = true;
//    
//    this.word.forEach((letter) => {
//        if(this.guessLetter.includes(letter)){
//            
//        } else {
//            finished = false;
//        }
//    })
    switch(true){
        case this.guessRemain < 1:
            this.status = 'Failed'
            document.querySelector('#gRemain').innerHTML = ` Nice try! The word was <strong> ${this.word.join('')} </strong>`
            break
        case finished:
            this.status = 'Finished'
            document.querySelector('#gRemain').innerHTML = ` <strong> Great Work! You guess the word </strong>`
            break
        default:
            this.status = 'Playing'
            document.querySelector('#gRemain').textContent = ` Guess Left:  ${this.guessRemain}`
  
            
    }
//    if(this.guessRemain < 1){
//        this.status = 'Failed'
//            document.querySelector('#gRemain').textContent = `Nice try! The word was ${instance1.word.join('')}`
//    }
//    else if(finished){
//        this.status = 'Finished'
//    document.querySelector('#gRemain').textContent = `Great Work! You guess the word`
//    }
//    else{
//        this.status = 'Playing'
//        document.querySelector('#gRemain').textContent = ` Guess Left: ${instance1.guessRemain}`
//    }
};

Hangman.prototype.getPuzzle = function(){
    const letters = this.word;
    const gLtter = this.guessLetter;
    return letters.map((letter) => gLtter.includes(letter) || letter === ' ' ? letter : '*').join('');

};

/*
Hangman.prototype.getMessage = function(){
    if(this.status === 'Playing'){
        return ` Guess Left:  ${this.guessRemain}`
    }
    else if(this.status === 'Failed'){
        return ` Nice try! The word was ${this.word.join('')}`
    }
    else{
        return ` Nice try! The word was <strong> ${this.word.join('')} </strong>`
    }
}
*/
Hangman.prototype.makeGusses = function(guess){
    guess = guess.toLowerCase();

    const isUnique = !this.guessLetter.includes(guess);
    const inWord = !this.word.includes(guess);
    
    if(this.status !== 'Playing'){
        return false
    }
    
    if(isUnique){
        this.guessLetter.push(guess);
        if(inWord){
            this.guessRemain--;
        }
    }
    this.getStatus();
};

