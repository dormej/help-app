import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeatingPage } from './heating.page';

const routes: Routes = [
  {
    path: '',
    component: HeatingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeatingPageRoutingModule {}
