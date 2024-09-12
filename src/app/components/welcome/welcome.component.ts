import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AllUserDate } from '../../shared/interfaces/all-user-date';
import { UserDateService } from '../../shared/services/date/user-date.service';
import { Router, RouterLink } from '@angular/router';
import { UserPagesService } from '../../shared/services/auth-user-pages/user-pages.service';
import { AuthanticationPageService } from '../../shared/services/auth-login-sigup/authantication-page.service';
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [TitleCasePipe, RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent implements OnInit {
  showDate!: AllUserDate;
  constructor(
    private route: Router,
    private personDate: UserDateService,
    private returnLogin: UserPagesService,
    private welcome: AuthanticationPageService
  ) {
    // User Pages Test
    this.welcome.checkApikey();
    this.returnLogin.checkApikeyUserPages();
  }
  ngOnInit(): void {
    this.showDate = this.personDate.userDate;
  }
  logout() {
    this.route.navigate(['/login']);
    this.personDate.dleleteDate();
  }
}
