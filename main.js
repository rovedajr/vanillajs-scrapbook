class TaskList {
    constructor() {
        this.titleInput = document.getElementById("messageTitle");
        this.messageInput = document.getElementById("messageBody");
        this.addButton = document.getElementById("addButton");
        this.scrapsField = document.getElementById("scrapsField");

        this.scraps = []

        console.log(this.titleInput, this.messageInput);

    }
}

new TaskList()