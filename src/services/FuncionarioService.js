import HttpClient from '../middleware/HttpClient';

class FuncionarioService {

    static async cadastrar(dados) {
        const response = await HttpClient.request(
            '/funcionarios/',
            'POST',
            dados
        )
        if (response.status == 201) {
            return true;
        } else {
            return false;
        }
    }

    static async obterTodos() {
        const response = await HttpClient.request(
            '/funcionarios/',
            'GET'
        );
        if (response.status == 200) {
            return response.body
        } else {
            return null;
        }
    }

    static async obterPeloId(id) {
        const response = await HttpClient.request(
            `/funcionarios/${id}/`,
            'GET'
        );
        if(response.status == 200) {
            return response.body;
        } else {
            return null;
        }
    }

    static async atualizar(funcionarioId, dados) {
        const response = await HttpClient.request(
            `/funcionarios/${funcionarioId}/`,
            'PUT',
            dados
        );
        if(response.status == 200) {
            return true;
        } else {
            return false;
        }
    }

}

export default FuncionarioService;