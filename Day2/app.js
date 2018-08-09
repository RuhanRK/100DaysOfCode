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
const deleteTodo = function(inputTodo, todoTitle){
    const findTitle = inputTodo.findIndex(function(todo){
        return todo.title.toLowerCase() === todoTitle.toLowerCase();
    });
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
const inCompleteTodo = function(inoutTodo){
    return  inoutTodo.filter(function(todo, index){
        return !todo.completed;
    });
};

// console.log(inCompleteTodo(myTodo));

// Sort todo
/*
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
*/
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
