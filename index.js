let titleInput = document.getElementById("messageTitle");
let messageInput = document.getElementById("messageBody");
let addButton = document.getElementById("addButton");
let scrapsField = document.getElementById("scrapsField");

let scraps = [];

function renderScraps() {
  scrapsField.innerHTML = ''
  for (const scrap of scraps) {
    scrapsField.innerHTML += createScrapCard(scrap.title, scrap.message);
  }
}

function addNewScrap() {
  let title = titleInput.value;
  let message = messageInput.value;

  if (!messageTitle.value || !messageBody.value) {
    return alert("Todos os campos deem ser preenchidos!!")
  }

  titleInput.value = ''
  messageInput.value = ''


  scraps.push({ title, message });

  renderScraps()

}

function createScrapCard(title, message) {
  return `<div class="message-cards card text-white bg-dark m-2">
  <div class="card-header font-weight-bold">${title}</div>
  <div class="card-body">
    <p class="card-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A obcaecati voluptates eligendi enim sequi mollitia, molestias, officia in ad nobis sint cupiditate exercitationem ipsam voluptatibus, debitis quaerat nulla aperiam nihil?
    </p>
  </div>
  <div class="w100 d-flex justify-content-end pr-2 pb-2">
      <button class="btn btn-danger mr-1">deletar</button>
      <button class="btn btn-info" data-toggle="modal" data-target="#editModal">editar</button>
  </div>
</div>
  `;
}

addButton.onclick = addNewScrap;
