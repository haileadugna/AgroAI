import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  hide = true;
  signupForm: FormGroup;
  myUrl: string = "http://localhost:3000/auth";

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      profilepic: ['haklejk'],
    });
  }

  getErrorMessage() {
    const emailControl = this.signupForm.get('email');
    if (emailControl?.hasError('required')) {
      return 'You must enter a value';
    }

    return emailControl?.hasError('email') ? 'Not a valid email' : '';
  }

  onFormSubmission() {
    if (this.signupForm.invalid) {
      // Form is invalid, handle accordingly (display errors, prevent submission, etc.)
      return;
    }

    const formValue = this.signupForm.value;
    console.log(formValue);

    this.http.post<any>(`${this.myUrl}/signup`, formValue).subscribe((res) => {
      console.log(res);
      // localStorage.setItem("tokenSignup", res.access_token);
      this.router.navigate(['/login']);
    });
  }
}
