import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadosEspeciaisFormularioComponent } from './cuidados-especiais-formulario.component';

describe('CuidadosEspeciaisFormularioComponent', () => {
  let component: CuidadosEspeciaisFormularioComponent;
  let fixture: ComponentFixture<CuidadosEspeciaisFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuidadosEspeciaisFormularioComponent]
    });
    fixture = TestBed.createComponent(CuidadosEspeciaisFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
