/*
const myTodo = [{
    title: "Wake up in the Morning",
    completed: true
},{
    title: "Eat Something",
    completed: true
},{
    title: "Do some Workout",
    completed: false
},{
    title: "Start Coding",
    completed: true
},{
    title: "Take Rest",
    completed: false
}];

// Delete TODO from Todo List
const deleteTodo = (inputTodo, todoTitle) => {
    const findTitle = inputTodo.findIndex((todo) => todo.title.toLowerCase() === todoTitle.toLowerCase());
    if (findTitle > -1){
        inputTodo.splice(findTitle, 1);
    }
    else{
        console.log("You have entered wrong TODO Title");
    }
};
// deleteTodo(myTodo, "Start Codings");
// console.log(myTodo);

// Show Incomplete Todo
const inCompleteTodo = (inoutTodo) => {
    return  inoutTodo.filter((todo, index) => !todo.completed);
};

// console.log(inCompleteTodo(myTodo));

// Sort todo

const sortTodo = function(inputTodo){
    inputTodo.sort(function(a, b){
        if(a.completed < b.completed){
            return -1;
        }
        else if( b.completed < a.completed){
            return 1;
        }
        else{
            return 0;
        }
    });
}

// Different way to sort , false task will appear fast
const sortTodo = function(inputTodo){
    inputTodo.sort(function(a, b){
        return a.completed - b.completed;
    });
}

// sortTodo(myTodo);
// console.log(myTodo);


// Expense Tracker

const account = {
    name: "Ruhan Khandaker",
    expense: [],
    income: [],
    addIncome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount
        });
    },

    addExpense: function(description, amount){
        this.expense.push({
            description: description,
            amount: amount
        });
    },
    getAccountSummary: function(){

        let totalExpense = this.expense.reduce(function(a, b) {
            return (a + b.amount);
          }, 0);
        let totalIncome = this.income.reduce(function(a, b) {
            return (a + b.amount);
        }, 0);

        return `${this.name} has balance of $${totalIncome - totalExpense}. $${totalIncome} in Income.  $${totalExpense} in expenses.`;
    }

};

account.addExpense("Drink coffee", 20);
account.addExpense("Buy Milk", 20);
account.addIncome("Salary", 1000)
console.log(account.expense);
console.log(account.income);
console.log(account.getAccountSummary());



const allP = document.querySelectorAll('p');

allP.forEach(function(p){
    if (p.textContent.toLocaleLowerCase().includes('the')){
        p.remove();
    }
});




const team = ['Tyler', 'Parker', 'Jonas', 'Peter', 'John'];
const message = team.length <= 4 ? `Team size: ${team.length}` : `Too Many People on your team`;
console.log(message);




const Hangman = function(word, guess, guessLetter = ''){
    this.word = word,
    this.guess = guess,
    this.guessLetter = guessLetter
};

Hangman.prototype.getPuzzle = function(){
    const letters = this.word.toLowerCase().split('');
    const gLtter = this.guessLetter.toLocaleLowerCase();

    // letters.forEach(letter => gLtter.includes(letter) ?  puzzle += letter : puzzle += '*');
    return letters.map((letter) => gLtter.includes(letter) || letter === ' ' ? letter : '*').join('');
};

const instance1 = new Hangman('cat', 2, 'cbt');
const instance2 = new Hangman('New York', 5, 'neW');

console.log(instance1.getPuzzle()); // Output c*t
console.log(instance2.getPuzzle()); // Output new ****
*/

// Different approach

const Hangman = function(word, guess){
    this.word = word,
    this.guess = guess,
    this.guessLetter = ['c']
};




const instance1 = new Hangman('cat', 2);
const instance2 = new Hangman('New York', 5);

instance1.guessLetter.push('e');
console.log(instance1.guessLetter); // Output [ 'c', 'e' ]

Hangman.prototype.getPuzzle = function(){
    const letters = this.word.toLowerCase().split('');
    const gLtter = this.guessLetter;
    return letters.map((letter) => gLtter.includes(letter) || letter === ' ' ? letter : '*').join('');

};

console.log(instance1.getPuzzle()); // Output c**
console.log(instance2.getPuzzle()); // Output *** ****
