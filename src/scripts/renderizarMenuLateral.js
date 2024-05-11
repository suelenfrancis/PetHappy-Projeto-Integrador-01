const menuLateral = document.querySelector('[data-menu-lateral]');

menuLateral.classList.add('menu-lateral');

const urlPaginaAtual = window.location.href;
const paginaAtual = urlPaginaAtual.split('/').slice(-1)[0].replace('.html', '');

menuLateral.innerHTML = `
<nav>
    <ul>
        <li>
            <div ${paginaAtual == 'index' ? 'class="menu-lateral__item--selecionado"' : ''}>
                <a href="index.html">Visão Geral</a>
            </div>
        </li>
        <li>
            <div ${paginaAtual == 'funcionarios' ? 'class="menu-lateral__item--selecionado"' : ''}>
                <a href="funcionarios.html">Funcionários</a>
            </div>
        </li>
        <li>
            <div ${paginaAtual == 'clientes' ? 'class="menu-lateral__item--selecionado"' : ''}>
                <a href="clientes.html">Clientes</a>
            </div>
        </li>
    </ul>
</nav>
`;