import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WwaPage } from './wwa.page';

const routes: Routes = [
  {
    path: '',
    component: WwaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WwaPageRoutingModule {}
