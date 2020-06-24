let field = document.querySelector('#scrapsField')
let messageTitle = document.querySelector('#messageTitle')
let messageBody = document.querySelector('#messageBody')
let button = document.getElementsByTagName("button")[0]
let tasks = JSON.parse(localStorage.getItem('task_list')) || [
    // { titulo: 'Test', mensagem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum consequatur voluptas deleniti.' }
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
        headerBox.classList.add('card-header')
        headerBox.innerText = task.titulo

        let messageBody = document.createElement('div')
        messageBody.classList.add('card-body', 'scroll')

        let messageContent = document.createElement('p')
        messageContent.innerText = task.mensagem

        messageBody.appendChild(messageContent)
        card.appendChild(headerBox)
        card.appendChild(messageBody)
        field.appendChild(card)
    }
}

renderCard()

function storeLocally() {
    localStorage.setItem('task_list', JSON.stringify(tasks))
}



button.onclick = fillTasks