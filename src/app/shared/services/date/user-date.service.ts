import { Injectable } from '@angular/core';
import { AllUserDate } from '../../interfaces/all-user-date';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserDateService {
  userDate!: AllUserDate;
  constructor(private route: Router) {
    if (localStorage.getItem('userDate') != null) {
      this.userDate = JSON.parse(localStorage.getItem('userDate')!);
    }
  }

  storeDate(id: string, userDate: AllUserDate) {
    localStorage.setItem('apiKey', id);
    localStorage.setItem('userDate', JSON.stringify(userDate));
    this.userDate = JSON.parse(localStorage.getItem('userDate')!);
    this.route.navigate(['/home']);
  }

  dleleteDate() {
    localStorage.clear();
  }
}
