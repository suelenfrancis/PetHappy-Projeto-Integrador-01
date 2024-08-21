import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioCardComponent } from './funcionario-card.component';

describe('FuncionarioCardComponent', () => {
  let component: FuncionarioCardComponent;
  let fixture: ComponentFixture<FuncionarioCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionarioCardComponent]
    });
    fixture = TestBed.createComponent(FuncionarioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
