function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Verifica se o campo de entrada não está vazio
    if (taskInput.value.trim() === "") {
        alert("Digite uma tarefa.");
        return;
    }

    // Cria um item de lista para a nova tarefa
    const li = document.createElement("li");

    // Cria um texto para a tarefa
    const taskText = document.createElement("span");
    taskText.textContent = taskInput.value;

    // Cria o botão de excluir
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Excluir";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = () => deleteTask(li);

    // Cria o botão de marcar como concluído
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Concluir";
    completeBtn.classList.add("complete-btn");
    completeBtn.onclick = () => completeTask(li, taskText);

    // Adiciona os elementos à tarefa
    li.appendChild(taskText);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Adiciona a tarefa à lista
    taskList.appendChild(li);

    // Limpa o campo de entrada
    taskInput.value = "";
}

// Função para excluir uma tarefa
function deleteTask(taskItem) {
    taskItem.remove();
}

// Função para marcar uma tarefa como concluída
function completeTask(taskItem, taskText) {
    taskItem.classList.toggle("completed");
    if (taskItem.classList.contains("completed")) {
        taskText.style.textDecoration = "line-through";
    } else {
        taskText.style.textDecoration = "none";
    }
}
