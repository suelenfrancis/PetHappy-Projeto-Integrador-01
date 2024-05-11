import HttpClient from '../../middleware/HttpClient.js';


const renderizaFuncionarios = (funcionarios) => {
    const tabela = document.querySelector('[data-funcionarios]');
    const funcionariosHtml = funcionarios.map(
        funcionario => 
        `
        <div class="cartao">
            <p class="cartao__nome">${funcionario.pessoa.nome}</p>
            <p class="cartao__username">${funcionario.usuario.username}</p>
            <address>${funcionario.pessoa.endereco.rua}, ${funcionario.pessoa.endereco.numero} (${funcionario.pessoa.endereco.bairro})</address>
            <p>${funcionario.pessoa.telefones.map(telefone => telefone.numero).join(',')}</p>
            <p>${funcionario.usuario.email}</p>
        </div>
        `
    );
    tabela.innerHTML = funcionariosHtml;
};

const getFuncionarios = async () => {
    try {
        const response = await HttpClient.request(
            'http://localhost:8000/funcionarios/',
            'GET'
        );
        if (response.status == 200) {
            console.log(response.body);
            renderizaFuncionarios(response.body);
        } else {
            alert('Não foi possível obter os dados.');
        }
    } catch (error) {
        alert(`Ocorreu um erro: ${error.message}`);
    }
};

getFuncionarios();
