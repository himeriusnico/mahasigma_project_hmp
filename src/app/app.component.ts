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
    // Subscribe to the currentUser observable
    this.userService.currentUser.subscribe((user) => {
      this.fullname = user ? user.fullname : null; // Update fullname based on user
    });
  }

  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '[]');
    this.fullname = currentUser[0]?.fullname || null; // Initial load from localStorage
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.fullname = null; // Clear fullname on logout
    this.userService.clearUser(); // Clear user in the UserService
  }
}
