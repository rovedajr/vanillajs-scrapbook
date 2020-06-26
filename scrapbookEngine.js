let field = document.querySelector('#scrapsField')
let messageTitle = document.querySelector('#messageTitle')
let messageBody = document.querySelector('#messageBody')
let button = document.getElementsByTagName("button")[0]
let tasks =
    JSON.parse(localStorage.getItem('task_list')) || []

function fillTasks() {
    if (!messageTitle.value || !messageBody.value) {
        alert('nope')
    } else {
        let titulo = messageTitle.value
        let mensagem = messageBody.value
        tasks.push({ titulo, mensagem })
        messageTitle.value = ""
        messageBody.value = ""
        renderCard()
        storeLocally()
    }
}

function renderCard() {
    field.innerHTML = ""
    for (task of tasks) {
        let card = document.createElement('div')
        card.classList.add('card', 'bg-dark', 'col-md-3', 'text-white', 'message-cards', 'm-2')

        let headerBox = document.createElement('div')
        let titleBox = document.createElement('h5')
        titleBox.classList.add('cardTitle')
        headerBox.classList.add('card-header')
        titleBox.innerText = task.titulo
        headerBox.appendChild(titleBox)

        let messageBody = document.createElement('div')
        messageBody.classList.add('card-body', 'scroll')

        let messageContent = document.createElement('p')
        messageContent.innerText = task.mensagem

        messageBody.appendChild(messageContent)
        card.appendChild(headerBox)
        card.appendChild(messageBody)
        field.appendChild(card)

        let deleteButton = document.createElement('button')
        deleteButton.classList.add('close')
        deleteButton.setAttribute('data-dismis', 'modal')
        deleteButton.innerHTML = '<span aria-hidden="true"><svg viewBox="0 0 24 24" class="deletion"><g><path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path></g></svg></span>'
        headerBox.appendChild(deleteButton)

        let position = tasks.indexOf(task)
        deleteButton.setAttribute('onclick', `deleteTask(${position})`)
    }
}

renderCard()

function storeLocally() {
    localStorage.setItem('task_list', JSON.stringify(tasks))
}

function deleteTask(position) {
    tasks.splice(position, 1)
    renderCard()
    storeLocally()
}

button.onclick = fillTasks