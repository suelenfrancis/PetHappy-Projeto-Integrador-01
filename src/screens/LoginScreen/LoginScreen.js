import React from 'react';
import { useRouter } from 'next/router';

import TextInput from '../../components/TextInput/TextInput';
import style from './LoginScreen.module.css';
import AuthService from '../../services/auth/AuthService';


function LoginScreen() {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const router = useRouter();

    async function onSubmit(event) {
        event.preventDefault();
        try {
            await AuthService.login(username, password);
            router.push('/home');
        } catch (e) {
            alert(`Ocorreu um erro durante a tentativa de login: ${e}`);
        }

    }

    return (
        <main className={ style.container }>
            <form className={ style.formulario }>
                <img className={ style.formulario__img } src="/img/logo.png" />
                <h2 className={ style.formulario__titulo }>Login</h2>
                <div className={ style.formulario__inputs }>
                    <TextInput
                        isPassword={ false }
                        label={ 'Usuário' }
                        placeholder={ 'Insira seu nome de usuário' }
                        name={'usuario'}
                        value={username}
                        onChange={ (event) => setUsername(event.target.value) } 
                    />
                    <TextInput
                        isPassword={ true }
                        label={ 'Senha' }
                        placeholder={ 'Insira sua senha' }
                        name={'senha'}
                        value={password}
                        onChange={ (event) => setPassword(event.target.value) } 
                    />
                </div>
                <button 
                    className={ style.botao }
                    onClick={ onSubmit }
                >Entrar</button>
            </form>
        </main>
    );
}

export default LoginScreen;