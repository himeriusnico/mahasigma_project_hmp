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
    private route: ActivatedRoute,
    private router: Router,
    private teamsService: TeamsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const gameId = params.get('gameId');
      const teamName = params.get('teamName');
      
      if (gameId && teamName) {
        this.game = this.teamsService.getGameData(gameId);
        this.team = this.teamsService.getTeamByGameIdAndName(gameId, teamName);
        
        if (!this.game || !this.team) {
          // Jika data tidak ditemukan, kembali ke halaman teams
          this.router.navigate(['/home/wwp/teams']);
        }
      } else {
        // Jika parameter tidak lengkap, kembali ke halaman teams
        this.router.navigate(['/home/wwp/teams']);
      }
    });
  }
}
