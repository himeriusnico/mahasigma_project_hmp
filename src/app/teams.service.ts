import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private games: Game[] = [
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

  private teams: Team[] = [
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

  constructor() { }

  getGameData(gameId: string): Game | null {
    return this.games.find(game => game.id === gameId) || null;
  }

  getTeamsByGameId(gameId: string): Team[] {
    return this.teams.filter(team => team.gameId === gameId);
  }

  // Metode baru untuk mendapatkan tim berdasarkan gameId dan teamName
  getTeamByGameIdAndName(gameId: string, teamName: string): Team | null {
    return this.teams.find(team => team.gameId === gameId && team.teamName === teamName) || null;
  }
}
