import NavigationMenu from '../NavigationMenu/NavigationMenu';
import style from './PageHeader.module.css';

function PageHeader() {
    return (
        <header className={ style.cabecalho }>
            <div className={ style.cabecalho__container }>
                <img className={ style.cabecalho__logo } src="/img/logo.jpg" alt="Logo da PetHappy"/>
                <h1 className={ style.cabecalho__titulo }>PetHappy</h1>
            </div>
            <NavigationMenu />
        </header>
    );
}

export default PageHeader;