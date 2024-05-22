class FuncionarioService {
    
    static async obterTodos() {
        try {
            const response = await HttpClient.request(
                'http://localhost:8000/funcionarios/',
                'GET'
            );
            if (response.status == 200) {
                return response.body
            } else {
                alert('Não foi possível obter os dados.');
            }
        } catch (error) {
            alert(`Ocorreu um erro: ${error.message}`);
        }
    }

}