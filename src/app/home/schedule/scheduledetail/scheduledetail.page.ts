import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SchedulePage } from '../schedule.page';

import { AlertController } from '@ionic/angular';

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
  constructor(private route: ActivatedRoute, private alertController: AlertController) { }

  index = 0;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = params['index']; // value of 'index' should match the route parameter name
      // You can use the 'index' parameter for your logic here
    });
  }

  schedule = new SchedulePage();
  arrEvent = this.schedule.arrEvent;

  getTimePad(schedule: Schedule): String {
    var hours = schedule.tanggalEvent.getHours();
    var minutes = schedule.tanggalEvent.getMinutes();
    var period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0') + " " + period;
  }

  public alertButtons = ['OK'];

  async tes(){
    const alert = await this.alertController.create({
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: ['Action'],
    });

    await alert.present();
  }
}
