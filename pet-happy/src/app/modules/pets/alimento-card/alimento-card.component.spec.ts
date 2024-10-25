import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentoCardComponent } from './alimento-card.component';

describe('AlimentoCardComponent', () => {
  let component: AlimentoCardComponent;
  let fixture: ComponentFixture<AlimentoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlimentoCardComponent]
    });
    fixture = TestBed.createComponent(AlimentoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
