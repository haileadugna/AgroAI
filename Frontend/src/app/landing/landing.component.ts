import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  constructor(private router: Router) { }

  redirectToLoginPage() {
    this.router.navigate(['/login']);
  }

  redirectToSignUpPage() {
    this.router.navigate(['/signup']);
  }

  redirectToAboutUsPage() {
    this.router.navigate(['/about']);
  }

}
