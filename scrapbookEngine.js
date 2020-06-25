let field = document.querySelector('#scrapsField')
let messageTitle = document.querySelector('#messageTitle')
let messageBody = document.querySelector('#messageBody')
let button = document.getElementsByTagName("button")[0]
let tasks =
    JSON.parse(localStorage.getItem('task_list')) ||
    [
        // { titulo: 'Test alskdj wehewrltkjehrt ertk wkejrhw rkjh rektj', mensagem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum consequatur voluptas deleniti.' }
    ]



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
        deleteButton.innerHTML = '<span aria-hidden="true">×</span>'
        headerBox.appendChild(deleteButton)
    }
}

renderCard()

function storeLocally() {
    localStorage.setItem('task_list', JSON.stringify(tasks))
}



button.onclick = fillTasks