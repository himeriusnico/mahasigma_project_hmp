import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsService, Game, Team } from '../../../../teams.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit {
  game: Game | null = null;
  team: Team | null = null;

  constructor(
    private router: Router,
    private teamsService: TeamsService
  ) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      const gameId = navigation.extras.state['gameId'];
      const teamName = navigation.extras.state['teamName'];
      
      if (gameId && teamName) {
        this.game = this.teamsService.getGameData(gameId);
        this.team = this.teamsService.getTeamByGameIdAndName(gameId, teamName);
      } else {
        this.router.navigate(['/home/wwp/teams']);
      }
    } else {
      this.router.navigate(['/home/wwp/teams']);
    }
  }
}
