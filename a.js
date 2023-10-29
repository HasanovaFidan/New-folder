let plus = document.getElementById("plus");
let yazilacaqText = document.getElementById("yazilacaqtext");
let taskList = document.getElementById("yazilacaqhtml");
let clearAllBtn = document.getElementById("hamisinisil");
let updateModal = document.getElementById("modalinumumidivi");
let overlay = document.querySelector(".overlay");
let editButtons = document.querySelectorAll(".task-btn-edit");
let deleteButtons = document.querySelectorAll(".task-btn-delete");
let completeButtons = document.querySelectorAll(".task-btn-complete");
let taskItems = document.querySelectorAll(".task-item");
let xInput = document.getElementById("xintask");
let submitX = document.getElementById("submitx");
let closeModalButton = document.getElementById("iks");

// 1 htmli burda olsun adddan istifade edim
function add(yazilar) {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";
    taskItem.innerHTML = `
        <div class="task-description">${yazilar}</div>
        <button id="edit" class="task-btn task-btn-edit"><i id="edited" class="fa-regular fa-pen-to-square fa-bounce" style="color: #00ff40;"></i></button>
        <button id="delete" class="task-btn task-btn-delete"><i id="deleted" class="fa-solid fa-trash fa-sm" style="color: #ffffff;"></i></button>
        <button id="xett" class="task-btn task-btn-complete"><i class="fa-duotone fa-list" style="--fa-primary-color: #1100ff; --fa-secondary-color: #006eff;"></i></button>
    `;
    taskList.appendChild(taskItem);
}

// 2 opsu olan forma verilecek deyerler valueler
plus.addEventListener("click", function (e) {
    e.preventDefault();
    const addele = yazilacaqText.value.trim();
    if (addele === "") {
        alert("Bos olmaz!!");
    } else {
        add(addele);
        yazilacaqText.value = "";
    }
});

// 3 hamisini sil burda olsun
clearAllBtn.addEventListener("click", function () {
    taskList.innerHTML = "";
});

// 4 delete
taskList.addEventListener("click", function (e) {
    if (e.target.id === "deleted") {
        e.target.parentElement.parentElement.remove();
    }
});

// 5 xett
taskList.addEventListener("click", function (e) {
    if (e.target.id === "xett") {
        const taskXett = e.target.parentElement;
        taskXett.classList.toggle("complete");
    }
});

editButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        updateModal.classList.toggle("open");
        overlay.classList.toggle("active");
        updateModal.style.zIndex = "100";
    });
});

closeModalButton.addEventListener("click", function () {
    updateModal.classList.remove("open");
    overlay.classList.remove("active");
    updateModal.style.zIndex = "0";
});
