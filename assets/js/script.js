var addBtn = document.getElementById('addTaskBtn');
addBtn.addEventListener('click', addTask);
var taskList = [];

function addTask() {
  var inputText = document.getElementById('inputText').value;
  taskList.push(inputText);
  document.getElementById('inputText').value = '';

  for(var i = 0; i < taskList.length; i++) {
    var inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.classList = 'transitionCheckbox';
    var paragraph = document.createElement('p');
    paragraph.append(taskList[i]);

    var liElement = document.createElement('li');
    liElement.appendChild(inputCheckbox);
    liElement.appendChild(paragraph);
  }
  var ulElement = document.getElementById('tasksList');
  ulElement.appendChild(liElement);
  console.log(ulElement);
}
