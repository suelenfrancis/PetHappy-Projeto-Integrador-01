import React from 'react';
import { useRouter } from 'next/router';

import CampoTexto from '../../components/CampoTexto/CampoTexto';
import styles from './LoginScreen.module.css';
import AuthService from '../../services/auth/AuthService';


const LoginScreen = () => {

    const router = useRouter();

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const fazerLogin = async (evento) => {
        evento.preventDefault();
        try {
            await AuthService.login(username, password);
            router.push('/exemplo');
        } catch (error) {
            alert('Usuário e/ou Senha não foram verficados.');
            console.log(error);
        }
    }

    return (
        <div className={styles.containerLogin}>
            <form className={styles.formularioLogin} onSubmit={fazerLogin}>
                <div align="center">
                    <img src="/images/logo_login.jpg" style={{ height: '50%', width: '50%' }}/>
                </div>
                <h2 style={{ textAlign: 'center', marginTop: '0px', marginBottom: '10px', color: '#694520' }} >Login</h2>
                <CampoTexto
                    label={ 'Usuário' }
                    name={ 'username' }
                    setValue={ (value) => setUsername(value) }
                />
                <CampoTexto
                    label={ 'Senha' }
                    name={ 'password' }
                    setValue={ (value) => setPassword(value) }
                    isPassword={ true }
                />
                <button 
                    className={styles.botao} 
                    type="submit" 
                    style={{ marginTop: '15px' }}
                    disabled={ (username.length == 0 || password.length == 0) }
                >Entrar</button>
            </form>
        </div>
    );
}

export default LoginScreen;