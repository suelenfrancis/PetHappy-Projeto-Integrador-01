import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { catchError, debounceTime, map, Observable, switchMap, tap, throwError } from 'rxjs';
import IPet from 'src/app/interfaces/IPet';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-pets-input',
  templateUrl: './pets-input.component.html',
  styleUrls: ['./pets-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PetsInputComponent),
      multi: true,
    },
  ]
})
export class PetsInputComponent implements ControlValueAccessor {
  @Input() public label: string = '';
  @Input() public placeholder: string = '';
  @Input() public control: FormControl = new FormControl();
  public buscaControl: FormControl =  new FormControl('');
  public filtrados: Observable<IPet[]> = new Observable();
  private readonly INTERVALO: number = 500;
  public selecionados: IPet[] = [];
  public disabled: boolean = false;

  constructor(private petService: PetsService) {}

  ngOnInit(): void {
    this.filtrados = this.buscaControl.valueChanges.pipe(
      debounceTime(this.INTERVALO),
      tap(termoBusca => console.log(`Buscando por ${termoBusca} ...`)),
      switchMap(termoBusca => this.petService.listar(termoBusca, 1)),
      map(response => response.results),
      catchError(erro => {
        console.log(erro);
        return throwError(() => new Error('Ocorreu um erro durante a busca.'))
      })
    );
  }

  exibirItens(item: IPet): string {
    return item && item.nome ? item.nome : '';
  }

  desativarBotao() {
    return typeof this.buscaControl.value === 'string' 
      || typeof this.buscaControl.value === null
      || typeof this.buscaControl.value === undefined;
  }

  adicionarPet() {
    this.selecionados.push(this.buscaControl.value);
    this.onChange(this.selecionados);
    this.onTouch();
  }

  onChange = (value: IPet[]) => {}

  onTouch = () => {}

  writeValue(value: IPet[]): void {
    this.selecionados = value;
  }
  
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
