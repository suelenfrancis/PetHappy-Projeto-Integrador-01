import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiMedicamentosComponent } from './multi-medicamentos.component';

describe('MultiMedicamentosComponent', () => {
  let component: MultiMedicamentosComponent;
  let fixture: ComponentFixture<MultiMedicamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiMedicamentosComponent]
    });
    fixture = TestBed.createComponent(MultiMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
