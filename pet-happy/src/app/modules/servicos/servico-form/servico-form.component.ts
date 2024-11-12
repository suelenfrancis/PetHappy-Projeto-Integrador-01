import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import IServico from 'src/app/interfaces/IServico';
import IServicoForm from 'src/app/interfaces/IServicoForm';
import { ServicoService } from 'src/app/services/servico.service';

@Component({
  selector: 'app-servico-form',
  templateUrl: './servico-form.component.html',
  styleUrls: ['./servico-form.component.scss', '../../../styles/form.scss']
})
export class ServicoFormComponent {
  
  public formularioServico: FormGroup;
  private servico: IServico | null = null;
  public opcoesTipo: any = [
    {
      chave: 'Hospedagem',
      valor: 'H'
    },
    {
      chave: 'Passeio',
      valor: 'P'
    },
    {
      chave: 'Visita',
      valor: 'V'
    },
  ];
  public opcoesStatus: any = [
    {
      chave: 'Agendado',
      valor: 'A'
    },
    {
      chave: 'Em Andamento',
      valor: 'B'
    },
    {
      chave: 'Concluído',
      valor: 'C'
    },
    {
      chave: 'Cancelado',
      valor: 'D'
    },
  ]

  constructor(
    private servicoService: ServicoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.formularioServico = new FormGroup({
      funcionario: new FormControl(null, Validators.required),
      tipo: new FormControl(null, Validators.required),
      status: new FormControl('A', Validators.required),
      data_hora_inicio: new FormControl(null, Validators.required),
      data_hora_fim: new FormControl(null),
      pets: new FormControl([]),
    });
  }

  ngOnInit(): void {
    const servicoId = this.activatedRoute.snapshot.paramMap.get('id');
    if(servicoId) {
      this.servicoService.obter(Number(servicoId)).subscribe({
        next: (servico) => this.carregarFormularioParaEdicao(servico),
        error: erro => alert('Ocorreu um erro ao buscar os dados do serviço: ' + erro)
      });
    }
  }

  private redirecionar() {
    this.router.navigate(['/servicos']);
  }

  private carregarFormularioParaEdicao(dadosServico: IServico) {
    this.servico = dadosServico;
    this.formularioServico.patchValue({
      funcionario: dadosServico.funcionario,
      tipo: dadosServico.tipo,
      status: dadosServico.status,
      data_hora_inicio: dadosServico.data_hora_inicio,
      data_hora_fim: dadosServico.data_hora_fim,
      pets: dadosServico.pets,
    });
  }

  public obterControle(formControlName: string): FormControl {
    return this.formularioServico.get(formControlName) as FormControl;
  }

  public isCadastro() {
    return this.servico == null;
  }

  public exibirTitulo() {
    return this.isCadastro() 
      ? 'Cadastrar Serviço' 
      : 'Atualizar Serviço';
  }

  public exibirTextoBotao() {
    return this.isCadastro() 
      ? 'Cadastrar Novo Serviço' 
      : 'Editar Serviço';
  }

  public desabilitaBotao() {
    return !this.formularioServico.valid;
  }

  private cadastrar(): void {
    if(this.formularioServico.valid) {
      console.log(this.formularioServico.value); 
      const dadosFormulario: IServicoForm = this.formularioServico.value;
      const servicoCadastro: IServico = {
        funcionario_id: dadosFormulario.funcionario.id,
        tipo: dadosFormulario.tipo,
        status: dadosFormulario.status,
        data_hora_inicio: dadosFormulario.data_hora_inicio,
        pets_ids: dadosFormulario.pets?.map(pet => pet.id!)
      }
      if (dadosFormulario.data_hora_fim !== null) {
        servicoCadastro.data_hora_fim = dadosFormulario.data_hora_fim;
      }
      this.servicoService.cadastrar(servicoCadastro).subscribe({
        next: (response) => {
          alert('Serviço cadastrado com sucesso!')
          this.redirecionar();
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
    if(this.formularioServico.valid) {
      const dadosFormulario: IServicoForm = this.formularioServico.value;
      const servicoAtualizar: IServico = {
        funcionario_id: dadosFormulario.funcionario.id,
        tipo: dadosFormulario.tipo,
        status: dadosFormulario.status,
        data_hora_inicio: dadosFormulario.data_hora_inicio,
        data_hora_fim: dadosFormulario.data_hora_fim,
        pets_ids: dadosFormulario.pets?.map(pet => pet.id!)
      }
      this.servicoService.atualizar(servicoAtualizar).subscribe({
        next: (response) => {
          alert('Serviço atualizado com sucesso!');
          this.redirecionar();
        },
        error: (response) => {
          if(response.status === 500) {
            alert('Ocorreu um erro inesperado.');
          }
        }
      })
    }
  }

  public cadastrarOuAtualizar() {
    if(this.servico == null) {
      this.cadastrar();
    } else {
      this.atualizar();
    }
  }
}
