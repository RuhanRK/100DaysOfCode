class Hangman {
    constructor(word, guessRemain){
        this.word = word.toLowerCase().split(''),
        this.guessRemain = guessRemain,
        this.guessLetter = [],
        this.status = 'Playing'
        }
    getStatus(){
        const finished = this.word.every((letter) => this.guessLetter.includes(letter) || letter === ' ');

        switch(true){
            case this.guessRemain < 1:
                this.status = 'Failed'
                break
            case finished:
                this.status = 'Finished'
                break
            default:
                this.status = 'Playing'
        }
    }
    get puzzle(){
        const letters = this.word;
        const gLtter = this.guessLetter;
        return letters.map((letter) => gLtter.includes(letter) || letter === ' ' ? letter : '*').join('');
    }
    get statusMessage(){
        if(this.status === 'Playing'){
            return ` Guess Left:  ${this.guessRemain}`
        }
        else if(this.status === 'Failed'){
            return ` Nice try! The word was ${this.word.join('')}`
        }
        else{
            return ` Nice try! The word was ${this.word.join('')} `
        }
    }
    makeGusses(guess){
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
    }
}


