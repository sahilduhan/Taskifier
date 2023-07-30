const getTaskHtml = (title, id) => {
	return `
		<div class="task" id='task_${id}'>
			<div class="content">
				<input onfocusout="saveTask('${id}')" id='${id}' type="text" class="text" value='${title}' readonly>
			</div>
			<div class="actions">
				<button onclick="editTask('${id}')" class="editButton">Edit</button>
				<button onclick="deleteTask('task_${id}')"class="deleteButton">Delete</button>
			</div>
		</div>
	`
}

const editTask = (id) => {
	const task = document.getElementById(id);
	task.readOnly = false;
	task.focus();
}

const saveTask = (id) => {
	const task = document.getElementById(id);
	task.readOnly = true;
}

const deleteTask = (id) => {
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