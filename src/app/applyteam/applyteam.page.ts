import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applyteam',
  templateUrl: './applyteam.page.html',
  styleUrls: ['./applyteam.page.scss'],
})
export class ApplyteamPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  onFabClick() {
    this.router.navigate(['/applyteam/form-applyteam']);
  }

  ngOnInit() {
  }

}
