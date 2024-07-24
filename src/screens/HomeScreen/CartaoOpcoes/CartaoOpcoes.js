import style from './CartaoOpcoes.module.css';

function CartaoOpcoes({ iconName, label, links }) {
    return (
        <div className={ style.cartao }>
            <div className={ style.cartao__cabecalho }>
                <span className='material-icons'>{ iconName }</span>
                <h2>{ label }</h2>
            </div>
            <nav>
                <ul>
                    { links.map((link) => <li>{ link }</li>) }
                </ul>
            </nav>
        </div>
    );
}

export default CartaoOpcoes;