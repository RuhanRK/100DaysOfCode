//Fetch Existing Todos from Local Storage
const getSavedTodos = () => {
    // get data from local Storage
    const todoJSON = localStorage.getItem('user');
    try {
        return todoJSON ? JSON.parse(todoJSON) : []; // Use truthy/ Falsy
    } 
    catch (error) {
        return []
    }
};

// Save todo to Local storage
const saveTodos = (todo) => localStorage.setItem('user', JSON.stringify(todo));

// Remove Todo function
const removeTodo = (id) => {
    const todoIndex = myTodo.findIndex((todo) => todo.id === id);
    if(todoIndex > -1){
        myTodo.splice(todoIndex, 1);
    }
};

// check function for complete/incomplete task
const completeTodo = (id /*checkeds*/) => {
    const todoFind = myTodo.find((todo) => todo.id === id);
    // return todoFind.completed = checkeds;
    return todoFind.completed = !todoFind.completed;
}


// get The DOM elements for an Individual todo
const generateTodoDOM = (todo) => {
    const mainDiv = document.createElement("div")
    const createTodo = document.createElement("a");
    const createButton= document.createElement("button");
    const createCheck= document.createElement("input");

    createTodo.setAttribute('href', `/edit.html#${todo.id}`);

    createCheck.setAttribute('type', 'checkbox');
    createCheck.checked = todo.completed;
    mainDiv.appendChild(createCheck);

    createCheck.addEventListener('change', () => {
        // console.log(createCheck.checked);
        completeTodo(todo.id/*, createCheck.checked*/);
        saveTodos(myTodo);
        renderSearch(myTodo, filters);
    });
    
    //Remove todo from Todo List
    createButton.textContent = "x";
    createButton.addEventListener('click', () => {
        // console.log(todo);
        removeTodo(todo.id);
        saveTodos(myTodo);
        renderSearch(myTodo, filters);
    });

    if(todo.title.length > 0){
        createTodo.textContent = todo.title;
    }
    else{
        alert("Write something");
    }

    mainDiv.appendChild(createTodo);
    mainDiv.appendChild(createButton);
    return mainDiv;
};

// get the DOM elements for list su>mmary
const generateSummaryDOM = (todo) => {
    // Add Incomplete Todo number to HTML
    const createPara = document.createElement("h3");
    createPara.innerHTML = `<em>You have <strong>${todo.length}</strong> Todos Left</em>`;
    return document.querySelector(".allTodo").appendChild(createPara);
};



// Render Application Todos based on filters
// Filter Todo
const renderSearch = (todo, text) => {
    let searchTodo = todo.filter((item) => {
        const hideComplete = !item.completed;
        const searchTxt = item.title.toLowerCase().includes(text.searchText);
        return (filters.hideCompleted ? (searchTxt && hideComplete) : searchTxt);
    });


    //Reset Todo when search
    document.querySelector(".allTodo").innerHTML = '';
    
    // Show incomplete Todo
     const inCompleteTodo = searchTodo.filter((todo) => !todo.completed);
    // Generate summary
    generateSummaryDOM(inCompleteTodo);
    
    // Print All Todo Title
    searchTodo.forEach((todo) => {
        document.querySelector(".allTodo").appendChild(generateTodoDOM(todo));
    });
   
};