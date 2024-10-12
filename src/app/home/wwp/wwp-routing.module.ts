import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WwpPage } from './wwp.page';

const routes: Routes = [
  {
    path: '',
    component: WwpPage
  },  {
    path: 'teams',
    loadChildren: () => import('./teams/teams.module').then( m => m.TeamsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WwpPageRoutingModule {}
