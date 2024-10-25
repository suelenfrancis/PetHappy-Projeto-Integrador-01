import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiAlimentosComponent } from './multi-alimentos.component';

describe('MultiAlimentosComponent', () => {
  let component: MultiAlimentosComponent;
  let fixture: ComponentFixture<MultiAlimentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiAlimentosComponent]
    });
    fixture = TestBed.createComponent(MultiAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
