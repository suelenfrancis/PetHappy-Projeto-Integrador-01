import style from './Card.module.css';

function Card({ funcionario }) {
    return (
        <div className={ style.cartao }>
            <p className={ style.cartao__nome }>{ funcionario.pessoa.nome }</p>
            <p className={ style.cartao__username }>{funcionario.usuario.username}</p>
            <address>{`${funcionario.pessoa.endereco.rua} ${funcionario.pessoa.endereco.numero} (${funcionario.pessoa.endereco.bairro})`}</address>
            <p>{ funcionario.pessoa.telefones.map(telefone => telefone.numero).join(',') }</p>
            <p>{funcionario.usuario.email}</p>
        </div>
    );
}

export default Card;