import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  // Method to navigate to different pages based on the input
  goToPage(page: string) {
    this.router.navigate([`/home/${page}`]);
  }

}
