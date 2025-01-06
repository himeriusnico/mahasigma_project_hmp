import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EsportService } from '../esport.service';

@Component({
  selector: 'app-applyteam',
  templateUrl: './applyteam.page.html',
  styleUrls: ['./applyteam.page.scss'],
})
export class ApplyteamPage implements OnInit {
  idmember = -1
  arrProposal: any[] = []

  constructor(
    private router: Router,
    private esportservice: EsportService
  ) { }

  onFabClick() {
    this.router.navigate(['/applyteam/form-applyteam']);
  }

  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.idmember = currentUser[0]?.idmember || null;

    this.esportservice.getproposal(this.idmember).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          this.arrProposal = response.data
        }
        else {
          alert(response.message)
        }
      }
    )
  }
}