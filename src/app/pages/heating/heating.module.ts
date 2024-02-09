import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeatingPageRoutingModule } from './heating-routing.module';

import { HeatingPage } from './heating.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeatingPageRoutingModule
  ],
  declarations: [HeatingPage]
})
export class HeatingPageModule {}
