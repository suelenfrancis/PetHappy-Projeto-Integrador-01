import styles from './LoginScreen.module.css';


const LoginScreen = () => {
    return (
        <div className={styles.containerLogin}>
        <form className={styles.formularioLogin} action="processar_login.php" method="post">
            <div align="center">
                <img src="/images/logo_login.jpg" style={{ height: '50%', width: '50%' }}/>
            </div>
            <h2 style={{ textAlign: 'center', marginTop: '0px', marginBottom: '10px', color: '#694520' }} >Login</h2>
            <div className={styles.grupoInput}>
                <label for="usuario" style={{ color: '#694520' }}>Usuário:</label>
                <input type="text" id="usuarioLogin" name="usuario" required />
            </div>
            <div className={styles.grupoInput}>
                <label for="senha" style={{ color: '#694520' }}>Senha:</label>
                <input type="password" id="senhaLogin" name="senha" required />
            </div>
            <button className={styles.botao} type="submit" style={{ marginTop: '15px' }}>Entrar</button>
        </form>
    </div>
    );
}

export default LoginScreen;