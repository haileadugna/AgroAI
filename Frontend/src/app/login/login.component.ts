import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide = true;
  private myUrl = "https://localhost:3000/api/v1/auth/login"
  constructor(private http:HttpClient, private router:Router){}


     onFormSubmission(form: any){
      // return this.sendAuth(form)
      console.log(form)
      // this.sendAuth(form)
      this.http
      .post<any>(this.myUrl, form).subscribe(
        (res)=>{
        console.log(res)
        localStorage.setItem("token",res.access_token)
        this.router.navigate(["/Posts"])

        
      },

      (error) =>{
        console.log(error)
        localStorage.setItem("token","")
      }
      )
      

    
    }
}
