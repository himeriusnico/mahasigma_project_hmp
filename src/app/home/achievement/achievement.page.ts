import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.page.html',
  styleUrls: ['./achievement.page.scss'],
})
export class AchievementPage implements OnInit {
  games = [
    {
      id: 1,
      name: 'Valorant',
      description: 'Valorant is a tactical first-person shooter from Riot Games that combines precise gunplay with unique character abilities. Players engage in strategic, team-based matches where they must complete objectives and outsmart opponents to win.',
      achievement: [
        {
          year: 2024,
          title: 'Best Defensive Team Award.',
          team: 'Team B',
          description: 'Team B has achieved the Best Defensive Award.'
        },
        {
          year: 2023,
          title: 'Champions of the Regional Valorant Showdown.',
          team: 'Team A',
          description: 'Team A has won the regional championship with a flawless performance.',
        },
      ],
      image: 'assets/img/valorant.jpg',
      alt: 'Valorant'
    },
    {
      id: 2,
      name: 'Mobile Legend',
      description: 'Mobile Legends is a multiplayer online battle arena (MOBA) developed by Moonton. Players engage in 5v5 battles using a variety of heroes, aiming to destroy the enemy\'s base while defending their own.',
      achievement: [
        {
          year: 2022,
          title: 'Best Offensive Team Award.',
          team: 'Team C',
          description: 'Team C has achieved the Best Offensive Award.'
        },
        {
          year: 2021,
          title: 'Champions of MPL: Indonesia.',
          team: 'Team D',
          description: 'Team D has achieved the Team Champions of The Mobile Legends: Bang Bang Professional League Indonesia.',
        },
      ],
      image: 'assets/img/mobile-legends.jpg',
      alt: 'Mobile Legends',
    }
  ];

  selectedGame: any;
  selectedYear: number=0;
  availableYears: number[]=[];
  filteredAchievements: any[]=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      const gameId = +params['id'];  // Get the game ID from the route
      this.selectedGame = this.games.find(game => game.id === gameId);
      type Achievement = { year:number};

      if(this.selectedGame && Array.isArray(this.selectedGame.achievements)){
        this.availableYears = [...new Set(this.selectedGame.achievements
          .map((a: Achievement) => a?.year)
          .filter((year:Number) => typeof year=='number') as number[])];
        this.availableYears.unshift(0);  // Add "All" option
        this.filterAchievements();
      }else{
        console.error('Selected game not found!');
      }
    });
  }

  filterAchievements() {
    type Achievement = { year:number};
    if (this.selectedYear === 0) {
      this.filteredAchievements = this.selectedGame.achievements; 
    } else {
      this.filteredAchievements = this.selectedGame.achievements.filter((a: Achievement) => a.year === this.selectedYear);
    }
  }

  goToPage(page: string) {
    this.router.navigate([`/${page}`]);
  }

}
