import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EsportService } from '../esport.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  name: string = '';
  username: string = '';
  password: string = '';
  repeatPassword: string = '';
  agree: boolean = false;
  usernameExists: boolean = false;
  passwordMismatch: boolean = false;
  errorMessage: string = '';

  constructor(
    private router: Router,
    private esportService: EsportService,
    private navCtrl: NavController
  ) {}

  isFormValid() {
    this.passwordMismatch = this.password !== this.repeatPassword;

    return (
      this.name &&
      this.username &&
      this.password &&
      this.repeatPassword &&
      !this.usernameExists &&
      !this.passwordMismatch &&
      this.agree
    );
  }

  checkAgreement() {
    console.log('Agree:', this.agree);
  }

  onSubmit() {
    if (this.isFormValid()) {
      const newUser = {
        username: this.username,
        password: this.password,
        name: this.name,
      };

      console.log('Sending data to signup API:', newUser);

      this.esportService
        .signup(newUser.username, newUser.password, newUser.name)
        .subscribe(
          (response: any) => {
            console.log('API Response:', response);
            if (response.result === 'OK') {
              this.router.navigate(['/login']);
              // this.navCtrl.navigateRoot('/login');
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
      console.log('Form is not valid');
    }
  }
}
