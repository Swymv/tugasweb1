// Menambahkan task baru
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Task cannot be empty!');
        return;
    }

    const taskList = document.getElementById('task-list');

    // Membuat elemen list baru
    const listItem = document.createElement('li');
    
    // Membuat elemen text dan tombol delete dengan gambar
    listItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button onclick="deleteTask(this)">
            <img src="logo.png" alt="Delete" class="delete-icon">   
        </button>
    `;

    taskList.appendChild(listItem);
    taskInput.value = '';
}

// Menghapus task
function deleteTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
}
