let btnAddTaskElem = document.getElementById('btnAddTask');
btnAddTaskElem.addEventListener('click', addTask);
let tasksList = [];

function addTask() {
  let inputTextValue = document.getElementById('inputText').value;
  tasksList.push(inputTextValue);
  document.getElementById('inputText').value = '';

  displayTasks(tasksList);
}

function deleteTask(i) {
  console.log('deleted task' + i);
  tasksList.splice(i,1);

  displayTasks(tasksList);
}

function displayTasks(tasksList) {
  let ulElem = document.getElementById('ulTasksList');
  ulElem.innerHTML = '';

  for(let i = 0; i < tasksList.length; i++) {
    let checkboxElem = document.createElement('input');
    checkboxElem.type = 'checkbox';
    checkboxElem.classList = 'checkboxTasksList';
    
    let paragElem = document.createElement('p');
    paragElem.classList = 'paragTasksList';
    paragElem.append(tasksList[i]);
    
    let imgElem = document.createElement('img');
    imgElem.src = 'https://cdn-icons-png.flaticon.com/512/73/73806.png';
    imgElem.classList = 'imgTasksList';
    imgElem.onclick = function() {deleteTask(i)};
    
    let liElem = document.createElement('li');
    liElem.classList = 'liTasksList';    
    liElem.appendChild(checkboxElem);
    liElem.appendChild(paragElem);
    liElem.appendChild(imgElem);
    
    ulElem.appendChild(liElem);
  }    
}



