import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

    hide = true;
    email = new FormControl('', [Validators.required, Validators.email]);

    myUrl:string = "https://deploystudypalbackend-development.up.railway.app/auth/signup"

    constructor(private http:HttpClient, private router:Router){

    }
  
    getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }
  
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }

    onFormSubmission(form:any){
      console.log(form)

      this.http.post<any>(this.myUrl, form).subscribe((res)=>{
        console.log(res)
        // localStorage.setItem("tokenSignup",res.access_token)
        this.router.navigate(["/login"])
     
      })
    }
}
