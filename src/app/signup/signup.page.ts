import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EsportService } from '../esport.service'; // Import your service

@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  fullname: string = ''; // Ganti 'name' dengan 'fullname'
  username: string = '';
  password: string = '';
  repeatPassword: string = '';
  agree: boolean = false;
  usernameExists: boolean = false;
  passwordMismatch: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router, private esportService: EsportService) {}

  isFormValid() {
    this.passwordMismatch = this.password !== this.repeatPassword;

    return (
      this.fullname && // Ubah 'name' menjadi 'fullname'
      this.username &&
      this.password &&
      this.repeatPassword &&
      // this.agree &&
      !this.usernameExists &&
      !this.passwordMismatch
    );
  }

  checkAgreement() {
    console.log('Agree:', this.agree); // Log the value of agree
  }

  onSubmit() {  
    if (this.isFormValid()) {  
      const newUser = {  
        username: this.username,  
        password: this.password,  
        fullname: this.fullname,  
      };  
 
      console.log('Sending data to signup API:', newUser); // Log the user data  
 
      this.esportService  
        .signup(newUser.username, newUser.password, newUser.fullname)  
        .subscribe(  
          (response: any) => {  
            console.log('API Response:', response);  
            if (response.result === 'OK') {  
              this.router.navigate(['/login']);  
            } else {  
              this.errorMessage = response.message;  
            }  
          },  
          (error) => {  
            console.error('Signup Error:', error);  
            this.errorMessage = 'An error occurred during sign-up.';  
          }  
        );  
    } else {  
      console.log('Form is not valid'); // Log if the form is not valid  
    }  
  }  

}
