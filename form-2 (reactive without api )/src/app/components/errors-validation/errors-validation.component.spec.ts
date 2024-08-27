import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsValidationComponent } from './errors-validation.component';

describe('ErrorsValidationComponent', () => {
  let component: ErrorsValidationComponent;
  let fixture: ComponentFixture<ErrorsValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorsValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorsValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
