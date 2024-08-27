import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserPagesService {
  checkApikey() {
    throw new Error('Method not implemented.');
  }
  constructor(private route: Router) {}
  checkApikeyUserPages() {
    if (
      !localStorage.getItem('apiKey') &&
      localStorage.getItem('apiKey') == null
    ) {
      this.route.navigate(['/login']);
    }
  }
}
