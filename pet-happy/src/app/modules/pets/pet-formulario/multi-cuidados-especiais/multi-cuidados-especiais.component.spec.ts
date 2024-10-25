import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCuidadosEspeciaisComponent } from './multi-cuidados-especiais.component';

describe('MultiCuidadosEspeciaisComponent', () => {
  let component: MultiCuidadosEspeciaisComponent;
  let fixture: ComponentFixture<MultiCuidadosEspeciaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiCuidadosEspeciaisComponent]
    });
    fixture = TestBed.createComponent(MultiCuidadosEspeciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
