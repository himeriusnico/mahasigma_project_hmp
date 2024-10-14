import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AchievementService, gmAchievement } from 'src/app/achievement.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.page.html',
  styleUrls: ['./achievement.page.scss'],
})
export class AchievementPage implements OnInit {
  gamesAchievement: gmAchievement[] = [];
  selectedGame: any;
  selectedYear: any='All';
  availableYears: number[]=[];
  filteredAchievements: any[]=[];
  id: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameAchievementService: AchievementService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.gamesAchievement= this.gameAchievementService.gamesAchievement
      const gameId = params.get('id');
      if (gameId){
        this.selectedGame = this.gameAchievementService.getAchievementData(gameId);
        
      }
      type Achievement = { year:number};
      

      if(this.selectedGame){
        this.availableYears = [...new Set(this.selectedGame.achievement
          .map((a: Achievement) => a?.year)
          .filter((year:Number) => typeof year=='number') as number[])];
        this.filterAchievements();
      }else{
        console.error('Selected game not found!');
      }
    });
  }

  filterAchievements() {
    type Achievement = { year:number};
    if (this.selectedYear === 'All') {
      this.filteredAchievements = this.selectedGame.achievement; 
    } else {
      this.filteredAchievements = this.selectedGame.achievement.filter((a: Achievement) => a.year === this.selectedYear);
    }
  }

  goToPage(page: string) {
    this.router.navigate([`/${page}`]);
  }

}
