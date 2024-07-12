function TextInput({ name, label, value, onChange, isPassword, placeholder = '' }) {
    return (
        <div>
            <label htmlFor={ name }>{ label }</label>
            <input 
                type={ isPassword ? "password" : "text" } 
                name={ name }
                value={ value }
                onChange={ onChange }
                placeholder={ placeholder }
            />
            <style jsx>{`
                div {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                }
                label {
                    color: #694520;
                }
                input {
                    padding: 10px;
                    border: 1px solid #cccccc;
                    border-radius: 5px;
                }
            `}</style>
        </div>

    );
}

export default TextInput;