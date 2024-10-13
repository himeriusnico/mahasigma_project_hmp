import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  selectedGame: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.selectedGame = navigation.extras.state['selectedGame'];
    }
  }

  ngOnInit() {
    if (!this.selectedGame) {
    }
  }

  showTeamDetails(team: any) {
    // Implementasi logika untuk menampilkan detail tim
    console.log('Menampilkan detail tim:', team);
  }
}
