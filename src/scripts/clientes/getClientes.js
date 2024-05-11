import HttpClient from '../../middleware/HttpClient.js';


const renderizaClientes = (clientes) => {
    const tabela = document.querySelector('[data-clientes]');
    const clientesHtml = clientes.map(
        cliente => 
        `
        <div class="cartao">
            <p class="cartao__nome">${cliente.pessoa.nome}</p>
            <address>${cliente.pessoa.endereco.rua}, ${cliente.pessoa.endereco.numero} (${cliente.pessoa.endereco.bairro})</address>
            <p>${cliente.pessoa.telefones.map(telefone => telefone.numero).join(',')}</p>
        </div>
        `
    );
    tabela.innerHTML = clientesHtml.join(' ');
};

const getClientes = async () => {
    try {
        const response = await HttpClient.request(
            'http://localhost:8000/clientes/',
            'GET'
        );
        if (response.status == 200) {
            console.log(response.body);
            renderizaClientes(response.body);
        }
    } catch (error) {
        alert(`Ocorreu um erro: ${error.message}`);
    }
};

getClientes();
