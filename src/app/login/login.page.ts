import { Component, OnInit } from '@angular/core';
import { EsportService } from '../esport.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service'; // Import the UserService

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = '';
  password = '';
  fullname: string = '';

  constructor(
    private esportservice: EsportService,
    private router: Router,
    private userService: UserService // Inject the UserService
  ) {}

  ngOnInit() {}

  login() {
    this.esportservice
      .login(this.username, this.password)
      .subscribe((response: any) => {
        if (response.result === 'success') {
          alert('Login successful');
          this.fullname = response.fullname;
          const idmember = response.idmember;
          const user = {
            username: this.username,
            fullname: this.fullname,
            idmember: idmember,
          };
          localStorage.setItem('currentUser', JSON.stringify([user]));

          // Set the user in the UserService
          this.userService.setUser(user);

          this.router.navigate(['/wwp']); // Navigate to the home page
        } else {
          alert(response.message);
        }
      });
  }
}
