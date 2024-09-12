import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class AddIsValidService {
  constructor() {}
  checkInvalidInput(input: HTMLInputElement, control: AbstractControl) {
    if (
      (control.hasError('required') && control.touched) ||
      control.hasError('pattern')
    ) {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
    }
    if (control.errors == null) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
    }
    if (control.value == '') {
      input.classList.add('is-invalid');
      input.classList.remove('is-valid');
    }
  }
}
