import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentosFormularioComponent } from './alimentos-formulario.component';

describe('AlimentosFormularioComponent', () => {
  let component: AlimentosFormularioComponent;
  let fixture: ComponentFixture<AlimentosFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlimentosFormularioComponent]
    });
    fixture = TestBed.createComponent(AlimentosFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
