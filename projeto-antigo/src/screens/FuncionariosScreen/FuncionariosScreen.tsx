import React from 'react';
import Link from 'next/link';

import style from './FuncionariosScreen.module.css';
import Card from '../../components/Card/Card';
import Funcionario from '../../models/Funcionario';


interface FuncionariosScreenProps {
    funcionarios: Funcionario[]
}

function FuncionariosScreen({ funcionarios }: FuncionariosScreenProps) {
    return (
        <main className={ style.funcionarios }>
            <div className={ style.funcionarios__acoes }>
                <input type='text' />
                <Link href={'/funcionarios/formulario/'}>Cadastrar</Link>
            </div>
            <div className={ style.cartoes }>
                { funcionarios.map( 
                    (funcionario) =>  
                        <Card 
                            funcionario={ funcionario } 
                            key={ funcionario.id } 
                        />
                ) }
            </div>
        </main>
    );
}

export default FuncionariosScreen;