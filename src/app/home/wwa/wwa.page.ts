import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wwa',
  templateUrl: './wwa.page.html',
  styleUrls: ['./wwa.page.scss'],
})
export class WwaPage implements OnInit {
  numberOfLikeClicked:number=0;
  constructor() { }

  likeCount() {
    this.numberOfLikeClicked++;
  }

  ngOnInit() {
  }

}
