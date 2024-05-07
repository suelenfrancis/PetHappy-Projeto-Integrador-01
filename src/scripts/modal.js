const modal = document.querySelector('.modal');
const botaoModal = document.querySelector('[data-modal-trigger]');

const exibeModal = (evento) => {
    modal.style.display = 'block';
};

window.onclick = (evento) => {
    if (evento.target == modal) {
        modal.style.display = 'none';
    }
};

botaoModal.addEventListener('click', exibeModal);