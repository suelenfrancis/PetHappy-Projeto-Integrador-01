import React from 'react';
import { useRouter } from 'next/router';

import TextInput from '../../components/TextInput/TextInput';
import style from './FuncionarioFormularioScreen.module.css';
import FuncionarioService from '../../services/FuncionarioService';


function FuncionarioFormularioScreen() {
    const [nome, setNome] = React.useState('');
    const [cidade, setCidade] = React.useState('');
    const [bairro, setBairro] = React.useState('');
    const [rua, setRua] = React.useState('');
    const [numero, setNumero] = React.useState('');
    const [telefone1, setTelefone1] = React.useState('');
    const [telefone2, setTelefone2] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const router = useRouter();

    const Cabecalho = () => {
        return <h2>Cadastrar Funcionário</h2>;
    }

    async function cadastrarFuncionario(event) {
        event.preventDefault();
        //const dadosFormulario = Object.fromEntries(new FormData(event.target));
        //console.log(dadosFormulario)
        const dados = {
            pessoa: {
                nome: nome,
                endereco: {
                    cidade: cidade,
                    bairro: bairro,
                    rua: rua,
                    numero: numero
                },
                telefones: [
                    {
                        numero: telefone1,
                        is_contato_emergencia: true
                    },
                ]
            },
            usuario: {
                email: email,
                username: username,
                password: password
            }
        }
        if (telefone2.length != 0) {
            dados.pessoa.telefones.push({
                numero: telefone2,
                is_contato_emergencia: false
            })
        }
        console.log(dados);
        const sucesso = await FuncionarioService.cadastrar(dados);
        if (sucesso) {
            router.push('/funcionarios');
        } else {
            alert('Ocorreu um erro ao cadastrar o funcionário.');
        }
    }

    return (
        <main className={ style.container }>
            <form className={ style.formulario } onSubmit={ cadastrarFuncionario }>
                <Cabecalho />
                <TextInput 
                    label={'Nome'} 
                    name={'nome'} 
                    placeholder={'Nome do funcionário'}
                    value={ nome }
                    onChange={ (event) => setNome(event.target.value) }
                />
                <fieldset>
                    <legend>Endereço</legend>
                    <TextInput 
                        label={'Cidade'} 
                        name={'cidade'} 
                        placeholder={'Nome da cidade'}
                        value={ cidade }
                        onChange={ (event) => setCidade(event.target.value) }
                    />
                    <TextInput 
                        label={'Bairro'} 
                        name={'bairro'} 
                        placeholder={'Nome do bairro'}
                        value={ bairro }
                        onChange={ (event) => setBairro(event.target.value) }
                    />
                    <TextInput 
                        label={'Rua'} 
                        name={'rua'} 
                        placeholder={'Nome da rua'}
                        value={ rua }
                        onChange={ (event) => setRua(event.target.value) }
                    />
                    <TextInput 
                        label={'Número'} 
                        name={'numero'} 
                        placeholder={'Nº da residência'}
                        value={ numero }
                        onChange={ (event) => setNumero(event.target.value) }
                    /> 
                </fieldset>
                <fieldset>
                    <legend>Contato</legend>
                    <TextInput 
                        label={'Telefone principal'} 
                        name={'telefone-principal'} 
                        placeholder={'Nº de telefone (apenas números)'}
                        value={ telefone1 }
                        onChange={ (event) => setTelefone1(event.target.value) }
                    />
                    <TextInput 
                        label={'Telefone adicional'} 
                        name={'telefone-adicional'} 
                        placeholder={'Nº de telefone (apenas números)'}
                        value={ telefone2 }
                        onChange={ (event) => setTelefone2(event.target.value) }
                    /> 
                </fieldset>
                <fieldset>
                    <legend>Cadastro no Sistema</legend>
                    <TextInput 
                        label={'E-mail'} 
                        name={'email'} 
                        placeholder={'Digite um e-mail válido'}
                        value={ email }
                        onChange={ (event) => setEmail(event.target.value) }
                    /> 
                    <TextInput 
                        label={'Usuário'} 
                        name={'username'}
                        placeholder={'Digite o nome de usuário'}
                        value={ username }
                        onChange={ (event) => setUsername(event.target.value) }
                    />
                    <TextInput 
                        label={'Senha'} 
                        name={'password'} 
                        placeholder={'Digite uma senha (até 8 caracteres)'}
                        value={ password }
                        onChange={ (event) => setPassword(event.target.value) }
                        maxLength={ 8 }
                        isPassword
                    /> 
                </fieldset>
                <div className={ style.formulario__botaoContainer }>
                    <button type='submit'>Cadastrar Novo Funcionário</button>
                </div>
            </form>
        </main>
    )
}

export default FuncionarioFormularioScreen;