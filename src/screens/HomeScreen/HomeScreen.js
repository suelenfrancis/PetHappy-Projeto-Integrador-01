import style from './HomeScreen.module.css';


function HomeScreen() {
    return (
        <main className={ style.dashboard }>
            <h1 className={ style.dashboard__titulo }>Visão Geral</h1>
            <div className={ style.dashboard__cartoes }>
                <div className={ style.cartao__container }>
                    <p className={ style.cartao__valor }>0</p>
                    <p className={ style.cartao__descricao }>Total de Funcionários</p>
                </div>
                <div className={ style.cartao__container }>
                    <p className={ style.cartao__valor }>0</p>
                    <p className={ style.cartao__descricao }>Total de Clientes</p>
                </div>
                <div className={ style.cartao__container }>
                    <p className= { style.cartao__valor }>0</p>
                    <p className={ style.cartao__descricao }>Total de Pets</p>
                </div>
            </div>
        </main>
    );
}

export default HomeScreen;