mainForm = document.getElementById('main-form');
mainForm.addEventListener('submit', onSubmit);
ul = document.getElementById('content');
function onSubmit(event){
    event.preventDefault();
    const content = mainForm.todo.value;
    li = document.createElement('li');
    li.innerHTML = `${content} <button id ="delete">&times</button>`;
    ul.appendChild(li);
    mainForm.todo.value = "";
    li.addEventListener('click', onClick);
    function onClick() {
        li.classList.toggle("checked");
    }
}
ul.addEventListener('click', onDelete);
function onDelete (event){
    if (event.target.id === 'delete'){
        event.target.parentNode.remove();
        
    }
}
