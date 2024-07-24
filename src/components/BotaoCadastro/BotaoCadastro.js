import style from './BotaoCadastro.module.css';

function BotaoCadastro({ texto, onClick }) {
    return (
        <button
            className={ style.botaoCadastro } 
            onClick={ () => onClick() }>{ texto }</button>
    );
}

export default BotaoCadastro;