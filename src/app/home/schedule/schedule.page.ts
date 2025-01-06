import { Component, OnInit } from '@angular/core';
import { EventserviceService } from 'src/app/eventservice.service';
import { EsportService } from 'src/app/esport.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  arrEvent: any[] = [];

  constructor(private esportservice: EsportService) { }

  ngOnInit() {
    this.esportservice.getevent().subscribe(
      (response) => {
        if (response.result === 'success') {
          this.arrEvent = response.data
        }
        else {
          alert(response.message)
        }
      }
    )
  }

  getDatePad(eventdate: string): String {
    const date = new Date(eventdate)
    return date.getDate().toString().padStart(2, '0');
  }

  getStringMonth(eventDate: string): String {
    const date = new Date(eventDate)
    const month = new Array("JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC");
    const m = date.getMonth();
    return month[m];
  }
}
