const input = document.querySelector('.input');
const taskList = document.querySelector('.taskList');
function postTask () {
    const newTask = document.createElement('li');
    newTask.innerHTML = input.value;
    taskList.append(newTask);
}

document.querySelector('.button').onclick = postTask;