import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsService, Game, Team } from '../../../teams.service';
import { EsportService } from 'src/app/esport.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  selectedGame: Game | null = null;
  teams: Team[] = [];
  arrTeam: any[] = [];
  id = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teamsService: TeamsService,
    private esportservice: EsportService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.esportservice.getteams(this.id).subscribe(
      (response : any) => {
        if (response.result === 'success') {
          this.arrTeam = response.data
          this.selectedGame = response.data
        }
        else {
          alert(response.message)
        }
      }
    )
  }

  goToTeamDetails(team: any) {
    console.log('Fetching team details for:', team);
  
    // Call the EsportService's getteams method with the selected game's ID
    this.esportservice.getteams(this.id).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          // Find the matching team based on the provided team name
          const selectedTeam = response.data.find((t: any) => t.name === team.name);
  
          if (selectedTeam) {
            // Navigate to the team-details page with minimal route parameters
            this.router.navigate(['/home/wwp/teams/team-details', this.id, selectedTeam.name], {
              state: { team: selectedTeam }, // Optionally pass the full team object in state
            });
          } else {
            alert('Team details not found!');
          }
        } else {
          alert(response.message || 'Failed to fetch teams');
        }
      },
      (error) => {
        console.error('Error fetching teams:', error);
        alert('Failed to fetch teams');
      }
    );
  }
  
}

