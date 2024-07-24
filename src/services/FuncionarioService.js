import HttpClient from '../middleware/HttpClient';

class FuncionarioService {

    static async cadastrar(dados) {
        const response = await HttpClient.request(
            'http://127.0.0.1:8000/funcionarios/',
            'POST',
            dados
        )
        console.log(response.body);
        if (response.status == 201) {
            return true;
        } else {
            return false;
        }
    }

    static async obterTodos() {
        const response = await HttpClient.request(
            'http://127.0.0.1:8000/funcionarios/',
            'GET'
        );
        if (response.status == 200) {
            return response.body
        } else {
            return null;
        }
    }

}

export default FuncionarioService;