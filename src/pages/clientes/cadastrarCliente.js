import HttpClient from "../../middleware/HttpClient.js";

const formulario = document.querySelector('[data-formulario]');
const modal = document.querySelector('.modal');

const cadastrarCliente = async (evento) => {
    evento.preventDefault();
    try {
        const dadosFormulario = Object.fromEntries(new FormData(evento.target));
        const dados = {
            'pessoa': {
                'nome': dadosFormulario['nome'],
                'endereco': {
                    'cidade': dadosFormulario['cidade'],
                    'bairro': dadosFormulario['bairro'],
                    'rua': dadosFormulario['rua'],
                    'numero': dadosFormulario['numero'],
                    'complemento': dadosFormulario['complemento'],
                },
                'telefones': [
                    {
                        'numero': dadosFormulario['telefone'],
                        'is_contato_emergencia': true
                    }
                ]
            }
        }
        const response = await HttpClient.request(
            'http://localhost:8000/clientes/',
            'POST',
            dados
        );
        if (response.status == 201) {
            alert('Novo usuário criado com sucesso!');
            modal.style.display = 'none';
            window.location.reload();
        } else {
            alert('Não foi possível criar o novo usuário.');
        }
    } catch (error) {
        alert(`Ocorreu um erro: ${error.message}`);
    }
};

formulario.addEventListener('submit', cadastrarCliente);