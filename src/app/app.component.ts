import { Component } from '@angular/core';

import { EsportService } from './esport.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  username = '';
  password = '';
  fullname: string; 

  constructor(private esportservice: EsportService) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.username = currentUser[0]?.username || null;
    this.fullname = currentUser[0]?.fullname || null;

    // if (!localStorage.getItem('users')) {
    //   localStorage.setItem('users', JSON.stringify([
    //     { username: 'user1', password: 'pass1' },
    //     { username: 'user2', password: 'pass2' }
    //   ]));
    // }
  }

  login() {
    this.esportservice.login(this.username, this.password).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          alert("success")
          this.fullname = response.fullname
          localStorage.setItem('currentUser', JSON.stringify([
            { username: this.username, fullname: this.fullname }
          ]));
        }
        else {
          alert(response.message)
        }
      });
    // const users = JSON.parse(localStorage.getItem('users') || '[]'); 
    // const user = users.find(
    //   (u: any) => u.username === this.username && u.password === this.password
    // );

    // if (user) {
    //   localStorage.setItem('currentUser', JSON.stringify(user));
    //   this.fullname = user.username; 
    // } else {
    //   alert('Invalid username or password'); 
    // }
  }

  logout() {
    localStorage.removeItem('currentUser'); 
    this.fullname = ''; 
    this.username = ''; 
    this.password = ''; 
  }

  // signup() {
  //   if (!this.username || !this.password) {
  //     alert('Please enter a username and password'); 
  //     return;
  //   }

  //   const users = JSON.parse(localStorage.getItem('users') || '[]');
  //   const existingUser = users.find((u: any) => u.username === this.username);

  //   if (existingUser) {
  //     alert('Username already exists'); 
  //     return;
  //   }

  //   const newUser = { username: this.username, password: this.password };
  //   users.push(newUser);
  //   localStorage.setItem('users', JSON.stringify(users)); 
  //   alert('Signup successful! Please log in.'); 
  //   this.username = ''; 
  //   this.password = '';
  // }
}
