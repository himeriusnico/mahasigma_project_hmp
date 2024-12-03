import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-form-applyteam',
  templateUrl: './form-applyteam.page.html',
  styleUrls: ['./form-applyteam.page.scss'],
})
export class FormApplyteamPage{
  games = [
    { name: 'Soccer', teams: ['Team A', 'Team B', 'Team C'] },
    { name: 'Basketball', teams: ['Team X', 'Team Y', 'Team Z'] },
    { name: 'Cricket', teams: ['Team Alpha', 'Team Beta'] },
  ];

  selectedGame: any = null;
  teams: string[] = [];
  selectedTeam: string | null = null;
  reason: string = '';

  constructor(private navCtrl: NavController) {}

  // Update teams dropdown based on the selected game
  onGameChange(event: any) {
    const selected = this.games.find((game) => game.name === this.selectedGame.name);
    this.teams = selected ? selected.teams : [];
    this.selectedTeam = null; // Reset the team selection
  }

  // Handle form submission
  submitApplication() {
    console.log('Application Submitted:', {
      game: this.selectedGame.name,
      team: this.selectedTeam,
      reason: this.reason,
    });
    alert('Application submitted successfully!');

    // Navigate back to the home page after submission
    this.navCtrl.navigateBack('/home');
  }

}
