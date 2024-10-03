import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'wwp',
    loadChildren: () => import('./wwp/wwp.module').then(m => m.WwpPageModule)
  },
  {
    path: 'wwa',
    loadChildren: () => import('./wwa/wwa.module').then(m => m.WwaPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./schedule/schedule.module').then(m => m.SchedulePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
