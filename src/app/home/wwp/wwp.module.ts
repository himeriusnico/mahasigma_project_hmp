import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WwpPageRoutingModule } from './wwp-routing.module';

import { WwpPage } from './wwp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WwpPageRoutingModule
  ],
  declarations: [WwpPage]
})
export class WwpPageModule {}
