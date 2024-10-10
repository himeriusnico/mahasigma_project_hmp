import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduledetailPageRoutingModule } from './scheduledetail-routing.module';

import { ScheduledetailPage } from './scheduledetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScheduledetailPageRoutingModule
  ],
  declarations: [ScheduledetailPage]
})
export class ScheduledetailPageModule {}
