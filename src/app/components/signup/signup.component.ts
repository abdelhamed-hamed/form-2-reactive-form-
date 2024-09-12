import { NgClass, NgIf, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Title } from '@angular/platform-browser';
import {
  IConfig,
  ICountry,
  NgxCountriesDropdownModule,
} from 'ngx-countries-dropdown';
import { FormGroupService } from '../../shared/services/form-group/form-group.service';
import { ErrorsValidationComponent } from '../errors-validation/errors-validation.component';
import { AddIsValidService } from '../../shared/services/add-isvalid/add-is-valid.service';
import { AllUserDate } from '../../shared/interfaces/all-user-date';
import { AuthanticationPageService } from '../../shared/services/auth-login-sigup/authantication-page.service';
import { UserDateService } from '../../shared/services/date/user-date.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    NgxCountriesDropdownModule,
    ReactiveFormsModule,
    TitleCasePipe,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgIf,
    NgClass,
    ErrorsValidationComponent,
    RouterLink,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  [x: string]: any;
  myForm!: FormGroup;
  isValid!: any;
  country: any;
  constructor(
    private tittle: Title,
    private form: FormGroupService,
    private addIsValidService: AddIsValidService,
    private welcome: AuthanticationPageService,
    private date: UserDateService
  ) {
    this.welcome.checkApikey();
  }

  ngOnInit(): void {
    this.tittle.setTitle('Signup');
    this.myForm = this.form.myForm;
    this.isValid = this.addIsValidService.checkInvalidInput;
  }

  // Config To Show Region
  config: IConfig = {
    hideDialCode: true,
    hideCode: true,
  };

  onCountryChange(country: ICountry) {
    this.country = country.name;
  }

  // Welcome Page
  goToHome(email: string, userName: string) {
    let incorrectMessage = document.getElementById('incorrect');
    let x = Object.values(this.myForm.controls).every(
      (el) => el.errors == null
    );
    if (x) {
      let id: number = Date.now();
      let userDate: AllUserDate;
      userDate = {
        email: email,
        name: userName,
        coutry: this.country,
      };

      setTimeout(() => {
        this.date.storeDate(`${id}`, userDate);
        incorrectMessage?.classList.add('d-none');
      }, 2000);
    } else {
      incorrectMessage?.classList.remove('d-none');
    }
  }
}
