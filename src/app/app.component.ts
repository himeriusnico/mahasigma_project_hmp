import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service'; // Import the UserService
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  fullname: string | null = null;

  constructor(private userService: UserService, private router: Router) {
    
    this.userService.currentUser.subscribe((user) => {
      this.fullname = user ? user.fullname : null; 
    });
  }

  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '[]');
    this.fullname = currentUser[0]?.fullname || null; 
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.fullname = null; 
    this.userService.clearUser();
  }
}
