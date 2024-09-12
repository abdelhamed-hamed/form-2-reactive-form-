import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordService } from '../confirm-password/confirm-password.service';
@Injectable({
  providedIn: 'root',
})
export class FormGroupService {
  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group(
      {
        email: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/),
          ]),
        ],
        password: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            ),
            Validators.maxLength(20),
          ]),
        ],
        confirmPassword: ['', Validators.required],
        firstName: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern(/\b([a-zA-ZÀ-ÿ]{2,}[-,a-z. ']*)/),
          ]),
        ],
        lastName: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern(/\b([a-zA-ZÀ-ÿ]{2,}[-,a-z. ']*)/),
          ]),
        ],
      },
      {
        validator: ConfirmPasswordService.mustMatch(
          'password',
          'confirmPassword'
        ),
      }
    );
  }
  myForm!: FormGroup;
}
