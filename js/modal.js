const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

function openModal() {
    modal.style.display = "block";
    document.body.classList.add("body-no-scroll");
}

function closeModal() {
    modal.style.display = "none";
    document.body.classList.remove("body-no-scroll");
}

const handleOnClose = e => {
    if (e.code === 'Escape') {
        closeModal();
    }
};

window.addEventListener('keydown', handleOnClose);
