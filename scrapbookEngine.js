let field = document.querySelector('#scrapsField')
let messageTitle = document.querySelector('#messageTitle')
let messageBody = document.querySelector('#messageBody')
let button = document.getElementsByTagName("button")[0]
let tasks =
    JSON.parse(localStorage.getItem('task_list')) || []

function deleteTask(position) {
    tasks.splice(position, 1)

    renderCard()
    storeLocally()
}




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
        headerBox.classList.add('card-header')
        headerBox.innerText = task.titulo

        let closer = document.createElement('button')
        closer.innerHTML = `<button type="button" class="close text-white" id="closer" aria-label="Close">
        <span aria-hidden="true">&times;</span>`

        closer.classList.add('close', 'text-white')
        headerBox.appendChild(closer)



        let messageBody = document.createElement('div')
        messageBody.classList.add('card-body', 'scroll')

        let messageContent = document.createElement('p')
        messageContent.innerText = task.mensagem

        messageBody.appendChild(messageContent)
        card.appendChild(headerBox)
        card.appendChild(messageBody)
        field.appendChild(card)

        let position = tasks.indexOf(task)
        closer.setAttribute('onclick', `deleteTask(${position})`)
    }
}

renderCard()

function storeLocally() {
    localStorage.setItem('task_list', JSON.stringify(tasks))
}



button.onclick = fillTasks