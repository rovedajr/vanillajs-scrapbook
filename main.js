class TaskList {
    constructor() {
        this.titleInput = document.getElementById("messageTitle");
        this.messageInput = document.getElementById("messageBody");
        this.addButton = document.getElementById("addButton");
        this.scrapsField = document.getElementById("scrapsField");

        this.scraps = []

        renderScraps()
        this.scrapsField.innerHTML = ""
        for (const scrap of this.scraps) {
            this.scrapsField.innerHTML += createScrapCard(scrap.title, scrap.message)
        }

    }

    addNewScrap() {
        let title = this.titleInput.value
        let message = this.this.messageInput.value

        this.titleInput.value = ""
        this.messageInput.value = ""

        this.scraps.push({ title, message })
    }

    createScrapCard() {
        return `<div class="message-cards card text-white bg-dark m-2">
        <div class="card-header font-weight-bold">${title}</div>
        <div class="card-body">
          <p class="card-text">
            ${message}
          </p>
        </div>
        <div class="w100 d-flex justify-content-end pr-2 pb-2">
            <button class="btn btn-danger mr-1">deletar</button>
            <button class="btn btn-info">editar</button>
        </div>
      </div>
        `
    }
}

new TaskList()