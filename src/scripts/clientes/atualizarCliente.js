import HttpClient from "../../middleware/HttpClient.js";

const clientesContainer = document.querySelector('[data-clientes]');
const formulario = document.querySelector('[data-formulario]');
const modal = document.querySelector('.modal');

const obterDadosCliente = async (id) => {
    try {
        const response = await HttpClient.request(
            `http://localhost:8000/clientes/${id}`,
            'GET'
        );
        if (response.status == 200) {
            return response.body;
        }
    } catch (error) {
        alert(`Ocorreu um erro: ${error.message}`);
    }
};

const atualizarCliente = async (evento) => {
    const cartao = evento.target.tagName.toLowerCase() == 'div' 
        ? evento.target 
        : evento.target.parentNode.tagName.toLowerCase() == 'div'
            ? evento.target.parentNode
            : null;
    const clienteId = cartao.getAttribute('data-id');
    if (clienteId != null) {
        const cliente = await obterDadosCliente(clienteId);
        formulario['nome'].value = cliente.pessoa.nome;
        formulario['cidade'].value = cliente.pessoa.endereco.cidade;
        formulario['bairro'].value = cliente.pessoa.endereco.bairro;
        formulario['rua'].value = cliente.pessoa.endereco.rua;
        formulario['numero'].value = cliente.pessoa.endereco.numero;
        formulario['complemento'].value = cliente.pessoa.endereco.complemento;
        formulario['telefone'].value = cliente.pessoa.telefones[0].numero;
        formulario.addEventListener('submit', async (evento) => {
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
                    `http://localhost:8000/clientes/${clienteId}/`,
                    'PUT',
                    dados
                );
                if (response.status == 200) {
                    modal.style.display = 'none';
                    alert('Os dados do Cliente foram atualizados com sucesso!');
                }
            } catch (error) {
                alert(`Ocorreu um erro: ${error.message}`);
            }
        });
        modal.style.display = 'block';
    }
}

clientesContainer.addEventListener('click', atualizarCliente);