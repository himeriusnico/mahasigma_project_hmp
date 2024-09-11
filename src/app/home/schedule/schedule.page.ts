import { Component, OnInit } from '@angular/core';

interface Schedule {
  tanggalEvent: Date,
  namaEvent: String,
  namaGame: String,
  team: String,
  gambarEvent: String,
  lokasiEvent: String,
  deskripsiEvent: String,
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  arrEvent: Schedule[] = [
    {
      tanggalEvent: new Date(2024, 8, 5, 10),
      namaEvent: "Regional Qualifier - Valorant",
      namaGame: "Valorant",
      team: "Team A",
      gambarEvent: "",
      lokasiEvent: "Los Angeles, CA",
      deskripsiEvent: "This high-stakes event will bring together top team from accross the region, all competing for a chance to advance to the national finals. Expect intense gameplay, strategic plays, and thrilling moments as teams battle it out in one of the most popular first-person shooters. Fans can anticipate an action-packed day filled with memorable highlights and fierce competition in the heart of the esports scene.",
    },
    {
      tanggalEvent: new Date(2024, 8, 10),
      namaEvent: "League of Legends Workshop",
      namaGame: "LOL",
      team: "Team C",
      gambarEvent: "",
      lokasiEvent: "",
      deskripsiEvent: "",
    },
    {
      tanggalEvent: new Date(2024, 9, 7),
      namaEvent: "Call of Duty Championship",
      namaGame: "COD",
      team: "Team A",
      gambarEvent: "",
      lokasiEvent: "",
      deskripsiEvent: "",
    },
    {
      tanggalEvent: new Date(2024, 10, 11, 10),
      namaEvent: "Dota 2 Livestream",
      namaGame: "Dota 2",
      team: "Team B",
      gambarEvent: "",
      lokasiEvent: "",
      deskripsiEvent: "",
    },
    {
      tanggalEvent: new Date(2024, 11, 4, 10),
      namaEvent: "Fortnite Invitational",
      namaGame: "Fortnite",
      team: "Team A",
      gambarEvent: "",
      lokasiEvent: "",
      deskripsiEvent: "",
    },
  ]

  getDatePad(schedule: Schedule): String {
    return schedule.tanggalEvent.getDate().toString().padStart(2, '0');
  }

  getStringMonth(schedule: Schedule): String {
    const month = new Array("JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC");
    const m = schedule.tanggalEvent.getMonth();
    return month[m];
  }

  constructor() { }

  ngOnInit() {
  }

}
