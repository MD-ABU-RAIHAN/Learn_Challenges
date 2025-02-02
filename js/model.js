'use strict'

const btnsOpenModal = document.querySelectorAll(".show-modal");
const overLay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.close-modal');

const openModal = () => {
    modal.classList.remove('hidden');
    overLay.classList.remove("hidden");
}
const closeModal = () => {
    modal.classList.add('hidden');
    overLay.classList.add('hidden');
}

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnClose.addEventListener('click', closeModal);
overLay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
})