import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsService, Game, Team } from '../../../teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  selectedGame: Game | null = null;
  teams: Team[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teamsService: TeamsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const gameId = params.get('id');
      if (gameId) {
        this.selectedGame = this.teamsService.getGameData(gameId);
        this.teams = this.teamsService.getTeamsByGameId(gameId);
      }
    });
  }

  goToTeamDetails(team: Team) {
    console.log('Team clicked:', team);
    this.router.navigate(['/home/wwp/teams/team-details', this.selectedGame?.id, team.teamName], {
      state: { game: this.selectedGame, team: team }
    });
  }
}

