let addBtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal-cont");
let allPriCont = document.querySelectorAll(".priority-cont");
let textArea = document.querySelector(".textarea-cont");
let mainCont = document.querySelector('.main-cont');
let modalPriorityColor = 'black';
let addModal = true;
let uid = new ShortUniqueId();

addBtn.addEventListener("click", function () {
    if (addModal) {
        modal.style.display = "flex";
    } else {
        modal.style.display = "none";
    }
    addModal = !addModal;
});

for (let i = 0; i < allPriCont.length; i++) {
    allPriCont[i].addEventListener("click", function () {
        for (let j = 0; j < allPriCont.length; j++) {
            if (allPriCont[j].classList.contains('active')) {
                allPriCont[j].classList.remove('active');
            }
        }
        allPriCont[i].classList.add('active');
        modalPriorityColor = allPriCont[i].classList[1];
    })
}

textArea.addEventListener('keydown', function (e) {
    if (e.key == "Enter") {
        let task = textArea.value;
        createTicket(task);
        textArea.value = "";
        modal.style.display = "none";
        addModal = !addModal;

    }
});

function createTicket(task) {
    let ticketCont = document.createElement('div');
    ticketCont.setAttribute("class", "ticket-cont");
    ticketCont.innerHTML = `<div class="ticket-color ${modalPriorityColor}"></div>
                            <div class="ticket-id">#${uid()}</div>
                            <div class="task-area">${task}</div>`;
    mainCont.appendChild(ticketCont);
}