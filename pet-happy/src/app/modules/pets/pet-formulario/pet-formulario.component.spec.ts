import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetFormularioComponent } from './pet-formulario.component';

describe('PetFormularioComponent', () => {
  let component: PetFormularioComponent;
  let fixture: ComponentFixture<PetFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetFormularioComponent]
    });
    fixture = TestBed.createComponent(PetFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
