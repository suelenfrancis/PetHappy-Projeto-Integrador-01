import ILogin from '../../interfaces/ILogin';
import HttpClient from '../../middleware/HttpClient';
import TokenService from './TokenService';


class AuthService {

    static async login(credenciais: ILogin) {
        const response = await HttpClient.request(
            'http://localhost:8000/token/', 
            'POST',
            credenciais
        );
        if (response.status === 200) {
            const accessToken = response.body['access'];
            TokenService.save(accessToken);
        }
        else if (response.status === 401) {
            throw new Error('Não Autorizado');
        } 
        else {
            throw new Error('Erro Inesperado');
        }
    }

}

export default AuthService;