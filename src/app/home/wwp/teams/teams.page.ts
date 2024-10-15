import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService, Game, Team } from '../../../teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  selectedGame!: Game;
  teams: Team[] = [];

  constructor(
    private router: Router,
    private teamsService: TeamsService
  ) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      const gameId = navigation.extras.state['gameId'];
      if (gameId) {
        const gameData = this.teamsService.getGameData(gameId);
        if (gameData) {
          this.selectedGame = gameData;
          const teamsData = this.teamsService.getTeamsByGameId(gameId);
          if (teamsData) {
            this.teams = teamsData;
          } else {
            console.error('array tim kosong');
          }
        } else {
          console.error('array game kosong');
        }
      }
    }
  }

  goToTeamDetails(team: Team) {
    this.router.navigate(['/home/wwp/teams/team-details', this.selectedGame?.id, team.teamName]);
  }
}
