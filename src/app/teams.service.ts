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
    },
    {
      id: '3',
      name: 'Fortnite',
      image: 'assets/img/fortnite.jpg',
      alt: 'Fortnite Logo',
      description: 'Fortnite adalah permainan battle royale daring di mana 100 pemain bertarung untuk menjadi yang terakhir bertahan.'
    },
    {
      id: '4',
      name: 'Dota 2',
      image: 'assets/img/dota2.jpg',
      alt: 'Dota 2 Logo',
      description: 'Dota 2 adalah permainan arena pertarungan multipemain daring yang kompetitif yang dikembangkan oleh Valve.'
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
    },
    // Fortnite teams
    {
      gameId: '3',
      teamName: 'Fortnite Squad A',
      teamPlayers: [
        { name: 'Pak Raden', role: 'Builder' },
        { name: 'Mbak Yuni', role: 'Sniper' },
        { name: 'Bang Sapri', role: 'Assault' },
        { name: 'Dek Tole', role: 'Support' }
      ]
    },
    {
      gameId: '3',
      teamName: 'Fortnite Squad B',
      teamPlayers: [
        { name: 'Mas Bejo', role: 'Builder' },
        { name: 'Mbak Siti', role: 'Healer' },
        { name: 'Kang Asep', role: 'Sniper' },
        { name: 'Dek Imut', role: 'Assault' }
      ]
    },
    // Dota 2 teams
    {
      gameId: '4',
      teamName: 'Dota Legends',
      teamPlayers: [
        { name: 'Pak Lurah', role: 'Carry' },
        { name: 'Mbah Surip', role: 'Mid' },
        { name: 'Mas Ganteng', role: 'Offlane' },
        { name: 'Mpok Ati', role: 'Support' },
        { name: 'Bang Jali', role: 'Hard Support' }
      ]
    },
    {
      gameId: '4',
      teamName: 'Ancient Defenders',
      teamPlayers: [
        { name: 'Kang Ujang', role: 'Carry' },
        { name: 'Neng Eneng', role: 'Mid' },
        { name: 'Abah Somad', role: 'Offlane' },
        { name: 'Teh Ipeh', role: 'Support' },
        { name: 'Aki Mahmud', role: 'Hard Support' }
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
  
  getGames(): Game[] {
    return this.games; // Mengembalikan array games yang sudah didefinisikan
  }
}
