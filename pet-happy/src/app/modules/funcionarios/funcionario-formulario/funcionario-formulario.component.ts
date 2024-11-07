import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import IFuncionario from 'src/app/interfaces/IFuncionario';
import IFuncionarioForm from 'src/app/interfaces/IFuncionarioForm';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-funcionario-formulario',
  templateUrl: './funcionario-formulario.component.html',
  styleUrls: ['./funcionario-formulario.component.scss']
})
export class FuncionarioFormularioComponent implements OnInit {

  public formularioFuncionario: FormGroup;
  private funcionario: IFuncionario | null = null;

  constructor(
    private funcionariosService: FuncionariosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.formularioFuncionario = new FormGroup({
      nome: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required),
      bairro: new FormControl('', Validators.required),
      rua: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      complemento: new FormControl('', Validators.required),
      telefonePrincipal: new FormControl('', Validators.required),
      telefoneAlternativo: new FormControl(''),
      email: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    const funcionarioId = this.activatedRoute.snapshot.paramMap.get('id');
    if(funcionarioId) {
      this.funcionariosService.obter(Number(funcionarioId)).subscribe({
        next: (funcionario) => this.carregarFormularioParaEdicao(funcionario),
        error: erro => alert('Ocorreu um erro ao buscar os dados do funcionário: ' + erro)
      });
    }
  }

  private carregarFormularioParaEdicao(dadosFuncionario: IFuncionario) {
    this.funcionario = dadosFuncionario;
    this.formularioFuncionario.patchValue({
      nome: dadosFuncionario.pessoa.nome,
      cidade: dadosFuncionario.pessoa.endereco.cidade,
      bairro: dadosFuncionario.pessoa.endereco.bairro,
      rua: dadosFuncionario.pessoa.endereco.rua,
      numero: dadosFuncionario.pessoa.endereco.numero,
      complemento: dadosFuncionario.pessoa.endereco.complemento,
      telefonePrincipal: dadosFuncionario.pessoa.telefones[0].numero,
      telefoneAlternativo: dadosFuncionario.pessoa.telefones.length > 1 
        ? dadosFuncionario.pessoa.telefones[1].numero 
        : '',
    });
    this.formularioFuncionario.get('email')?.disable();
    this.formularioFuncionario.get('username')?.disable();
    this.formularioFuncionario.get('password')?.disable();
  }

  public obterControle(formControlName: string): FormControl {
    return this.formularioFuncionario.get(formControlName) as FormControl;
  }

  public isCadastro() {
    return this.funcionario == null;
  }

  public exibirTitulo() {
    return this.isCadastro() 
      ? 'Cadastrar Funcionário' 
      : 'Atualizar Funcionário';
  }

  public exibirTextoBotao() {
    return this.isCadastro() 
      ? 'Cadastrar Novo Funcionário' 
      : 'Atualizar Dados do Funcionário';
  }

  public desabilitaBotao() {
    return !this.formularioFuncionario.valid;
  }

  private cadastrar(): void {
    if(this.formularioFuncionario.valid) {
      console.log(this.formularioFuncionario.value); 
      const dadosFormulario: IFuncionarioForm = this.formularioFuncionario.value;
      const funcionarioCadastro: IFuncionario = {
        pessoa: {
          nome: dadosFormulario.nome,
          endereco: {
            cidade: dadosFormulario.cidade,
            bairro: dadosFormulario.bairro,
            rua: dadosFormulario.rua,
            numero: dadosFormulario.numero,
            complemento: dadosFormulario.complemento
          },
          telefones: [
            {
              numero: dadosFormulario.telefonePrincipal,
              is_contato_emergencia: true
            },
          ]
        },
        usuario: {
          username: dadosFormulario.username,
          password: dadosFormulario.password,
          email: dadosFormulario.email
        }
      }
      if(dadosFormulario.telefoneAlternativo) {
        funcionarioCadastro.pessoa.telefones.push({
          numero: dadosFormulario.telefoneAlternativo,
          is_contato_emergencia: false
        });
      }
      this.funcionariosService.cadastrar(funcionarioCadastro).subscribe({
        next: (response) => {
          alert('Funcionário cadastrado com sucesso!')
          this.router.navigate(['/funcionarios']);
        },
        error: (response) => {
          if(response.status === 500) {
            alert('Ocorreu um erro inesperado.');
          }
        }
      })
    }
  }

  private atualizar(): void {
    if(this.formularioFuncionario.valid) {
      const dadosFormulario: IFuncionarioForm = this.formularioFuncionario.value;
      const funcionarioAtualizar: IFuncionario = {
        id: this.funcionario?.id,
        pessoa: {
          id: this.funcionario?.pessoa.id,
          nome: dadosFormulario.nome,
          endereco: {
            cidade: dadosFormulario.cidade,
            bairro: dadosFormulario.bairro,
            rua: dadosFormulario.rua,
            numero: dadosFormulario.numero,
            complemento: dadosFormulario.complemento
          },
          telefones: [
            {
              id: this.funcionario?.pessoa.telefones[0].id,
              numero: dadosFormulario.telefonePrincipal,
              is_contato_emergencia: true
            },
          ]
        }
      }
      if(dadosFormulario.telefoneAlternativo) {
        funcionarioAtualizar.pessoa.telefones.push({
          numero: dadosFormulario.telefoneAlternativo,
          is_contato_emergencia: false
        });
      }
      this.funcionariosService.atualizar(funcionarioAtualizar).subscribe({
        next: (response) => {
          alert('Funcionário atualizado com sucesso!');
          this.router.navigate(['/funcionarios']);
        },
        error: (response) => {
          if(response.status === 500) {
            alert('Ocorreu um erro inesperado.');
          }
        }
      })
    }
  }

  public cadastrarOuAtualizarFuncionario() {
    if(this.funcionario == null) {
      this.cadastrar();
    } else {
      this.atualizar();
    }
  }

}
