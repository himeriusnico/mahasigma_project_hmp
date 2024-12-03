import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormApplyteamPage } from './form-applyteam.page';

const routes: Routes = [
  {
    path: '',
    component: FormApplyteamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormApplyteamPageRoutingModule {}
