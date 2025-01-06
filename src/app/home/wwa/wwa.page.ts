import { Component, OnInit } from '@angular/core';

interface Description {
  namaTeam:String;
  deskripsiTeam: String;
}

@Component({
  selector: 'app-wwa',
  templateUrl: './wwa.page.html',
  styleUrls: ['./wwa.page.scss'],
})
export class WwaPage implements OnInit {

  arrDesc:Description[] = [
    {
      namaTeam: "MahaSigma",
      deskripsiTeam: "Mahasigma is a competitive e-sports team known for their telentless drive "
      + "and tactical prowess across multiple gaming titles, especially in Valorant and"
      + "League of Legend With a roster of skilled players and a reputation for teamwork"
      + "and strategic excellence."
      + "Mahasigma has earned top placements in regional"
      + "and international tournaments. Their commitment to innovation and growth continues"
      + "to make them a formidable force in the e-sports arena."
    }
  ]
  numberOfLikeClicked:number=0;
  constructor() { }

  likeCount() {
    this.numberOfLikeClicked++;
  }

  ngOnInit() {
  }

}
