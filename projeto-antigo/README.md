# Preparando ambiente de desenvolvimento
## Instalando dependências
Caso tenha acabado de baixar o projeto para sua máquina local, será necessário instalar todas as dependências do projeto. Dentro do diretório raiz do projeto, rode o comando:
```bash
npm install
```
## Rodando o projeto em modo de desenvolvimento
Após garantir que todas as dependências estão instaladas, para rodar o projeto em modo de desenvolvimento, basta utilizar o comando:
```bash
npm run dev
```
# O básico de Next
O Next é um framework baseado na biblioteca React.
## Criando nova página
No framework Next, as rotas de páginas são organizadas dentro do diretório `pages/`. Ao criar um arquivo com extensão `.js`, exportando um componente React dentro desse diretório, iremos exibir esse componente quando o usuário acessar a URL dessa página. Por exemplo, vamos supor que criamos um arquivo chamado `hello-world.js` dentro do diretório `pages/` com o seguinte conteúdo:
```javascript
function HelloWorld() {
    return 'Olá mundo';
}

export default HelloWorld;
```
Em seguida, rode o projeto em desenvolvimento e acesse a URL `http://localhost:3000/hello-world`. Você irá ver uma página em branco com o conteúdo `Olá mundo` impresso. Podemos melhorar essa página retornando um componente react ao invés de simplesmente uma mensagem.

## Componentes React
Para criar um componente, iremos utilizar a mesma lógica das páginas. As regras básicas para construir um componente são:
- Escreva uma função;
- Essa função deve começar com letra maiúscula;
- O retorno da função deve ser um "HTML";
Vamos desenvolver um componente para a página `/hello-world`. Por convenção, vamos criar esse componente dentro da pasta `src/components/`. Crie um arquivo chamado `Titulo.js` dentro do diretório `src/components`. Em seguida, coloque esse conteúdo dentro dele:
```javascript
function Titulo({ texto }) {
    return <h1>{ texto }</h1>
}

export default Titulo;
```
Repare que criamos um componente chamado `Titulo` que recebe um `texto` e coloca esse texto dentro de uma tag `<h1>`. Como dito anteriormente, o retorno da função deve conter apenas HTML, por isso, **quando vamos fazer referência a qualquer valor dinâmico (variáveis ou parâmetros que vem do javascript) temos que utilizar esse valor entre chaves** `{}`. Fique atento também para o uso das chaves (`{}`) dentro dos parênteses que definem os parâmetros da função. Isso acontece porque, por padrão, todo componente React recebe um parâmetro chamado `props`, que pode ser ignorado em componentes sem a necessidade de receberem valores. Entretanto, quando queremos que esse componente receba um valor, podemos acessar esses valores através do parâmetro `props`, por exemplo:
```javascript
function Titulo(props) {
    return <h1>{ props.texto }</h1>
}

export default Titulo;
```
O uso das chaves nos parâmetros irá buscar dentro do parâmetro `props` se existe um valor com o nome `texto`, se existir, o javascript irá criar uma variável chamada `texto` que pode ser usada dentro da função.
