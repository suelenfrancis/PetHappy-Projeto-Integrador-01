import HttpClient from '../../middleware/HttpClient.js';

const formulario = document.querySelector('[data-form]');

const fazerLogin = async (evento) => {
    evento.preventDefault();
    const data = Object.fromEntries(new FormData(evento.target));
    const response = await HttpClient.request(
        'http://localhost:8000/token/',
        'POST',
        data
    );
    if(response.status == 200) {
        window.location.replace('../home/index.html');
    } else {
        alert('Usuário e/ou senha não verificado');
    }
};

formulario.addEventListener('submit', fazerLogin);