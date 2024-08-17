import HttpClient from '../middleware/HttpClient';
import Funcionario from '../models/Funcionario';
import BaseService from './BaseService';


class FuncionarioService extends BaseService<Funcionario>{

    constructor(){
        super('funcionarios');
    }

    public async cadastrar(funcionario: Funcionario): Promise<void> {
        const response = await HttpClient.request(
            '/funcionarios/',
            'POST',
            funcionario.toJson()
        )
        if (response.status != 201) {
            throw Error('Ocorreu um erro durante a operação de cadastro.')
        }
    }

    public async obterTodos(): Promise<Funcionario[]> {
        const response = await HttpClient.request(
            '/funcionarios/',
            'GET'
        );
        if (response.status == 200) {
            return response.body.map(json => Funcionario.fromJson(json));
        } else {
            return null;
        }
    }

    public async obter(id: number): Promise<Funcionario> {
        const response = await HttpClient.request(
            `/funcionarios/${id}/`,
            'GET'
        );
        if(response.status == 200) {
            return Funcionario.fromJson(response.body);
        } else {
            return null;
        }
    }

    public async atualizar(funcionario: Funcionario): Promise<void> {
        const response = await HttpClient.request(
            `/funcionarios/${funcionario.id}/`,
            'PUT',
            funcionario.toJson()
        );
        if(response.status == 200) {
            return;
        } else {
            throw Error('Ocorreu um erro durante a atualização.');
        }
    }

    public async remover(funcionario: Funcionario): Promise<void> {
        const response = await HttpClient.request(
            `/funcionarios/${funcionario.id}/`,
            'DELETE'
        );
        if(response.status == 204) {
            return;
        } else {
            throw Error('Ocorreu um erro durante a remoção.');
        }
    }

}

export default FuncionarioService;