import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioFormularioComponent } from './funcionario-formulario.component';

describe('FuncionarioFormularioComponent', () => {
  let component: FuncionarioFormularioComponent;
  let fixture: ComponentFixture<FuncionarioFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionarioFormularioComponent]
    });
    fixture = TestBed.createComponent(FuncionarioFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
