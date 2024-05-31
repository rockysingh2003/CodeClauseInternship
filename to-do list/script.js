document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('new-task');
    const tasksList = document.getElementById('tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(task) {
        if (task) {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';

            const taskText = document.createElement('span');
            taskText.textContent = task;

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn btn-danger btn-sm';
            deleteBtn.textContent = 'Delete';
            deleteBtn.onclick = () => listItem.remove();

            listItem.appendChild(taskText);
            listItem.appendChild(deleteBtn);

            tasksList.appendChild(listItem);
        }
    }
});
