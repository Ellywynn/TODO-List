// get elements
const input = document.querySelector('.input');
let textInput = input.querySelector('#textInput');
let addButton = input.querySelector('.addTaskBtn');
let tasks = document.querySelector('.tasks');

// add event listeners to the input and add task button
textInput.addEventListener('keydown', function (ev) {
    // add a task if enter key or add task button were pressed
    if (ev.keyCode === 13 && textInput.value !== "") {
        addTask();
    }
});
addButton.addEventListener('click', function (ev) {
    if (textInput.value !== "") {
        addTask();
    }
});

// adds a task to the task list
function addTask() {
    // create task elements
    let taskText = document.createTextNode(textInput.value);
    let tasklabel = document.createElement('label');
    let checkbox = document.createElement('input');
    let spanBtn = document.createElement('span');
    let spanText = document.createElement('span');
    let removeTaskBtn = document.createElement('button');

    // initialize elements
    checkbox.type = "checkbox";
    tasklabel.className = "task";
    checkbox.className = "checkbox";
    spanBtn.className = "btnSpan";
    spanText.className = "spanText";
    removeTaskBtn.className = "closeTaskBtn";
    checkbox.value = taskText;

    // add event listeners to the checkbox and remove task button
    checkbox.addEventListener('click', function (ev) {
        // toggle text decoration to the completed task 
        if (ev.target.checked === true) {
            spanText.style.textDecoration = "line-through";
        } else {
            spanText.style.textDecoration = "none";
        }
    });
    removeTaskBtn.addEventListener('click', function (ev) {
        //delete task
        tasks.removeChild(tasklabel);
        tasks.removeChild(spanBtn);
    });

    // append elements
    spanBtn.appendChild(removeTaskBtn);
    spanText.appendChild(taskText);
    removeTaskBtn.appendChild(document.createTextNode("X"));
    tasklabel.appendChild(checkbox);
    tasklabel.appendChild(spanText);
    tasks.appendChild(tasklabel);
    tasks.appendChild(spanBtn);

    // reset text input
    textInput.value = "";
}