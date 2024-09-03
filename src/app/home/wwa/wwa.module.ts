import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WwaPageRoutingModule } from './wwa-routing.module';

import { WwaPage } from './wwa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WwaPageRoutingModule
  ],
  declarations: [WwaPage]
})
export class WwaPageModule {}
