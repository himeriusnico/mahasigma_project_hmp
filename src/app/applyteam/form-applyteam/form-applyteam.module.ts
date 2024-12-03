import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormApplyteamPageRoutingModule } from './form-applyteam-routing.module';

import { FormApplyteamPage } from './form-applyteam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormApplyteamPageRoutingModule
  ],
  declarations: [FormApplyteamPage]
})
export class FormApplyteamPageModule {}
