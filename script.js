//Referenciando elementos do DOM no js
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var tasks = JSON.parse(localStorage.getItem('list_tasks')) || [];

//Redenxrizando os tasks em tela
function renderTasks() {
    listElement.innerHTML = '';
    for(task of tasks) {
       var taskElement = document.createElement('li');
       var taskText = document.createTextNode(task);

       //criando link de excluir
       var linkElement = document.createElement('a');
       linkElement.setAttribute('href', '#');

       //pegando posição da task dentro do array
       var pos = tasks.indexOf(task);
       linkElement.setAttribute('onclick', 'deleteTask('+ pos +')');

       var linkText = document.createTextNode(' -Excluir');

       linkElement.appendChild(linkText);

       taskElement.appendChild(taskText);
       taskElement.appendChild(linkElement);
       listElement.appendChild(taskElement);
    }
}
renderTasks();

//adicionado Tasks
function addTask() {
    var taskText = inputElement.value;

    tasks.push(taskText);
    inputElement.value = '';
    renderTasks();
    saveToStorage();
}
buttonElement.onclick = addTask;

//funcao para remover tasks
function deleteTask(pos) {
    tasks.splice(pos,1);
    renderTasks();
    saveToStorage();
}
//Salvando dados no local storage
function saveToStorage() {
    localStorage.setItem('list_tasks',JSON.stringify(tasks));
}

