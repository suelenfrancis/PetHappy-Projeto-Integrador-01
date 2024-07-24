import React from 'react';

import style from './FuncionariosScreen.module.css';
import Card from '../../components/Card/Card';
import Link from 'next/link';

function FuncionariosScreen({ funcionarios }) {
    return (
        <main className={ style.funcionarios }>
            <div className={ style.funcionarios__acoes }>
                <input type='text' />
                <Link href={'/funcionarios/cadastrar'}>Cadastrar</Link>
            </div>
            <div className={ style.cartoes }>
                { funcionarios.map( 
                    (funcionario) =>  <Card funcionario={ funcionario } key={ funcionario.id } />
                ) }
            </div>
        </main>
    );
}

export default FuncionariosScreen;