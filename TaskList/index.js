let inputField = document.querySelector('.input-field')
let addBtn = document.querySelector('.add-btn')
let clearBtn = document.querySelector('.clear-btn')
let searchField = document.querySelector('.search-field')

let taskArr = JSON.parse(localStorage.getItem("taskArr"))


showTaskList()
fieldControl(inputField)
fieldControl(searchField)


//Listen to the event of typing into the inputField/ searchField
function fieldControl (fieldName){
    fieldName.onkeyup = () =>{
        let inputValue = fieldName.value;
        if (inputValue.trim() != 0){
            fieldName.nextElementSibling.classList.add('active')
        } else{
            fieldName.nextElementSibling.classList.remove('active')
        }
        showTaskList()
    }
}


//Listen to the event of clicking the addBtn
addBtn.onclick = () => {
    inputValue = inputField.value;
    if (taskArr == null){
        taskArr = [];
    } 
    taskArr.push(inputValue)
    localStorage.setItem("taskArr", JSON.stringify(taskArr))
    //show the updated taskList
    showTaskList()
    //make the addBtn inactive
    inputField.value = ""
    addBtn.classList.remove('active')
}

//Show the taskList
function showTaskList(){
    let taskList = document.querySelector('.task-list')
    let pendingNumb = document.querySelector('.pending-number')
    let searchValue = searchField.value.toLowerCase();

    taskList.innerHTML = ""

    //Fill in the taskList
    if (taskArr !== null){
        for (const [index, task] of taskArr.entries()) {
            if (searchValue.trim() != 0){
                if (task.toLowerCase().includes(searchValue)){
                    taskList.innerHTML += `<li>${task} <span class="delete-btn" onclick="deleteTask(${index})"><i class="fa fa-trash"></i></span></li>`
                }
            }
            else  taskList.innerHTML += `<li>${task} <span class="delete-btn" onclick="deleteTask(${index})"><i class="fa fa-trash"></i></span></li>`     
        }
        pendingNumb.innerHTML = taskArr.length
    }  else pendingNumb.innerHTML = 0    
}

//Delete a task
function deleteTask(index){
    if(confirm('Do you want to delete this task?')) {
        taskArr.splice(index,1)
        localStorage.setItem("taskArr", JSON.stringify(taskArr))
        showTaskList()
    } 
}

//Listen to the event of clicking the 'Clear All' button
clearBtn.onclick = () => {
    if(confirm('Do you want to clear all of your tasks?')){
        taskArr = []
        localStorage.setItem("taskArr", JSON.stringify(taskArr))
        showTaskList()
    }
}



