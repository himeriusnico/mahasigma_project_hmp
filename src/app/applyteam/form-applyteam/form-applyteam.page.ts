import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EsportService } from 'src/app/esport.service';

@Component({
  selector: 'app-form-applyteam',
  templateUrl: './form-applyteam.page.html',
  styleUrls: ['./form-applyteam.page.scss'],
})
export class FormApplyteamPage{
  selectedGame: any = null;
  selectedTeam: any = null;
  arrGame: any[] = []
  arrTeam: any[] = []
  description: string = '';

  constructor(
    private navCtrl: NavController,
    private esportservice: EsportService
  ) {}

  ngOnInit() {
    this.esportservice.getgame().subscribe(
      (response) => {
        if (response.result === 'success') {
          this.arrGame = response.data
        }
        else {
          alert(response.message)
        }
      }
    )
  }

  // Update teams dropdown based on the selected game
  onGameChange() {
    const selectedgameid = this.selectedGame

    this.esportservice.getteam(selectedgameid).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          this.arrTeam = response.data
        }
        else {
          this.arrTeam = []
        }
      }
    )
  }

  // Handle form submission
  submitApplication() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const idmember = currentUser[0]?.idmember || null;

    this.esportservice.newproposal(idmember, this.selectedTeam, this.description).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          alert(response.message)
          this.navCtrl.navigateBack('/applyteam');
        }
        else {
          alert(response.message)
        }
      }
    )
  }
}