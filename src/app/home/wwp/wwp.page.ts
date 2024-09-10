import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wwp',
  templateUrl: './wwp.page.html',
  styleUrls: ['./wwp.page.scss'],
})
export class WwpPage implements OnInit {
  games = [
    {
      name: 'Valorant',
      description: 'Valorant is a tactical first-person shooter from Riot Games that combines precise gunplay with unique character abilities. Players engage in strategic, team-based matches where they must complete objectives and outsmart opponents to win.',
      image: 'assets/img/valorant.jpg',
      alt: 'Valorant',
    },
    {
      name: 'Mobile Legends',
      description: 'Mobile Legends is a multiplayer online battle arena (MOBA) developed by Moonton. Players engage in 5v5 battles using a variety of heroes, aiming to destroy the enemy\'s base while defending their own.',
      image: 'assets/img/mobile-legends.jpg',
      alt: 'Mobile Legends',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
