import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { StartPageComponent } from './start-page.component';

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: StartPageComponent }])],
  declarations: [StartPageComponent],
  exports: [StartPageComponent],
})
export class StartPageModule {}
