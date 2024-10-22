import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import IPet from 'src/app/interfaces/IPet';
import { CategoriaService } from 'src/app/services/categoria.service';
import { PorteService } from 'src/app/services/porte.service';
import IPetForm from 'src/app/interfaces/IPetForm';
import { PetsService } from 'src/app/services/pets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-formulario',
  templateUrl: './pet-formulario.component.html',
  styleUrls: ['./pet-formulario.component.scss']
})
export class PetFormularioComponent implements OnInit {
  
  public formularioPet: FormGroup;
  public pet: IPet | null = null;
  public opcoesSexo = [
    {
      chave: 'Fêmea',
      valor: 'F'
    },
    {
      chave: 'Macho',
      valor: 'M'
    },
    {
      chave: 'Indeterminado',
      valor: 'I'
    }
  ];
  public opcoesCategoria: any[] = [];
  public opcoesPorte: any[] = [];

  constructor(
    private petService: PetsService,
    private categoriaService: CategoriaService, 
    private porteService: PorteService,
    private router: Router,
  ) {
    this.formularioPet = new FormGroup({
      nome: new FormControl('', Validators.required),
      data_nascimento: new FormControl(null, Validators.required),
      sexo: new FormControl(null, Validators.required),
      raca: new FormControl(''),
      medicamentos: new FormControl([]),
      alimentos: new FormControl([]),
      cuidados_especiais: new FormControl([]),
      tutor: new FormControl(null, Validators.required),
      categoria_id: new FormControl(null, Validators.required),
      porte_id: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    this.categoriaService.obterTodas().subscribe(
      response => response.results.forEach(
        categoria => this.opcoesCategoria.push(
          {
            chave: categoria.nome,
            valor: categoria.id
          }
        )
      )
    );
    this.porteService.obterTodos().subscribe(
      response => response.results.forEach(
        porte => this.opcoesPorte.push(
          {
            chave: porte.descricao,
            valor: porte.id
          }
        )
      )
    );
  }

  public obterControle(formControlName: string): FormControl {
    return this.formularioPet.get(formControlName) as FormControl;
  }

  public isCadastro() {
    return this.pet == null;
  }

  public exibirTitulo() {
    return this.isCadastro() 
      ? 'Cadastrar Pet' 
      : 'Atualizar Pet';
  }

  public exibirTextoBotao() {
    return this.isCadastro() 
      ? 'Cadastrar Novo Pet' 
      : 'Atualizar Dados do Pet';
  }

  public desabilitaBotao() {
    return !this.formularioPet.valid;
  }

  private cadastrar() {
    if(this.formularioPet.valid) {
      console.log(this.formularioPet.value);
      const dadosFormulario: IPetForm = this.formularioPet.value;
      const petCadastro: IPet = {
        tutor_id: dadosFormulario.tutor.id,
        nome: dadosFormulario.nome,
        sexo: dadosFormulario.sexo,
        data_nascimento: dadosFormulario.data_nascimento,
        categoria_id: dadosFormulario.categoria_id,
        porte_id: dadosFormulario.porte_id,
        raca: dadosFormulario.raca,
      }
      this.petService.cadastrar(petCadastro).subscribe({
        next: (response) => {
          alert('Pet cadastrado com sucesso!')
          this.router.navigate(['/pets']);
        },
        error: (response) => {
          if(response.status === 500) {
            alert('Ocorreu um erro inesperado.');
          }
        }
      });
    }
  }

  private atualizar() {}

  public cadastrarOuAtualizarPet() {
    if(this.pet == null) {
      this.cadastrar();
    } else {
      this.atualizar();
    }
  }
}
