

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TeamsService } from '../../teams.service'; // Pastikan path ini benar
import { EsportService } from 'src/app/esport.service';

@Component({
  selector: 'app-wwp',
  templateUrl: './wwp.page.html',
  styleUrls: ['./wwp.page.scss'],
})
export class WwpPage implements OnInit {
  games: any[] = [];

  constructor(
    private router: Router,
    private teamsService: TeamsService,
    private esportservice: EsportService
  ) {}

  ngOnInit() {
    // this.games = this.teamsService.getGames();
    this.esportservice.getgame().subscribe(
      (response) => {
        if (response.result === 'success') {
          this.games = response.data
        }
        else {
          alert(response.message)
        }
      }
    )

    console.log('Games:', this.games);
  }

  goToTeams(game: any) {
    this.router.navigate(['/home/wwp/teams', game.id], {
      state: { selectedGame: game }
    });
  }

  goToAchievement(game: any) {
    this.router.navigate(['/home/wwp/achievement', game.id], {
      state: { selectedGame: game }
    });
  }
}
