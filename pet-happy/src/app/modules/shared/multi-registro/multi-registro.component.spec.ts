import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiRegistroComponent } from './multi-registro.component';

describe('MultiRegistroComponent', () => {
  let component: MultiRegistroComponent;
  let fixture: ComponentFixture<MultiRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiRegistroComponent]
    });
    fixture = TestBed.createComponent(MultiRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
