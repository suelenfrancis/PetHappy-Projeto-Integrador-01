import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentosFormularioComponent } from './medicamentos-formulario.component';

describe('MedicamentosFormularioComponent', () => {
  let component: MedicamentosFormularioComponent;
  let fixture: ComponentFixture<MedicamentosFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicamentosFormularioComponent]
    });
    fixture = TestBed.createComponent(MedicamentosFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
