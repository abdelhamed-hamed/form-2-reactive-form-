import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserDateService } from '../date/user-date.service';

@Injectable({
  providedIn: 'root',
})
export class AuthanticationPageService {
  userName!: string;
  constructor(private route: Router, private personDate: UserDateService) {}
  checkApikey() {
    if (localStorage.getItem('apiKey')) {
      this.route.navigate(['/home'], {
        queryParams: {
          name: this.personDate.userDate.name,
        },
      });
    }
  }
}
