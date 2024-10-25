import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadoEspecialCardComponent } from './cuidado-especial-card.component';

describe('CuidadoEspecialCardComponent', () => {
  let component: CuidadoEspecialCardComponent;
  let fixture: ComponentFixture<CuidadoEspecialCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuidadoEspecialCardComponent]
    });
    fixture = TestBed.createComponent(CuidadoEspecialCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
