import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface team {
  gameId: string;
  teamName: string;
  player: string[];
}

interface Team {
  gameId: string;
  teamName: string;
  players: string[];
}

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  selectedGame: any;
  valorantTeams: Team[] = [
    {
      gameId: '1',
      teamName: 'Team A',
      players: ['TenZ', 'ShahZaM', 'SicK', 'dapr', 'zombs']
    },
    {
      gameId: '1',
      teamName: 'Team B',
      players: ['ScreaM', 'Jamppi', 'Kryptix', 'L1NK', 'soulcas']
    },
    {
      gameId: '1',
      teamName: 'Team C',
      players: ['Boaster', 'Derke', 'Mistic', 'Doma', 'Magnum']
    },
    {
      gameId: '1',
      teamName: 'Team D',
      players: ['mixwell', 'paTiTek', 'pyth', 'ardiis', 'Davidp']
    }
  ];

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
