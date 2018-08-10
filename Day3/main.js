let myTodo = [];

// get data from local Storage
const todoJSON = localStorage.getItem('user');
if(todoJSON !== null){
    myTodo = JSON.parse(todoJSON);
};

// Search text
const filters = {
    searchText: '',
    hideCompleted: false
};
// Filter Todo
const renderSearch = function(todo, text){
    let searchTodo = todo.filter(function(item){
        const hideComplete = !item.completed;
        const searchTxt = item.title.toLowerCase().includes(text.searchText);
        return (filters.hideCompleted ? (searchTxt && hideComplete) : searchTxt);
    });


    //Reset Todo when search
    document.querySelector(".allTodo").innerHTML = '';

    // Show incomplete Todo
     const inCompleteTodo = searchTodo.filter(function(todo){
        return !todo.completed;
    });

    // Add Incomplete Todo number to HTML
    const createPara = document.createElement("h3");
    createPara.innerHTML = `<em>You have <strong>${inCompleteTodo.length}</strong> Todos Left</em>`;
    document.querySelector(".allTodo").appendChild(createPara);

    // Print All Todo Title
    searchTodo.forEach(function(todo){
        const createTodoPara = document.createElement("p");
        createTodoPara.textContent = todo.title;
        document.querySelector(".allTodo").appendChild(createTodoPara);
    });

};

renderSearch(myTodo, filters);

// Search Todo
document.getElementById("search-todo").addEventListener('input', function(e){
    filters.searchText = e.target.value.toLowerCase();
    renderSearch(myTodo, filters);
});

// Create todo list from user Input
document.querySelector('#create-todo').addEventListener('submit', function(e){
    e.preventDefault();
    if(e.target.elements.addTodo.value !== ''){
        myTodo.push({
            title: e.target.elements.addTodo.value,
            completed: false
        });
    }
    else{
        alert("Write something")
    }
    e.target.elements.addTodo.value = '';
    localStorage.setItem('user', JSON.stringify(myTodo));
    renderSearch(myTodo, filters);
});

// Checkbox function
document.querySelector('#check-todo').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked;
    renderSearch(myTodo, filters);
});
