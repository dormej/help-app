import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { BathsComponent } from './baths.component';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: BathsComponent }])],
  declarations: [BathsComponent],
  exports: [BathsComponent],
})
export class BathsModule {}
