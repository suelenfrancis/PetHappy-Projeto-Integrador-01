import React from "react";

interface InputTextoFormProps {
    name: string,
    label: string,
    isPassword: boolean,
    placeholder: string,
    maxLength: number | null
}

function InputTextoForm({ 
    name, 
    label,
    isPassword, 
    placeholder = '', 
    maxLength = null 
} : InputTextoFormProps) {

    const [value, setValue] = React.useState('');

    return (
        <div>
            <label htmlFor={ name }>{ label }</label>
            <input 
                type={ isPassword ? "password" : "text" } 
                name={ name }
                value={ value }
                onChange={ (event) =>  setValue(event.target.value) }
                placeholder={ placeholder }
                maxLength={ maxLength }
            />
            <style jsx>{`
                div {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
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

export default InputTextoForm;