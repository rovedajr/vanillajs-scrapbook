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

        // deleteButton.innerHTML = '<span aria-hidden="true"><svg viewBox="0 0 24 24" class="deletion"><g><path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path></g></svg></span>'


        deleteButton.innerHTML = `<svg width="100%" height="100%" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
        <path d="M17,2C25.279,2 32,8.721 32,17C32,25.279 25.279,32 17,32C8.721,32 2,25.279 2,17C2,8.721 8.721,2 17,2ZM17.006,13.47L11.431,7.895C11.15,7.614 10.769,7.456 10.371,7.456C9.974,7.456 9.592,7.614 9.311,7.895C8.863,8.343 8.343,8.863 7.895,9.311C7.614,9.592 7.456,9.974 7.456,10.371C7.456,10.769 7.614,11.15 7.895,11.431L13.47,17.006L7.901,22.575C7.62,22.856 7.462,23.238 7.462,23.635C7.462,24.032 7.62,24.414 7.901,24.695C8.345,25.139 8.861,25.655 9.305,26.099C9.586,26.38 9.968,26.538 10.365,26.538C10.762,26.538 11.144,26.38 11.425,26.099L16.994,20.53L22.569,26.105C22.85,26.386 23.231,26.544 23.629,26.544C24.026,26.544 24.408,26.386 24.689,26.105C25.137,25.657 25.657,25.137 26.105,24.689C26.386,24.408 26.544,24.026 26.544,23.629C26.544,23.231 26.386,22.85 26.105,22.569L20.53,16.994L26.099,11.425C26.38,11.144 26.538,10.762 26.538,10.365C26.538,9.968 26.38,9.586 26.099,9.305C25.655,8.861 25.139,8.345 24.695,7.901C24.414,7.62 24.032,7.462 23.635,7.462C23.238,7.462 22.856,7.62 22.575,7.901L17.006,13.47Z" style="fill:rgb(199,199,199);"/>
    </svg>`




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