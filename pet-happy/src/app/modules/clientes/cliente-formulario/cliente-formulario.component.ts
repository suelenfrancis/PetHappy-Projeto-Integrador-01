import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ICliente from 'src/app/interfaces/ICliente';
import IClienteForm from 'src/app/interfaces/IClienteForm';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.scss']
})
export class ClienteFormularioComponent {

  public formularioCliente: FormGroup;
  private cliente: ICliente | null = null;

  constructor(
    private clienteService: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.formularioCliente = new FormGroup({
      nome: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required),
      bairro: new FormControl('', Validators.required),
      rua: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      complemento: new FormControl('', Validators.required),
      telefonePrincipal: new FormControl('', Validators.required),
      telefoneAlternativo: new FormControl('')
    });
  }

  ngOnInit(): void {
    const clienteId = this.activatedRoute.snapshot.paramMap.get('id');
    if(clienteId) {
      this.clienteService.obter(Number(clienteId)).subscribe({
        next: (cliente) => this.carregarFormularioParaEdicao(cliente),
        error: erro => alert('Ocorreu um erro ao buscar os dados do cliente: ' + erro)
      });
    }
  }

  private carregarFormularioParaEdicao(dadosCliente: ICliente) {
    this.cliente = dadosCliente;
    this.formularioCliente.patchValue({
      nome: dadosCliente.pessoa.nome,
      cidade: dadosCliente.pessoa.endereco.cidade,
      bairro: dadosCliente.pessoa.endereco.bairro,
      rua: dadosCliente.pessoa.endereco.rua,
      numero: dadosCliente.pessoa.endereco.numero,
      complemento: dadosCliente.pessoa.endereco.complemento,
      telefonePrincipal: dadosCliente.pessoa.telefones[0].numero,
      telefoneAlternativo: dadosCliente.pessoa.telefones.length > 1 
        ? dadosCliente.pessoa.telefones[1].numero 
        : '',
    });
  }

  public obterControle(formControlName: string): FormControl {
    return this.formularioCliente.get(formControlName) as FormControl;
  }

  public isCadastro() {
    return this.cliente == null;
  }

  public exibirTitulo() {
    return this.isCadastro() 
      ? 'Cadastrar Cliente' 
      : 'Atualizar Cliente';
  }

  public exibirTextoBotao() {
    return this.isCadastro() 
      ? 'Cadastrar Novo Cliente' 
      : 'Atualizar Dados do Cliente';
  }

  public desabilitaBotao() {
    return !this.formularioCliente.valid;
  }

  private cadastrar(): void {
    if(this.formularioCliente.valid) {
      console.log(this.formularioCliente.value); 
      const dadosFormulario: IClienteForm = this.formularioCliente.value;
      const funcionarioCadastro: ICliente = {
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
        }
      }
      if(dadosFormulario.telefoneAlternativo) {
        funcionarioCadastro.pessoa.telefones.push({
          numero: dadosFormulario.telefoneAlternativo,
          is_contato_emergencia: false
        });
      }
      this.clienteService.cadastrar(funcionarioCadastro).subscribe({
        next: (response) => {
          alert('Cliente cadastrado com sucesso!')
          this.router.navigate(['/clientes']);
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
    if(this.formularioCliente.valid) {
      const dadosFormulario: IClienteForm = this.formularioCliente.value;
      const funcionarioAtualizar: ICliente = {
        id: this.cliente?.id,
        pessoa: {
          id: this.cliente?.pessoa.id,
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
              id: this.cliente?.pessoa.telefones[0].id,
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
      this.clienteService.atualizar(funcionarioAtualizar).subscribe({
        next: (response) => {
          alert('Cliente atualizado com sucesso!');
          this.router.navigate(['/clientes']);
        },
        error: (response) => {
          if(response.status === 500) {
            alert('Ocorreu um erro inesperado.');
          }
        }
      })
    }
  }

  public cadastrarOuAtualizarCliente() {
    if(this.cliente == null) {
      this.cadastrar();
    } else {
      this.atualizar();
    }
  }
}
