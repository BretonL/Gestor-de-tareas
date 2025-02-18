const highPriorityInput = document.getElementById('highPriorityTaskInput');
const addHighPriorityTaskBtn = document.getElementById('addHighPriorityTaskBtn');
const highPriorityTaskList = document.getElementById('highPriorityTaskList');

const mediumPriorityInput = document.getElementById('mediumPriorityTaskInput');
const addMediumPriorityTaskBtn = document.getElementById('addMediumPriorityTaskBtn');
const mediumPriorityTaskList = document.getElementById('mediumPriorityTaskList');

const lowPriorityInput = document.getElementById('lowPriorityTaskInput');
const addLowPriorityTaskBtn = document.getElementById('addLowPriorityTaskBtn');
const lowPriorityTaskList = document.getElementById('lowPriorityTaskList');

addHighPriorityTaskBtn.addEventListener('click', () => addTask(highPriorityInput, highPriorityTaskList));
addMediumPriorityTaskBtn.addEventListener('click', () => addTask(mediumPriorityInput, mediumPriorityTaskList));
addLowPriorityTaskBtn.addEventListener('click', () => addTask(lowPriorityInput, lowPriorityTaskList));

function addTask(input, taskList) {
    const taskText = input.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.className = 'task';
    li.innerHTML = `
        <input type="checkbox" onclick="toggleComplete(this)">
        <span>${taskText}</span>
        <button onclick="removeTask(this)">Eliminar</button>
    `;

    taskList.appendChild(li);
    input.value = '';
}



li.innerHTML = `
    <input type="checkbox" onclick="toggleComplete(this)">
    <span>${taskText}</span>
    <button onclick="removeTask(this)">Eliminar</button>
`;

taskList.appendChild(li);
input.value = '';

function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.parentElement.removeChild(taskItem);
}

function toggleComplete(checkbox) {
    const taskItem = checkbox.parentElement;
    taskItem.classList.toggle('completed', checkbox.checked);
}