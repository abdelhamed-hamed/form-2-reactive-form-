import { NgClass, NgIf, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { AllUserDate } from '../../shared/interfaces/all-user-date';
import { UserDateService } from '../../shared/services/date/user-date.service';
import { AuthanticationPageService } from '../../shared/services/auth-login-sigup/authantication-page.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    TitleCasePipe,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgClass,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;
  key!: Array<string>;
  userDate!: AllUserDate;
  constructor(
    private tittle: Title,
    private formBuilder: FormBuilder,
    private storeService: UserDateService,
    private welcome: AuthanticationPageService
  ) {
    this.welcome.checkApikey();
  }

  ngOnInit(): void {
    this.tittle.setTitle('Login');
    this.formCheck();
    this.key = [...Object.keys(this.myForm.controls)];
  }

  formCheck(): void {
    this.myForm = this.formBuilder.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/),
        ]),
      ],
      password: ['', Validators.required],
    });
  }

  goHome() {
    let incorrectMessage = document.getElementById('incorrect');
    let error = Object.values(this.myForm.controls).every(
      (el) => el.errors == null
    );
    if (error) {
      let id = Date.now();
      this.userDate = {
        name: 'abdelhamed hamed',
        email: this.myForm.controls['email'].value,
        coutry: 'egypt',
      };
      setTimeout(() => {
        this.storeService.storeDate(`${id}`, this.userDate);
        incorrectMessage?.classList.add('d-none');
      }, 2000);
    } else {
      incorrectMessage?.classList.remove('d-none');
    }
  }
}
