const getTaskHtml = (title, id) => {
	return `
		<div class="task" id='task_${id}'>
			<div class="content">
				<input id='${id}' type="text" class="text" value='${title}' readonly>
			</div>
			<div class="actions">
				<button onclick = "editTask('${id}')" class="editButton">Edit</button>
				<button onclick = "saveTask('${id}')" class="saveTaskButton">Save</button>
				<button onclick = "deleteTask('task_${id}')" class="deleteButton">Delete</button>
			</div>
		</div>
	`
}

const saveTask = (id) =>{
	const task = document.getElementById(id);
	task.readOnly = true;
}

const editTask = (id) =>{
	const task = document.getElementById(id);
	task.readOnly = false;
	task.focus();
}

const deleteTask = (id) =>{
	const task = document.getElementById(id);
	task.remove();
}

window.addEventListener('load', () => {
	const form = document.querySelector('#inputTaskForm');
	const taskList = document.querySelector('#tasks');

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const taskTitle = e.target[0].value;
		taskList.innerHTML += getTaskHtml(taskTitle, new Date());
	})
});