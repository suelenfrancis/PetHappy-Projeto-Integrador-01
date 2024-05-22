class ClienteService {

    static async cadastrar(dados) {
        try {
            const response = await HttpClient.request(
                'http://localhost:8000/clientes/',
                'POST',
                dados
            );
            if (response.status == 201) {
                return response.body;
            } else {
                alert('Não foi possível criar o novo usuário.');
            }
        } catch (error) {
            alert(`Ocorreu um erro: ${error.message}`);
        }
    }
    
    static async obterTodos() {
        try {
            const response = await HttpClient.request(
                'http://localhost:8000/clientes/',
                'GET'
            );
            if (response.status == 200) {
                return response.body;
            }
        } catch (error) {
            alert(`Ocorreu um erro: ${error.message}`);
        }
    }

    static async obter(id) {
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
    }

    static async remover(id) {
        let removido = false;
        try {
            const response = await HttpClient.request(
                `http://localhost:8000/clientes/${id}`,
                'DELETE'
            );
            if (response.status == 204) {
                removido = true;
            }
        } catch (error) {
            alert(`Ocorreu um erro: ${error.message}`);
        } finally {
            return removido;
        }
    }
}