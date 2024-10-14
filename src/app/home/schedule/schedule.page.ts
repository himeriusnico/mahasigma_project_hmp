import { Component, OnInit } from '@angular/core';

import { EventserviceService } from 'src/app/eventservice.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  arrEvent: any[] = [];

  constructor(private eventservice: EventserviceService) { }

  ngOnInit() {
    this.arrEvent = this.eventservice.arrEvent //Isi array berdasarkan data yang ada di event service
  }

  getDatePad(tanggalEvent: Date): String {
    return tanggalEvent.getDate().toString().padStart(2, '0');
  }

  getStringMonth(tanggalEvent: Date): String {
    const month = new Array("JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC");
    const m = tanggalEvent.getMonth();
    return month[m];
  }
}
