import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SchedulePage } from '../schedule.page';
import { EventserviceService } from 'src/app/eventservice.service';

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

  constructor(private route: ActivatedRoute, private eventservice: EventserviceService) { }

  index = 0;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = params['index']; // value of 'index' should match the route parameter name
      // You can use the 'index' parameter for your logic here
    });

    this.arrEvent=this.eventservice.arrEvent //Isi array berdasarkan data yang ada di event service
  }

  getTimePad(schedule: Schedule): String {
    var hours = schedule.tanggalEvent.getHours();
    var minutes = schedule.tanggalEvent.getMinutes();
    var period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0') + " " + period;
  }

  public alertButtons = ['OK'];
}
