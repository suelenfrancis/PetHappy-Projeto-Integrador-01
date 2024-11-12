import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoFormComponent } from './servico-form.component';

describe('ServicoFormComponent', () => {
  let component: ServicoFormComponent;
  let fixture: ComponentFixture<ServicoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicoFormComponent]
    });
    fixture = TestBed.createComponent(ServicoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
