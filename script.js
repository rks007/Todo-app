let addBtn = document.getElementById("add_btn");

let parentList = document.getElementById("parentList");


addBtn.addEventListener('click', addTodo);

//add todo
function addTodo(e){

    let currentInput = addBtn.previousElementSibling;
    let currentTodo = currentInput.value;
    
    let newLi = document.createElement('li');//create element takes tagName
    //newLi.classList.add('list-group-item');
    newLi.className = "list-group-item d-flex justify-content-between";

    newLi.innerHTML = `<input type="checkbox"  id="checkbox" class="checkbox" onchange="completed(this)">
    <h3 class="flex-grow-1" id="h3text">${currentTodo}</h3> 
    <button class="btn btn-warning mx-3" id="edit" onclick="editTodo(this)">Edit</button>
    <button class="btn btn-danger" id="remove" onclick="removeTodo(this)">Remove</button>`

    parentList.appendChild(newLi);
    currentInput.value = "";//after adding clear the input box
}


function removeTodo(currElement){
    currElement.parentElement.remove();
}

function editTodo(currElement){
    if(currElement.textContent ==="Done"){
        currElement.textContent = "Edit"
        let currentTodoText = currElement.previousElementSibling.value;
        let currHeading = document.createElement('h3')
        currHeading.className = "flex-grow-1"
        currHeading.id = "h3text"
        currHeading.textContent = currentTodoText;
        currElement.parentElement.replaceChild(currHeading, currElement.previousElementSibling)

    }
    else{
        currElement.textContent = "Done"
        let currentTodoText = currElement.previousElementSibling.textContent;
        let currInput = document.createElement('input')//in createElement we pass tag name
        currInput.type = "text";
        currInput.className = "form-control"
        currInput.value = currentTodoText;
                                               //new element //old element
        currElement.parentElement.replaceChild(currInput, currElement.previousElementSibling)
    }
    

}

function completed(currElement){
    let edit = currElement.parentElement.querySelector("#edit");
    let textt = currElement.parentElement.querySelector("#h3text");

    if (currElement.checked) {
        edit.style.display = "none";
        textt.style.textDecoration = "line-through"
    } 
    else {
        edit.style.display = "inline-block";
        textt.style.textDecoration = "none"
    }
}


