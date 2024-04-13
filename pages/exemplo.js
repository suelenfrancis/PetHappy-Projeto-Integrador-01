import React from "react";

function HomePage() {
    // Variáveis reativas
    // dentro do colchetes, o primeiro é a variável e o segundo é a função que altera a variável
    // O valor passado para React.useState() é o valor inicial da variável 
    let [contador, setContador] = React.useState(0);
    const [texto, setTexto] = React.useState('');
    
    // Retornando HTML
    // Use chaves {} dentro do HTML para chamar as variáveis javascript
    return (
        <div>
            <p>{texto}</p>
            <input type="text" onChange={ (evento) => setTexto(evento.target.value) }/>
            <p>{contador}</p>
            <button onClick={() => setContador(contador - 1)}>Clique</button>
        </div>
    )
}

export default HomePage;