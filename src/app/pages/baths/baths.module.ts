import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BathsPageRoutingModule } from './baths-routing.module';

import { BathsPage } from './baths.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BathsPageRoutingModule
  ],
  declarations: [BathsPage]
})
export class BathsPageModule {}
