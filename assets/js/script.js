var addBtn = document.getElementById('addTaskBtn');
addBtn.addEventListener('click', addTask);
var taskList = [];

function addTask() {
  var inputElement = document.getElementById('inputText');
  var inputValue = inputElement.value;
  taskList.push(inputValue);
  document.getElementById('inputText').value = '';

  var element = '';
  for (var i = 0; i < taskList.length; i++)
  {
    element += '<li><input type="checkbox" class="transitionCheckbox"><p>';
    element += taskList[i];
    element += '</p></li>';
  }
  
  var ulElement = document.getElementById('tasksList');
  ulElement.innerHTML = element;
}


