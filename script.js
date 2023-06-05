let addBtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal-cont");
let allPriCont = document.querySelectorAll(".priority-cont");
let addModal = true;

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
    })
}