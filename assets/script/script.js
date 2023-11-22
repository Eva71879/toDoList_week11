const input = document.querySelector('.input');
const taskList = document.querySelector('.taskList');
function postTask () {
    if (input.value.trim().length) {
        const newTask = document.createElement('li');
        newTask.innerHTML = input.value;
        taskList.append(newTask);
        input.value = ""; // Здесь обнуляем значение инпута
       }
}

function checkTask(evt) {
    if (evt.target.tagName === "LI") {
     evt.target.classList.toggle("checked");
    }
   }
taskList.onclick = checkTask;

document.querySelector('.button').onclick = postTask;