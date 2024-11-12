import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsInputComponent } from './pets-input.component';

describe('PetsInputComponent', () => {
  let component: PetsInputComponent;
  let fixture: ComponentFixture<PetsInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetsInputComponent]
    });
    fixture = TestBed.createComponent(PetsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
