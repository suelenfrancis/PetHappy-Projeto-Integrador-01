import Link from 'next/link';

import style from './PageHeader.module.css';

function PageHeader() {
    return (
        <header className={ style.cabecalho }>
            <Link href={'/'} className={ style.cabecalho__link }>
                <a>
                    <div className={ style.cabecalho__container }>
                        <img className={ style.cabecalho__logo } src="/img/logo.jpg" alt="Logo da PetHappy"/>
                        <h1 className={ style.cabecalho__titulo }>PetHappy</h1>
                    </div>
                </a>
            </Link>
        </header>
    );
}

export default PageHeader;