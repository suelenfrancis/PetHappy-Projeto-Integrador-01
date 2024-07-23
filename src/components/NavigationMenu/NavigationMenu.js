import React from 'react';
import Link from 'next/link';

import style from './NavigationMenu.module.css';


function NavigationMenu() {

    const [paginaAtual, setPaginaAtual] = React.useState('');
    
    React.useEffect(() => {
        const urlPaginaAtual = window.location.href;
        const pagina = urlPaginaAtual.split('/').slice(-1)[0] ?? '';
        console.log(pagina);
        setPaginaAtual(pagina);
    }, [])

    function selected(name) {
        return paginaAtual == name ? style.selecionado : '';
    }

    return (
        <nav className={ style.menuNavegacao }>
            <ul>
                <li className={ selected('') }>
                    <Link href="/">Visão Geral</Link>
                </li>
                <li className={ selected('funcionarios') }>
                    <Link href="/funcionarios">Funcionários</Link>
                </li>
                <li className={ selected('clientes') }>
                    <Link href="/clientes">Clientes</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationMenu;