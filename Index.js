let addToDoButton = document.getElementById('addToDo');
let toDoConatiner = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerHTML = inputField.value;
    toDoConatiner.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('click', function(){
        toDoConatiner.appendChild(paragraph);
        toDoConatiner.removeChild(paragraph);
    })
})