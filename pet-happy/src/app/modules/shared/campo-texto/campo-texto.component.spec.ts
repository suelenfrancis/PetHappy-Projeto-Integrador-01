import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoTextoComponent } from './campo-texto.component';

describe('CampoTextoComponent', () => {
  let component: CampoTextoComponent;
  let fixture: ComponentFixture<CampoTextoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampoTextoComponent]
    });
    fixture = TestBed.createComponent(CampoTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
