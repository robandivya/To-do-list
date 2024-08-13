
document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert("Pls enter the task")
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div>
                <button class="complete-task"><i class="fas fa-check"></i></button>
                <button class="edit-task"><i class="fas fa-edit"></i></button>
                <button class="delete-task"><i class="fas fa-trash"></i></button>
            </div>
        `;

        taskList.appendChild(li);
        taskInput.value = '';

        li.querySelector('.complete-task').addEventListener('click', () => {
            li.querySelector('.task-text').classList.toggle('completed');
        });

        li.querySelector('.edit-task').addEventListener('click', () => {
            const newTaskText = prompt('Edit task:', li.querySelector('.task-text').textContent);
            if (newTaskText !== null) {
                li.querySelector('.task-text').textContent = newTaskText;
            }
        });

        li.querySelector('.delete-task').addEventListener('click', () => {
            if (confirm('Are you sure you want to delete this task?')) {
                li.remove();
            }
        });
    }
});
