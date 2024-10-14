import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface Player {
  name: string;
  role: string;
}

export interface Team {
  gameId: string;
  teamName: string;
  teamPlayers: Player[];
}

export interface Game {
  id: string;
  name: string;
  image: string;
  alt: string;
  description: string;
}

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
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const gameId = params.get('id');
      if (gameId) {
        this.selectedGame = this.getGameData(gameId);
        this.teams = this.getTeamsByGameId(gameId);
      }
    });
  }

  private getGameData(gameId: string): Game | null {
    const games: Game[] = [
      {
        id: '1',
        name: 'Valorant',
        image: 'assets/img/valorant.jpg',
        alt: 'Valorant Logo',
        description: 'Valorant adalah game FPS taktis 5v5 yang dikembangkan oleh Riot Games.'
      },
      {
        id: '2',
        name: 'Mobile Legends',
        image: 'assets/img/mobile-legends.jpg',
        alt: 'Mobile Legends Logo',
        description: 'Mobile Legends: Bang Bang adalah game MOBA mobile yang dikembangkan oleh Moonton.'
      }
    ];
    return games.find(game => game.id === gameId) || null;
  }

  private getTeamsByGameId(gameId: string): Team[] {
    const allTeams: Team[] = [
      // Valorant teams
      {
        gameId: '1',
        teamName: 'Team A',
        teamPlayers: [
          { name: 'Bang Jarwo', role: 'Duelist' },
          { name: 'Pak Jangkung', role: 'Controller' },
          { name: 'Mas Ucup', role: 'Sentinel' }
        ]
      },
      {
        gameId: '1',
        teamName: 'Team B',
        teamPlayers: [
          { name: 'Paimin', role: 'Initiator' },
          { name: 'Pakde Bambang', role: 'Duelist' }
        ]
      },
      {
        gameId: '1',
        teamName: 'Team C',
        teamPlayers: [
          { name: 'Paijo', role: 'Controller' },
          { name: 'Bu Juminten', role: 'Sentinel' },
          { name: 'Bang Tigor', role: 'Duelist' }
        ]
      },
      // Mobile Legends teams
      {
        gameId: '2',
        teamName: 'ML Team X',
        teamPlayers: [
          { name: 'Babe Roy', role: 'Tank' },
          { name: 'Mak Ijah', role: 'Mage' },
          { name: 'Mas Karyo', role: 'Marksman' }
        ]
      },
      {
        gameId: '2',
        teamName: 'ML Team Y',
        teamPlayers: [
          { name: 'Pak Kumis', role: 'Fighter' },
          { name: 'Bang Iwan', role: 'Assassin' },
          { name: 'Cak Bagong', role: 'Support' }
        ]
      },
      {
        gameId: '2',
        teamName: 'ML Team Z',
        teamPlayers: [
          { name: 'Babe Jampang', role: 'Tank' },
          { name: 'Pak Guru', role: 'Mage' },
          { name: 'Kak Ros', role: 'Marksman' }
        ]
      }
    ];
    return allTeams.filter(team => team.gameId === gameId);
  }

  goToTeamDetails(team: Team) {
    console.log('Team clicked:', team); // Tambahkan ini untuk debugging
    this.router.navigate(['/home/wwp/teams/team-details', this.selectedGame?.id, team.teamName], {
      state: { game: this.selectedGame, team: team }
    });
  }
}
