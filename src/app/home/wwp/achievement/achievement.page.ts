import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EsportService } from 'src/app/esport.service';// Import your service

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.page.html',
  styleUrls: ['./achievement.page.scss'],
})
export class AchievementPage implements OnInit {
  selectedGame: any; // Details of the game (e.g., name, image)
  selectedYear: any = 'All'; // Default filter
  availableYears: number[] = []; // Array of available years
  filteredAchievements: any[] = []; // Achievements after applying filters
  achievement: any[] = [];
  isLoading: boolean = true; // Loading state
  id: number = 0; // Game ID

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private esportService: EsportService
  ) {}

  ngOnInit() {
    // Get the 'id' parameter from the URL
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));

      if (this.id) {
        this.loadAchievements(this.id);
      } else {
        console.error('Game ID is invalid or missing!');
        this.isLoading = false;
      }
    });
  }

  // Function to load achievements
  loadAchievements(gameId: number) {
    this.esportService.getachievements(gameId).subscribe(
      (response: any) => {
        // Set game details based on the game ID
        switch (gameId) {
          case 1:
            this.selectedGame = {
              name: 'Valorant',
              image: 'assets/images/Valorant.jpg' // Replace with the actual path to the Valorant image
            };
            break;
          case 2:
            this.selectedGame = {
              name: 'Mobile Legends',
              image: 'assets/images/mpl.jpg' // Replace with the actual path to the ML image
            };
            break;
          case 3:
            this.selectedGame = {
              name: 'Fortnite',
              image: 'assets/images/Fortnite.jpg' // Replace with the actual path to the Fortnite image
            };
            break;
          case 4:
            this.selectedGame = {
              name: 'Dota 2',
              image: 'assets/images/Dota 2.jpg' // Replace with the actual path to the Dota 2 image
            };
            break;
          default:
            this.selectedGame = {
              name: {gameId},
              image: null
            };
            break;
        }
  
        if (response.result === 'success') {
          this.achievement = response.data;
  
          // Extract available years from the achievements
          this.availableYears = [
            ...new Set(
              this.achievement.map((a: any) => a.date?.split('-')[0]).filter((year: string) => year)
            )
          ].map(year => Number(year)); // Convert years to numbers
  
          this.filterAchievements(); // Apply the initial filter
        } else {
          console.error(response.message);
        }
        this.isLoading = false;
      },
      error => {
        console.error('Error loading achievements:', error);
        this.isLoading = false;
      }
    );
  }
  

  // Function to filter achievements by year
  filterAchievements() {
    if (this.selectedYear === 'All') {
      this.filteredAchievements = this.achievement;
    } else {
      this.filteredAchievements = this.achievement.filter(
        achievement => achievement.date.startsWith(this.selectedYear.toString())
      );
    }
  }

  // Navigation to another page
  goToPage(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
