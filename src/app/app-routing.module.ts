import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'wwa',
    loadChildren: () => import('./home/wwa/wwa.module').then( m => m.WwaPageModule)
  },
  {
    path: 'wwp',
    loadChildren: () => import('./home/wwp/wwp.module').then( m => m.WwpPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./home/schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'achievement/:id',
    loadChildren: () => import('./home/wwp/achievement/achievement.module').then( m => m.AchievementPageModule)
  },
  {
    path: 'home/wwp/teams/:gameId',
    loadChildren: () => import('./home/wwp/teams/teams.module').then(m => m.TeamsPageModule)
  },
  {
    path: 'home/wwp/teams/team-details/:gameId/:teamName',
    loadChildren: () => import('./home/wwp/teams/team-details/team-details.module').then(m => m.TeamDetailsPageModule)
  },
  {
    path: 'home/scheduledetail/:index',
    loadChildren: () => import('./home/schedule/scheduledetail/scheduledetail.module').then(m => m.ScheduledetailPageModule)
  },
  {
    path: 'applyteam',
    loadChildren: () => import('./applyteam/applyteam.module').then( m => m.ApplyteamPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
