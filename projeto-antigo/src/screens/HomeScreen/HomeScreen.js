import Link from 'next/link';

import style from './HomeScreen.module.css';
import CartaoOpcoes from './CartaoOpcoes/CartaoOpcoes';


function HomeScreen() {
    return (
        <main className={ style.dashboard }>
            <div className={ style.opcoes }>
                <CartaoOpcoes 
                    iconName={'people'}
                    label={'Funcionários'}
                    links={[
                        <Link href={'/funcionarios'}>Listar funcionários</Link>,
                        <Link href={'/funcionarios/formulario'}>Cadastrar funcionário</Link>
                    ]}
                />
                <CartaoOpcoes 
                    iconName={'diversity_1'}
                    label={'Clientes'}
                    links={[
                        <Link href={'/clientes'}>Listar clientes</Link>,
                        <Link href={'/clientes/formulario'}>Cadastrar cliente</Link>
                    ]}
                />
                <CartaoOpcoes 
                    iconName={'pets'}
                    label={'Pet'}
                    links={[
                        <Link href={'/pets'}>Listar pets</Link>,
                        <Link href={'/pets/formulario'}>Cadastrar pet</Link>
                    ]}
                />
                <CartaoOpcoes 
                    iconName={'paid'}
                    label={'Serviços'}
                    links={[
                        <Link href={'/servicos'}>Listar servicos</Link>,
                        <Link href={'/servicos/formulario'}>Cadastrar servico</Link>
                    ]}
                />
            </div>
        </main>
    );
}

export default HomeScreen;