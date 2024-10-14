import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WwpPage } from './wwp.page';

const routes: Routes = [
  {
    path: '',
    component: WwpPage
  },
  {
    path: 'teams/:id',
    loadChildren: () => import('./teams/teams.module').then( m => m.TeamsPageModule)
  },
  {
    path: 'achievement/:id',
    loadChildren: () => import('./achievement/achievement.module').then( m => m.AchievementPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WwpPageRoutingModule {}
