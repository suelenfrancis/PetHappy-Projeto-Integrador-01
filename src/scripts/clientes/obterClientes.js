import HttpClient from '../../middleware/HttpClient.js';


const renderizaClientes = (clientes) => {
    const clientesContainer = document.querySelector('[data-clientes]');
    const clientesHtml = clientes.map(
        cliente => 
        `
        <div class="cartao" data-id=${cliente.id}>
            <p class="cartao__nome">${cliente.pessoa.nome}</p>
            <address>${cliente.pessoa.endereco.rua}, ${cliente.pessoa.endereco.numero} (${cliente.pessoa.endereco.bairro})</address>
            <p>${cliente.pessoa.telefones.map(telefone => telefone.numero).join(',')}</p>
        </div>
        `
    );
    clientesContainer.innerHTML = clientesHtml.join(' ');
};

const obterClientes = async () => {
    try {
        const response = await HttpClient.request(
            'http://localhost:8000/clientes/',
            'GET'
        );
        if (response.status == 200) {
            const clientes = response.body;
            renderizaClientes(clientes);
        }
    } catch (error) {
        alert(`Ocorreu um erro: ${error.message}`);
    }
}

obterClientes();