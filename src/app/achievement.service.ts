import { Injectable } from '@angular/core';

export interface detailAchievement {
  year: number;
  title: string;
  team: string;
  description: string;
}

export interface gmAchievement {
  id: string;
  name: string;
  description: string;
  achievement: detailAchievement[];
  image: string;
  alt: string;
}

@Injectable({
  providedIn: 'root'
})
export class AchievementService {
  gamesAchievement: gmAchievement[] = [
    {
      id: '1',
      name: 'Valorant',
      description: 'Valorant is a tactical first-person shooter from Riot Games that combines precise gunplay with unique character abilities. Players engage in strategic, team-based matches where they must complete objectives and outsmart opponents to win.',
      achievement: [
        {
          year: 2024,
          title: 'Best Defensive Team Award',
          team: 'Team B',
          description: 'Team B has achieved the Best Defensive Award.'
        },
        {
          year: 2023,
          title: 'Champions of the Regional Valorant Showdown',
          team: 'Team A',
          description: 'Team A has won the regional championship with a flawless performance.'
        },
        {
          year: 2022,
          title: 'Top Fragger of the Year',
          team: 'Team E',
          description: 'Player X from Team E was awarded the Top Fragger of the Year for outstanding kills.'
        },
        {
          year: 2021,
          title: 'Best Tactical Play Award',
          team: 'Team F',
          description: 'Team F won the Best Tactical Play award for executing one of the most coordinated strategies in Valorant history.'
        },
        {
          year: 2020,
          title: 'Rookie Team of the Year',
          team: 'Team G',
          description: 'Team G received the Rookie Team of the Year award for their impressive debut performance.'
        }
      ],
      image: 'assets/img/valorant.jpg',
      alt: 'Valorant'
    },
    {
      id: '2',
      name: 'Mobile Legend',
      description: 'Mobile Legends is a multiplayer online battle arena (MOBA) developed by Moonton. Players engage in 5v5 battles using a variety of heroes, aiming to destroy the enemy\'s base while defending their own.',
      achievement: [
        {
          year: 2022,
          title: 'Best Offensive Team Award',
          team: 'Team C',
          description: 'Team C has achieved the Best Offensive Award.'
        },
        {
          year: 2021,
          title: 'Champions of MPL: Indonesia',
          team: 'Team D',
          description: 'Team D has achieved the Team Champions of The Mobile Legends: Bang Bang Professional League Indonesia.'
        },
        {
          year: 2020,
          title: 'Best Tank Player Award',
          team: 'Team H',
          description: 'Player Y from Team H was awarded the Best Tank Player award for his resilient defense during matches.'
        },
        {
          year: 2019,
          title: 'Fastest Match Victory',
          team: 'Team I',
          description: 'Team I holds the record for the fastest match victory in MPL history, winning the game in under 10 minutes.'
        },
        {
          year: 2018,
          title: 'MVP of the Year',
          team: 'Team J',
          description: 'Player Z from Team J was crowned MVP of the year for leading his team to multiple victories.'
        }
      ],
      image: 'assets/img/mobile-legends.jpg',
      alt: 'Mobile Legends'
    },
    {
      id: '3',
      name: 'Fortnite',
      description: 'Fortnite is an online battle royale game where 100 players fight to be the last one standing, combining crafting, combat, and exploration in a dynamic and evolving game world.',
      achievement: [
        {
          year: 2024,
          title: 'World Cup Champion',
          team: 'Solo Player K',
          description: 'Player K was crowned the Fortnite World Cup Champion with an outstanding final match performance.'
        },
        {
          year: 2023,
          title: 'Best Creative Map Designer',
          team: 'Team L',
          description: 'Team L won the Best Creative Map Designer award for their innovative and challenging map designs.'
        },
        {
          year: 2022,
          title: 'Highest Kill Streak Award',
          team: 'Team M',
          description: 'Player W from Team M achieved the highest kill streak in a single match with 25 consecutive eliminations.'
        },
        {
          year: 2021,
          title: 'Best Squad Play Award',
          team: 'Team N',
          description: 'Team N won the Best Squad Play award for their flawless coordination and victory in multiple tournaments.'
        }
      ],
      image: 'assets/img/fortnite.jpg',
      alt: 'Fortnite'
    },
    {
      id: '4',
      name: 'Dota 2',
      description: 'Dota 2 is a competitive multiplayer online battle arena game developed by Valve. Teams of five players compete to destroy the opposing team\'s Ancient while defending their own.',
      achievement: [
        {
          year: 2023,
          title: 'The International Champions',
          team: 'Team O',
          description: 'Team O claimed victory at The International, the most prestigious Dota 2 tournament, winning a multi-million-dollar prize pool.'
        },
        {
          year: 2022,
          title: 'Best Mid-Lane Player Award',
          team: 'Team P',
          description: 'Player R from Team P was awarded the Best Mid-Lane Player award for his dominant performances throughout the year.'
        },
        {
          year: 2021,
          title: 'Most Strategic Drafting Award',
          team: 'Team Q',
          description: 'Team Q received the Most Strategic Drafting award for their innovative hero picks during The International.'
        },
        {
          year: 2020,
          title: 'Rising Stars Award',
          team: 'Team R',
          description: 'Team R was recognized as the Rising Stars of the Dota 2 scene for their impressive climb through the ranks.'
        }
      ],
      image: 'assets/img/dota2.jpg',
      alt: 'Dota 2'
    }
  ];
  
  constructor() { }

  getAchievementData(gameId: string): gmAchievement | null {
    return this.gamesAchievement.find(game => game.id === gameId) || null;
  }
}
