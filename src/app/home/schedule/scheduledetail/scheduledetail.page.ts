import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SchedulePage } from '../schedule.page';
import { EventserviceService } from 'src/app/eventservice.service';
import { EsportService } from 'src/app/esport.service';

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
  selector: 'app-scheduledetail',
  templateUrl: './scheduledetail.page.html',
  styleUrls: ['./scheduledetail.page.scss'],
})
export class ScheduledetailPage implements OnInit {
  arrEvent: any[] = [];

  constructor(private route: ActivatedRoute, private esportservice: EsportService) { }

  index = 0;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = params['index'];
    });

    this.esportservice.geteventdetail(this.index).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          this.arrEvent = response.data
        }
        else {
          alert(response.message)
        }
      });
  }

  getTimePad(eventdate: string): String {
    const date = new Date(eventdate)
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0') + " " + period;
  }

  public alertButtons = ['OK'];
}
