const listTask = document.getElementById('listTask')
const addTask = document.getElementById('addTask')
var maxInputs = 9
var inputCount = 0

function addNewTask() {
    // List Li
    const taskLi = document.createElement('li')
    taskLi.classList.add('taskLi')
    listTask.appendChild(taskLi)

    // Input Description

    const inputTask = document.createElement('input')
    inputTask.addEventListener('input', () => {
        let maxLenght = 22
        let currentLenght = inputTask.value.length

        if (currentLenght > maxLenght) {
            inputTask.value = inputTask.value.slice(0, maxLenght)
        }
    })
    inputTask
    inputTask.type = 'text'
    inputTask.placeholder = 'Descricao'
    inputTask.classList.add('layoutDescription')
    
    taskLi.appendChild(inputTask)

    // Input Time
    const inputTime = document.createElement('input')
    inputTime.type = 'time'
    inputTime.classList.add('layoutTime')
    taskLi.appendChild(inputTime)

    // Input Date
    const inputDate = document.createElement('input')
    inputDate.type = 'Date'
    inputDate.classList.add('layoutDate')
    taskLi.appendChild(inputDate)

    // Button Finalizar
    const buttonFinalize = document.createElement('button')
    buttonFinalize.innerText = 'Finalizar'
    buttonFinalize.classList.add('buttonFinalize')
    taskLi.appendChild(buttonFinalize)

   

    buttonFinalize.addEventListener('click', () => {
        inputCount--
        listTask.removeChild(taskLi)
        
    })
}


addTask.addEventListener('click', () => {

    if (window.innerWidth <= 767 && inputCount >= 5) {
        return
    }

    if (inputCount < maxInputs) {
        addNewTask()
        inputCount++
}})
