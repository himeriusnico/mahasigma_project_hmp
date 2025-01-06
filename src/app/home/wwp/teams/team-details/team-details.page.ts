import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EsportService } from 'src/app/esport.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit {
  gameId: number | null = null;
  teamName: string | null = null;
  teamMembers: any[] = [];
  team: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private esportService: EsportService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.gameId = Number(params.get('gameId'));
      this.teamName = params.get('teamName');

      if (this.teamName) {
        // Fetch team members based on teamName
        this.esportService.getteamsmember(this.teamName).subscribe(
          (response: any) => {
            if (response.result === 'success') {
              this.teamMembers = response.data.filter((team: any) => team.name === this.teamName);

              if (this.teamMembers.length > 0) {
                this.team = {
                  teamName: this.teamName,
                  teamPlayers: this.teamMembers,
                };
              } else {
                alert('Team not found!');
                this.router.navigate(['/home/wwp/teams']);
              }
            } else {
              alert('Error fetching team members: ' + response.message);
              this.router.navigate(['/home/wwp/teams']);
            }
          },
          (error) => {
            console.error('Error fetching team members:', error);
            alert('Failed to fetch team members');
            this.router.navigate(['/home/wwp/teams']);
          }
        );
      } else {
        alert('Invalid team or game data');
        this.router.navigate(['/home/wwp/teams']);
      }
    });
  }
}
