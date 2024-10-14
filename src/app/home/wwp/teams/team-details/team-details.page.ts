import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game, Team } from '../teams.page';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit {
  game: Game | null = null;
  team: Team | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.game = navigation.extras.state['game'];
      this.team = navigation.extras.state['team'];
    }
  }

  ngOnInit() {
    if (!this.game || !this.team) {
      // Jika data tidak tersedia, kembali ke halaman teams
      this.router.navigate(['/home/wwp/teams']);
    }
  }
}
