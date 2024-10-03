import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduledetailPage } from './scheduledetail.page';

const routes: Routes = [
  {
    path: '',
    component: ScheduledetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduledetailPageRoutingModule {}
