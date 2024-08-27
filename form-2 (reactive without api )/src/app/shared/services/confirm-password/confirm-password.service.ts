import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ConfirmPasswordService {
  constructor() {}
  static mustMatch(password: string, confirmPass: string): ValidatorFn {
    // فايدتها عشان امسك ال قيم بتاعت كل حقل ادخال
    return (control: AbstractControl): ValidationErrors | null => {
      // كدا انا مسكت القيمة وخزنتها في ال باسوورد
      const pass = control.get(password);
      const passConfirm = control.get(confirmPass);

      if (!pass || !passConfirm) {
        passConfirm?.setErrors(null);
        return null;
      }

      if (pass.value != passConfirm.value) {
        passConfirm.setErrors({ mismatchPassword: true });
      } else {
        passConfirm.setErrors(null);
      }

      if (pass.errors && passConfirm.hasError('mismatchPassword')) {
        passConfirm.setErrors(null);
      }

      return pass.value !== passConfirm.value
        ? { mismatchPassword: true }
        : null;
    };
  }
}
