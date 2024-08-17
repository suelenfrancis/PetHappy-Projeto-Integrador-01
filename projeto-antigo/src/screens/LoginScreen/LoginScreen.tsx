import React from 'react';
import { useRouter } from 'next/router';

import style from './LoginScreen.module.css';
import AuthService from '../../services/auth/AuthService';
import InputTextoForm from '../../components/InputTextoForm/InputTextoForm';


function LoginScreen() {

    const router = useRouter();

    async function FazerLogin(event): Promise<void> {
        event.preventDefault();
        const dadosFormulario = new FormData(event.target);
        const credenciais = {
            username: dadosFormulario.get('username').toString().trim(),
            password: dadosFormulario.get('password').toString().trim()
        }
        try {
            await AuthService.login(credenciais);
            router.push('/');
        } catch (e) {
            alert(`Ocorreu um erro durante a tentativa de login: ${e}`);
        }

    }

    return (
        <main className={ style.container }>
            <form className={ style.formulario } onSubmit={ FazerLogin }>
                <img className={ style.formulario__img } src="/img/logo.png" />
                <h2 className={ style.formulario__titulo }>Login</h2>
                <div className={ style.formulario__inputs }>
                    <InputTextoForm
                        isPassword={ false }
                        label={ 'Usuário' }
                        placeholder={ 'Insira seu nome de usuário' }
                        name={ 'username' }
                        maxLength={ 20 } 
                    />
                    <InputTextoForm
                        isPassword={ true }
                        label={ 'Senha' }
                        placeholder={ 'Insira sua senha' }
                        name={ 'password' }
                        maxLength={ 8 }
                    />
                </div>
                <input className={ style.botao } type="submit" />
            </form>
        </main>
    );
}

export default LoginScreen;