const CampoTexto = ({ label, name, placeholder = '', isPassword = false, setValue}) => {

    return (
        <div>
            <label htmlFor={ name } style={{ color: '#694520' }}>{ label }</label>
            <input 
                type={ isPassword ? "password" : "text" } 
                name={ name }
                placeholder={ placeholder }
                onChange={ (evento) => setValue(evento.target.value) }
            />
            <style jsx>{`
                div {
                    margin-bottom: 15px; /* Espaçamento inferior */
                    width: 95%;
                }
                div label {
                    font-size: 14px;
                    display: block; /* Mostra em bloco */
                    font-weight: normal; /* Negrito */
                }
                div input {
                    width: 100%; /* Largura total */
                    padding: 10px; /* Espaçamento interno */
                    border: 1px solid #cccccc; /* Borda cinza */
                    border-radius: 5px; /* Borda arredondada */
                }
            `}</style>
        </div>
    );
}

export default CampoTexto;